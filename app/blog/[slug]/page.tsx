"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Facebook, Twitter, LinkIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPost({ params }: { params: { slug: string } }) {
  // State for estimated reading time
  const [readingTime, setReadingTime] = useState("5 min")

  // Calculate reading time on component mount
  useEffect(() => {
    // Count words in the article content
    const text = document.getElementById("article-content")?.textContent || ""
    const wordCount = text.split(/\s+/).length
    // Average reading speed: 200-250 words per minute
    const readingTimeMinutes = Math.ceil(wordCount / 200)
    setReadingTime(`${readingTimeMinutes} min`)
  }, [])

  // Function to handle social sharing
  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = "How 2 Minutes a Day Can Change Your Life"

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank",
        )
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "copy":
        navigator.clipboard.writeText(url)
        alert("Link copied to clipboard!")
        break
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            >
              Try the App
            </Button>
          </div>
        </div>
      </header>



      {/* Main Content */}
      <main className="container max-w-3xl mx-auto px-4 py-8">
        {/* Blog Header */}
        <div className="mb-8 border-b pb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            하루 2분이 당신의 인생을 바꿀 수 있는 이유
          </h1>
          <p className="text-xl text-muted-foreground mb-6">Start small. Start now.</p>

          {/* Author and Date */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.svg?height=40&width=40&text=JD"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full border"
              />
              <div>
                <p className="font-medium text-sm">김대건</p>
                <p className="text-xs text-muted-foreground">CEO</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>May 1, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readingTime} read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="min-h-screen bg-white text-gray-900 p-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">나의 변화에서 시작된 2분의 혁신</h1>
        <p className="text-lg">CEO 대건의 이야기</p>
      </section>

      {/* Problem Section */}
      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">“창업은 용기보다, 꾸준함이 필요하다는 걸 알게 되었습니다.”</h2>
        <p>
          IT 개발자로 일하던 저는 더 큰 가치를 만들고 싶어 스타트업 창업에 도전했습니다. 처음엔 주어진 할 일들을 하나씩 해내며 성취감을 느꼈습니다. 그런데 어느 순간부터 일이 쌓이고, 문제들이 복잡해지고, ‘생산성’이 아닌 ‘소진’ 속에 있더군요.
        </p>
        <p>
          계획은 있는데 손이 안 가고, 시간은 쓰는데 진전은 없고… 그때 깨달았습니다. “할 일을 안 한 게 아니라, 시작하지 못하고 있었구나.”
        </p>
      </section>

      {/* Discovery Section */}
      <section className="bg-slate-50 py-12 px-6 rounded-xl max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">2분의 시도, 나를 다시 움직이게 했습니다.</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>기획서를 열고 제목만 적어도</li>
          <li>조사 자료를 2분 동안 스캔만 해봐도</li>
          <li>앱을 켜고 ‘할 일’에 2분 타이머를 눌러 보기만 해도</li>
        </ul>
        <p>
          작은 시작은 큰 부담을 줄였고, 그 행동은 다시 생각과 몰입을 이끌어냈습니다.
        </p>
      </section>

      {/* App Section */}
      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">그래서, 만들었습니다. ‘2분의 법칙’ 앱</h2>
        <p>
          이 앱은 단순한 할 일 관리 앱이 아닙니다. 당신이 해야 할 일을 “시작”하게 만드는 도구입니다.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>해야 할 일을 작게 쪼개고</li>
          <li>2분 동안 시도해보고</li>
          <li>그 결과를 기록하고 다음 행동을 이어갑니다.</li>
        </ul>
      </section>
      <section className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-semibold">제가 겪었기에 공감할 수 있습니다.</h2>
        <p>
          저희의 앱은 시간을 뺏어가는 앱이 아닌 당신이 가치있게 시간을 보낼 수 있게 도울 것입니다. 
          누구나 할 일들을 가지고 있습니다. 또, 그것으로 인해 막막함을 느낍니다.
        </p>
      </section>
      {/* Motivation Section */}
      <section className="bg-slate-100 py-12 px-6 rounded-xl max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">우리는 아직도 많은 할 일 앞에 서 있습니다.</h2>
        <p>
          하지만 이제, 막막함에 멈추는 대신 2분만으로 전진할 수 있습니다.
        </p>
        <p>
          저는 그것을 직접 경험했고, 이제 그 경험을 제품으로 만들어 나누고자 합니다. 이제, 여러분의 <b>'작은 시도'</b>가 인생을 바꾸는 시작이 되기를 바랍니다.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold">지금, ‘2분의 법칙’을 시작해보세요.</h2>
        <p className="text-lg">2분은 짧지만, 당신의 변화는 시작됩니다.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">앱 다운로드</button>
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50">더 알아보기</button>
        </div>
      </section>
    </div>

        {/* Social Share Section */}
        <div className="border-t border-b my-8 py-6">
          <p className="font-medium mb-4">Share this article</p>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => handleShare("twitter")}>
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="outline" size="icon" onClick={() => handleShare("facebook")}>
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="outline" size="icon" onClick={() => handleShare("copy")}>
              <LinkIcon className="h-4 w-4" />
              <span className="sr-only">Copy link</span>
            </Button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <Image
              src="/placeholder.svg?height=64&width=64&text=JD"
              alt="Author"
              width={64}
              height={64}
              className="rounded-full border"
            />
            <div>
              <h3 className="font-bold text-lg mb-1">김대건</h3>
              <p className="text-sm text-muted-foreground mb-3">
              작은 실천을 통해 지속 가능한 습관을 만들어가는 방법을 연구하고, 사람들에게 실질적인 변화를 돕는 생산성 코치가 되고 싶은
              </p>
              <Link href="#" className="text-sm text-primary font-medium hover:underline">
                View all posts
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mb-12">
          <h3 className="font-bold text-xl mb-4">Related Articles</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#" className="block group">
              <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video relative bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Related+Post"
                    alt="Related post"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    Beating Overwhelm with Tiny Tasks
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    How breaking down big goals makes them achievable
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#" className="block group">
              <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video relative bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Related+Post"
                    alt="Related post"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    The Science of Habit Formation
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Understanding how your brain builds lasting habits
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg p-4 z-50">
        <div className="container max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-medium">Ready to start your 2-minute journey?</p>
            <p className="text-sm text-muted-foreground">
              Join thousands building better habits, one small step at a time.
            </p>
          </div>
          <Button size="lg" className="whitespace-nowrap">
            Try the App
          </Button>
        </div>
      </div>
    </div>
  )
}
