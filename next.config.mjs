/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/app/:path*',
        destination: 'https://app.iseveryonesafe.com/app/:path*',
        permanent: true,
      },
      {
        source: '/admin/:path*',
        destination: 'https://app.iseveryonesafe.com/admin/:path*',
        permanent: true,
      },
      {
        source: '/join-by-code/:path*',
        destination: 'https://app.iseveryonesafe.com/join-by-code/:path*',
        permanent: true,
      },
      {
        source: '/corp-invite-check/:path*',
        destination: 'https://app.iseveryonesafe.com/corp-invite-check/:path*',
        permanent: true,
      },
      {
        source: '/corp-invite/:path*',
        destination: 'https://app.iseveryonesafe.com/corp-invite/:path*',
        permanent: true,
      },
      {
        source: '/signing_or_signup_app/:path*',
        destination: 'https://app.iseveryonesafe.com/signing_or_signup_app/:path*',
        permanent: true,
      },
      {
        source: '/super_admin/:path*',
        destination: 'https://app.iseveryonesafe.com/super_admin/:path*',
        permanent: true,
      },
      {
        source: '/reset_pw/:path*',
        destination: 'https://app.iseveryonesafe.com/reset_pw/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
