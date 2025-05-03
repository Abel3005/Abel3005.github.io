import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type Language, translations } from "@/lib/i18n"

interface BlogSectionProps {
  language: Language
}

export default function BlogSection({ language }: BlogSectionProps) {
  const t = translations[language]

  // Blog post data with images
  const blogPosts = [
    {
      title: t.post1Title,
      summary: t.post1Summary,
      image: "/placeholder.svg?height=200&width=400&text=2+Minutes",
      slug: "why-2-minutes-can-change-your-life",
    },
    {
      title: t.post2Title,
      summary: t.post2Summary,
      image: "/placeholder.svg?height=200&width=400&text=Tiny+Tasks",
      slug: "beating-overwhelm-with-tiny-tasks",
    },
    {
      title: t.post3Title,
      summary: t.post3Summary,
      image: "/placeholder.svg?height=200&width=400&text=Success+Stories",
      slug: "building-habits-with-2-minutes",
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-600">
              {t.sectionTitle}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl section-header-gradient">
              {t.sectionTitle}
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{t.sectionSubtitle}</p>
          </div>
        </div>

        {/* Blog Post Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg card-hover border-primary-100"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-700">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{post.summary}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 font-medium hover:underline"
                >
                  {t.readMore}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" asChild className="border-primary-300 hover:bg-primary-50">
            <Link href="/blog">
              {t.viewAllArticles}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
