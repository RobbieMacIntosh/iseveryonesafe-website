import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-posts"
import { formatBlogContent } from "@/lib/format-blog-content"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogScrollHandler } from "@/components/blog-scroll-handler"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Is Everyone Safe",
    }
  }

  return {
    title: `${post.title} | Is Everyone Safe Blog`,
    description: post.excerpt,
    keywords: `${post.category}, crisis communication, emergency management, ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  const formattedContent = formatBlogContent(post.content)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <BlogScrollHandler />

      <main className="flex-1">
        {/* Back Button - Enhanced sticky positioning */}
        <section className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <Button variant="ghost" size="sm" asChild className="gap-2 hover:bg-primary/10">
              <Link href="/blog">
                <span>←</span>
                <span>Back to Blog</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* Article Header - Added id for scroll target */}
        <section id="article-title" className="border-b border-border py-12 md:py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-primary/15 px-3 py-1.5 text-sm font-semibold text-foreground">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <span>⏱️</span>
                  <span>{post.readTime}</span>
                </span>
              </div>
              <h1 className="mb-8 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-base font-semibold">
                      <span>👤</span>
                      <span>{post.author}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📅</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <span>🔗</span>
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="mx-auto max-w-5xl">
              <div className="aspect-[21/9] overflow-hidden rounded-xl shadow-lg">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: formattedContent }} />

              {post.source && (
                <div className="mt-12 rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Source & References
                  </h3>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <p className="mb-1 font-medium">{post.source.title}</p>
                      <a
                        href={post.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {post.source.url}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-muted/30 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold md:text-4xl">Related Articles</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                    <Card className="h-full overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                      <div className="aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-3 flex items-center gap-3 text-sm">
                          <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-semibold text-foreground">
                            {relatedPost.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span>⏱️</span>
                            <span className="text-xs">{relatedPost.readTime}</span>
                          </span>
                        </div>
                        <h3 className="text-balance text-lg font-bold leading-tight transition-colors group-hover:text-primary">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="border-t border-border bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-balance text-3xl font-bold md:text-4xl">
                Ready to Enhance Your Crisis Communication?
              </h2>
              <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl">
                See how Is Everyone Safe can help protect your people during emergencies.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="min-w-[180px]">
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="min-w-[180px] bg-transparent">
                  <Link href="/demo">Schedule Demo</Link>
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
