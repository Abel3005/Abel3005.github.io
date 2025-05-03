"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { type Language, translations } from "@/lib/i18n"

interface PricingProps {
  language: Language
}

export default function PricingSection({ language }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const t = translations[language]

  // Pricing calculations
  const pricing = {
    pro: {
      monthly: 3000,
      yearly: 28800, // 2400 per month * 12 (20% discount)
    },
    unlimited: {
      monthly: 5000,
      yearly: 48000, // 4000 per month * 12 (20% discount)
    },
  }

  // Format price based on language
  const formatPrice = (price: number) => {
    if (language === "ko") {
      return new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW", maximumFractionDigits: 0 }).format(
        price,
      )
    } else if (language === "zh") {
      // Convert to CNY for Chinese (approximate conversion)
      const cnyPrice = price / 8 // Approximate KRW to CNY conversion
      return new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY", maximumFractionDigits: 0 }).format(
        cnyPrice,
      )
    } else {
      // Convert to USD for English (approximate conversion)
      const usdPrice = price / 1300 // Approximate KRW to USD conversion
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
        usdPrice,
      )
    }
  }

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-600">{t.pricing}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl section-header-gradient">{t.pricing}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{t.ctaDescription}</p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center space-x-2 bg-muted p-1 rounded-lg mt-6">
            <div
              className={`px-3 py-1 rounded-md cursor-pointer ${billingCycle === "monthly" ? "bg-background shadow-sm" : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              {t.monthly}
            </div>
            <Switch
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            />
            <div
              className={`px-3 py-1 rounded-md cursor-pointer ${billingCycle === "yearly" ? "bg-background shadow-sm" : ""}`}
              onClick={() => setBillingCycle("yearly")}
            >
              {t.yearly}
              <Badge variant="outline" className="ml-2 bg-primary-100 text-primary-600 border-primary-200">
                {t.yearlyDiscount}
              </Badge>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {/* Free Plan */}
          <Card className="flex flex-col card-hover">
            <CardHeader className="flex flex-col space-y-1.5">
              <CardTitle className="text-2xl text-primary-700">{t.free}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">₩0</span>
                <span className="text-muted-foreground"> {t.forever}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 flex-1">
              <Button variant="outline" className="w-full border-primary-300 hover:bg-primary-50">
                {t.startFree}
              </Button>
              <ul className="space-y-2 text-sm">
                {t.freeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col relative border-primary-300 shadow-md">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <Badge className="bg-blue-gradient text-white">{t.mostPopular}</Badge>
            </div>
            <CardHeader className="flex flex-col space-y-1.5 bg-primary-50 rounded-t-lg">
              <CardTitle className="text-2xl text-primary-700">{t.pro}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">
                  {formatPrice(billingCycle === "monthly" ? pricing.pro.monthly : pricing.pro.yearly / 12)}
                </span>
                <span className="text-muted-foreground">{billingCycle === "monthly" ? t.month : t.year}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 flex-1 pt-6">
              <Button className="w-full bg-blue-gradient">{t.upgrade}</Button>
              <ul className="space-y-2 text-sm">
                {t.proFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Unlimited Plan */}
          <Card className="flex flex-col card-hover">
            <CardHeader className="flex flex-col space-y-1.5">
              <CardTitle className="text-2xl text-primary-700">{t.unlimited}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">
                  {formatPrice(billingCycle === "monthly" ? pricing.unlimited.monthly : pricing.unlimited.yearly / 12)}
                </span>
                <span className="text-muted-foreground">{billingCycle === "monthly" ? t.month : t.year}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 flex-1">
              <Button variant="outline" className="w-full border-primary-300 hover:bg-primary-50">
                {t.goUnlimited}
              </Button>
              <ul className="space-y-2 text-sm">
                {t.unlimitedFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
