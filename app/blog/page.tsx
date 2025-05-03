"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Search, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Blog post data
const blogPosts = [
  {
    slug: "real-meaning-of-being-good-at-work",
    title: "‘일을 잘한다’는 것의 진짜 의미는 무엇일까?",
    subtitle: "생산성, 집중력, 평온한 마음\n 진짜 실력은 사람에게서 나온다",
    excerpt:
      "‘일을 잘하는 사람’은 단순히 결과를 내는 사람일까요? 이 글은 우리가 흔히 말하는 ‘일잘러’의 개념을 다시 정의합니다. 집중력, 감정 관리, 생산성을 높이는 마인드셋이 왜 더 중요한지를 설명하고, '2분의 법칙'이 어떻게 그 실천을 도울 수 있는지 다룹니다.",
    image: "/placeholder.svg?height=400&width=800&text=Productivity+Mindset",
    date: "May 2, 2025",
    readTime: "6 min",
    featured: true,
    category: "Mindset",
  },
  {
    slug: "how-2-minutes-changed-daegun",
    title: "2분의 법칙으로 다시 시작할 수 있었던 이유",
    subtitle: "작은 시작이 만든 몰입과 회복의 루틴\n지속 가능한 생산성의 전환점",
    excerpt:
      "스타트업을 준비하던 중 끝없이 쌓이는 일들 앞에서 지쳐가고 있었습니다. ‘2분의 법칙’을 접하게 되었고, 작은 실행을 통해 다시 몰입과 목표의 감각을 되찾을 수 있었습니다. 이 서비스는 변화 과정을 통해 지속 가능한 생산성과 습관을 만드는 실질적인 방법을 보여줍니다.",
    image: "/placeholder.svg?height=400&width=800&text=2-Minute+Productivity",
    date: "May 3, 2025",
    readTime: "5 min",
    featured: true,
    category: "Habit",
  },
  {
    slug: "building-habits-with-2-minutes",
    title: "How Users Are Building Habits with Just 2 Minutes a Day",
    subtitle: "Real stories, real results",
    excerpt:
      "Real stories from our community members who transformed their productivity by committing to just 2 minutes of focused action every day.",
    image: "/placeholder.svg?height=300&width=600&text=Success+Stories",
    date: "April 17, 2025",
    readTime: "6 min",
    featured: false,
    category: "Habits",
  },
  {
    slug: "science-of-habit-formation",
    title: "The Science of Habit Formation",
    subtitle: "How your brain builds routines",
    excerpt:
      "Understanding the neuroscience behind habit formation and how to leverage it for personal growth and productivity.",
    image: "/placeholder.svg?height=300&width=600&text=Science",
    date: "April 10, 2025",
    readTime: "7 min",
    featured: false,
    category: "Science",
  },
  {
    slug: "morning-routines-for-productivity",
    title: "5 Two-Minute Morning Routines for Maximum Productivity",
    subtitle: "Start your day right",
    excerpt: "Simple morning habits that take just minutes but set you up for a productive and focused day.",
    image: "/placeholder.svg?height=300&width=600&text=Morning",
    date: "April 3, 2025",
    readTime: "4 min",
    featured: false,
    category: "Productivity",
  },
  {
    slug: "focus-techniques-for-busy-people",
    title: "Focus Techniques for Busy People",
    subtitle: "Find clarity in chaos",
    excerpt: "Practical methods to improve concentration and focus when you're overwhelmed with responsibilities.",
    image: "/placeholder.svg?height=300&width=600&text=Focus",
    date: "March 27, 2025",
    readTime: "5 min",
    featured: false,
    category: "Mindset",
  },
]

// Categories for filtering
const categories = ["All", "Productivity", "Mindset", "Habits", "Science"]

export default function BlogHomepage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 4

  // Filter posts by category
  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  // Get featured post
  const featuredPost = filteredPosts.find((post) => post.featured) || filteredPosts[0]

  // Get remaining posts (excluding featured)
  const remainingPosts = filteredPosts.filter((post) => post !== featuredPost)

  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = remainingPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(remainingPosts.length / postsPerPage)

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to App</span>
          </Link>
          <div className="text-xl font-bold">TwoMinutes Blog</div>
          <div className="w-8"></div> {/* Empty div for flex spacing */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Blog Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">2-Minute Insights</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Quick reads to boost your productivity and build better habits through small, consistent actions.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="mx-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-lg font-medium mb-4">Featured Article</h2>
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid md:grid-cols-5 gap-6 border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="md:col-span-2 aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {featuredPost.category}
                    </Badge>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {featuredPost.readTime} read
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{featuredPost.subtitle}</p>
                  <p className="mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-primary font-medium">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-lg font-medium mb-4">All Articles</h2>
          <div className="space-y-6">
            {currentPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="block group">
                <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="aspect-video relative bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 md:col-span-2">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {post.category}
                        </Badge>
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime} read
                        </span>
                      </div>
                      <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Read article
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="outline"
                    size="sm"
                    className={currentPage === page ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get weekly productivity tips and articles delivered to your inbox
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input placeholder="Your email address" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">TwoMinutes</span>
              <span className="text-muted-foreground">© {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-
               text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
