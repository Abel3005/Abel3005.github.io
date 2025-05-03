"use client"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { type Language, translations } from "@/lib/i18n"

interface LanguageSwitcherProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  const t = translations[language]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm font-medium hover:text-primary">
          <Globe className="h-4 w-4" />
          <span>{t.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("ko")}>{translations.ko.korean}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")}>{translations.en.english}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh")}>{translations.zh.chinese}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
