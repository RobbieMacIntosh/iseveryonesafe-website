import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log("[v0] Middleware - Supabase URL exists:", !!supabaseUrl)
  console.log("[v0] Middleware - Supabase Key exists:", !!supabaseAnonKey)
  console.log("[v0] Middleware - Path:", request.nextUrl.pathname)

  // If Supabase is not configured, allow access without authentication
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("[v0] Supabase environment variables not configured. Admin routes are unprotected.")
    return NextResponse.next()
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        request.cookies.set({
          name,
          value,
          ...options,
        })
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        })
        response.cookies.set({
          name,
          value,
          ...options,
        })
      },
      remove(name: string, options: any) {
        request.cookies.set({
          name,
          value: "",
          ...options,
        })
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        })
        response.cookies.set({
          name,
          value: "",
          ...options,
        })
      },
    },
  })

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  console.log("[v0] Middleware - User authenticated:", !!user)
  console.log("[v0] Middleware - Auth error:", error?.message || "none")
  console.log(
    "[v0] Middleware - Cookies:",
    request.cookies
      .getAll()
      .map((c) => c.name)
      .join(", "),
  )

  // If accessing admin routes and not authenticated, redirect to login
  if (request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/admin/login") && !user) {
    console.log("[v0] Middleware - Redirecting to login (no user)")
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  // If accessing login page and already authenticated, redirect to admin
  if (request.nextUrl.pathname.startsWith("/admin/login") && user) {
    console.log("[v0] Middleware - Redirecting to admin (user exists)")
    return NextResponse.redirect(new URL("/admin/leads", request.url))
  }

  console.log("[v0] Middleware - Allowing access")
  return response
}

export const config = {
  matcher: ["/admin/:path*"],
}
