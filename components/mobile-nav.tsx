"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { type Language, translations } from "@/lib/i18n"

interface MobileNavProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export function MobileNav({ language, setLanguage }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const t = translations[language]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary-600">TwoMinutes</span>
          </div>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetClose>
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          <SheetClose asChild>
            <Link href="#features" className="text-lg font-medium">
              {t.features}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#testimonials" className="text-lg font-medium">
              {t.testimonials}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#pricing" className="text-lg font-medium">
              {t.pricing}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/blog" className="text-lg font-medium">
              {t.blog}
            </Link>
          </SheetClose>

          {/* Language Switcher */}
          <div className="py-2">
            <p className="mb-2 text-sm text-muted-foreground">{t.language}</p>
            <div className="flex gap-2">
              <Button
                variant={language === "ko" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("ko")}
                className={language === "ko" ? "bg-blue-gradient" : ""}
              >
                {translations.ko.korean}
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-blue-gradient" : ""}
              >
                {translations.en.english}
              </Button>
              <Button
                variant={language === "zh" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("zh")}
                className={language === "zh" ? "bg-blue-gradient" : ""}
              >
                {translations.zh.chinese}
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              {t.signIn}
            </Link>
            <Button className="w-full bg-blue-gradient">{t.getStarted}</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
