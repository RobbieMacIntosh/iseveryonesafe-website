import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts as allBlogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crisis Communication Blog & Resources | Is Everyone Safe",
  description:
    "Expert insights, best practices, and resources for crisis communication, emergency management, and workplace safety. Stay informed with Is Everyone Safe's blog.",
  keywords:
    "crisis communication blog, emergency management resources, workplace safety tips, campus safety best practices, event safety planning",
  openGraph: {
    title: "Crisis Communication Blog & Resources | Is Everyone Safe",
    description: "Expert guidance and best practices for crisis communication and emergency management.",
    type: "website",
  },
}

interface BlogPageProps {
  searchParams: { category?: string }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const categories = [...new Set(allBlogPosts.map((post) => post.category))]

  const selectedCategory = searchParams.category
  const blogPosts = selectedCategory
    ? allBlogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory)
    : allBlogPosts

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Crisis Communication Insights
              </h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Expert guidance, best practices, and resources for keeping your people safe and informed during
                emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border bg-background py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link href="/blog">
                <button
                  className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    !selectedCategory
                      ? "bg-primary text-primary-foreground border-2 border-primary"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  All Posts
                </button>
              </Link>
              {categories.map((category) => {
                const categorySlug = category.toLowerCase().replace(/\s+/g, "-")
                const isActive = selectedCategory === categorySlug
                return (
                  <Link key={category} href={`/blog?category=${categorySlug}`}>
                    <button
                      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground border-2 border-primary"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {category}
                    </button>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            {blogPosts.length === 0 ? (
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-lg text-muted-foreground">
                  No blog posts available in this category.{" "}
                  <Link href="/blog" className="text-primary hover:underline">
                    View all posts
                  </Link>
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="h-full overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                      <div className="aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex h-full flex-col p-6">
                        <div className="mb-4 flex items-center gap-3 text-sm">
                          <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-semibold text-foreground">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span>⏱️</span>
                            <span className="text-xs">{post.readTime}</span>
                          </span>
                        </div>
                        <h2 className="mb-3 text-balance text-xl font-bold leading-tight transition-colors group-hover:text-primary md:text-2xl">
                          {post.title}
                        </h2>
                        <p className="mb-6 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 border-t border-border/50 pt-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <span>👤</span>
                            <span className="font-medium">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span>📅</span>
                            <span>
                              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="border-t border-border bg-gradient-to-b from-muted/30 to-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Stay Informed</h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Subscribe to our newsletter for the latest insights on crisis communication and emergency management.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-lg border border-input bg-background px-4 text-sm shadow-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-80"
                />
                <Button size="lg" className="h-12">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
