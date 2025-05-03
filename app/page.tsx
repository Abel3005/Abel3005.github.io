"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Lightbulb, BookOpen, Trophy, ArrowRight, CheckCircle } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { LanguageSwitcher } from "@/components/language-switcher"
import PricingSection from "@/components/pricing-section"
import BlogSection from "@/components/blog-section"
import { useLanguage, translations } from "@/lib/i18n"

export default function LandingPage() {
  // Use the language hook with Korean as default
  const { language, setLanguage } = useLanguage("ko")
  const t = translations[language]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eoS35T3jAl8Ox1qTvzTwnl2uSV2nHJ.png"
              alt="Software Maestro Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-primary-600">TwoMinutes</span>
          </div>
          <nav className="hidden md:flex gap-10">
            <Link href="#features" className="tex-mm flex flex-col justify-center font-[550] hover:text-primary">
              {t.features}
            </Link>
            <Link href="#testimonials" className="text-mm flex flex-col justify-center font-[550] hover:text-primary">
              {t.testimonials}
            </Link>
            <Link href="#pricing" className="text-mm flex flex-col justify-center font-[550] hover:text-primary">
              {t.pricing}
            </Link>
            <Link href="/blog" className="text-mm flex flex-col justify-center font-[550] hover:text-primary">
              {t.blog}
            </Link>

            {/* Language Switcher Component */}
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <Button className="hidden md:inline-flex bg-blue-gradient">{t.getStarted}</Button>
            <MobileNav language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="section-header-gradient">{t.heroTitle}</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{t.heroSubtitle}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8 bg-blue-gradient">
                    {t.startJourney}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-300 hover:bg-primary-50">
                    {t.learnMore}
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt="User avatar"
                          width={32}
                          height={32}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t.joinText} <span className="font-medium text-foreground">{t.peopleCount}</span>{" "}
                    {t.buildingMomentum}
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 to-primary-500/10 rounded-3xl blur-3xl -z-10" />
                <Image
                  src="/placeholder.svg?height=550&width=550&text=App+Screenshot"
                  width={550}
                  height={550}
                  alt="App screenshot"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-600">
                  {t.howItWorks}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl section-header-gradient">
                  {t.smallActionsBigResults}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{t.approachDescription}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary-700">{t.step1Title}</h3>
                <p className="text-center text-muted-foreground">{t.step1Description}</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary-700">{t.step2Title}</h3>
                <p className="text-center text-muted-foreground">{t.step2Description}</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary-700">{t.step3Title}</h3>
                <p className="text-center text-muted-foreground">{t.step3Description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-600">
                  {t.featuresTitle}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl section-header-gradient">
                  {t.featuresHeading}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{t.featuresDescription}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
              {/* Feature 1 */}
              <Card className="card-hover border-primary-100">
                <CardContent className="flex flex-col items-start p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <Lightbulb className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700">{t.feature1Title}</h3>
                  <p className="text-muted-foreground">{t.feature1Description}</p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="card-hover border-primary-100">
                <CardContent className="flex flex-col items-start p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700">{t.feature2Title}</h3>
                  <p className="text-muted-foreground">{t.feature2Description}</p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="card-hover border-primary-100">
                <CardContent className="flex flex-col items-start p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700">{t.feature3Title}</h3>
                  <p className="text-muted-foreground">{t.feature3Description}</p>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="card-hover border-primary-100">
                <CardContent className="flex flex-col items-start p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <Trophy className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700">{t.feature4Title}</h3>
                  <p className="text-muted-foreground">{t.feature4Description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-600">
                  {t.testimonialsTitle}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl section-header-gradient">
                  {t.testimonialsHeading}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{t.testimonialsDescription}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {/* Testimonial 1 */}
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-primary-100 p-6 shadow-sm card-hover">
                <div className="space-y-2">
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CheckCircle key={star} className="h-5 w-5 fill-primary-300 text-primary-600" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">"{t.testimonial1}"</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=JP"
                    width={40}
                    height={40}
                    alt="User avatar"
                    className="rounded-full border border-primary-100"
                  />
                  <div>
                    <p className="text-sm font-medium">Jamie P.</p>
                    <p className="text-xs text-muted-foreground">{t.developer}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-primary-100 p-6 shadow-sm card-hover">
                <div className="space-y-2">
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CheckCircle key={star} className="h-5 w-5 fill-primary-300 text-primary-600" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">"{t.testimonial2}"</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=SL"
                    width={40}
                    height={40}
                    alt="User avatar"
                    className="rounded-full border border-primary-100"
                  />
                  <div>
                    <p className="text-sm font-medium">Sarah L.</p>
                    <p className="text-xs text-muted-foreground">{t.marketingManager}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-primary-100 p-6 shadow-sm card-hover">
                <div className="space-y-2">
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CheckCircle key={star} className="h-5 w-5 fill-primary-300 text-primary-600" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">"{t.testimonial3}"</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=MJ"
                    width={40}
                    height={40}
                    alt="User avatar"
                    className="rounded-full border border-primary-100"
                  />
                  <div>
                    <p className="text-sm font-medium">Michael J.</p>
                    <p className="text-xs text-muted-foreground">{t.author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection language={language} />

        {/* Pricing Section */}
        <PricingSection language={language} />

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl section-header-gradient">
                  {t.ctaHeading}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{t.ctaDescription}</p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button size="lg" className="px-8 bg-blue-gradient">
                    {t.getStartedFree}
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-300 hover:bg-primary-50">
                    {t.seePricing}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">{t.noCreditCard}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eoS35T3jAl8Ox1qTvzTwnl2uSV2nHJ.png"
              alt="Software Maestro Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <span className="text-lg font-bold text-primary-600">TwoMinutes</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary-600">
              {t.privacy}
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary-600">
              {t.terms}
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary-600">
              {t.contact}
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary-600">
              {t.about}
            </Link>
          </nav>
          <div className="text-center text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} TwoMinutes. {t.rightsReserved}
          </div>
        </div>
      </footer>
    </div>
  )
}
