export const seoConfig = {
  siteName: "Is Everyone Safe",
  siteUrl: "https://iseveryonesafe.com",
  defaultTitle: "Is Everyone Safe - Crisis & Incident Communication Platform",
  defaultDescription:
    "Keep employees, students, event attendees, and citizens safe with real-time crisis alerts from employers, educational institutions, government agencies, and emergency responders.",
  twitterHandle: "@iseveryonesafe",
  socialLinks: {
    twitter: "https://twitter.com/iseveryonesafe",
    linkedin: "https://linkedin.com/company/iseveryonesafe",
    facebook: "https://facebook.com/iseveryonesafe",
  },
  keywords: [
    "crisis communication",
    "emergency alerts",
    "incident notification",
    "workplace safety",
    "campus safety",
    "event safety",
    "government alerts",
    "emergency management",
    "mass notification",
    "public safety",
  ],
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-image.jpg",
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
}) {
  const url = `${seoConfig.siteUrl}${path}`

  return {
    title,
    description,
    keywords: [...seoConfig.keywords, ...keywords],
    openGraph: {
      title,
      description,
      url,
      type: "website" as const,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
      creator: seoConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  }
}
