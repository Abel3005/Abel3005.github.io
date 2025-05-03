"use client"

import { useState, useEffect } from "react"

// Define supported languages
export type Language = "ko" | "en" | "zh"

// Hook for managing language state with localStorage persistence
export function useLanguage(defaultLanguage: Language = "ko") {
  // Initialize with default, but will be updated from localStorage if available
  const [language, setLanguageState] = useState<Language>(defaultLanguage)

  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["ko", "en", "zh"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    } else {
      // If no saved preference, use browser language or default to Korean
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "zh") {
        setLanguageState("zh")
      } else if (browserLang === "en") {
        setLanguageState("en")
      } else {
        // Default to Korean for all other languages
        setLanguageState("ko")
      }
    }
  }, [])

  // Wrapper for setLanguage that also updates localStorage
  const setLanguage = (lang: Language) => {
    localStorage.setItem("language", lang)
    setLanguageState(lang)
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = lang
  }

  return { language, setLanguage }
}

// Translations for the entire app
export const translations = {
  en: {
    // Navigation
    features: "Features",
    testimonials: "Testimonials",
    pricing: "Pricing",
    blog: "Blog",
    signIn: "Sign In",
    getStarted: "Get Started",

    // Hero Section
    heroTitle: "Start with just 2 minutes",
    heroSubtitle:
      "Turn vague goals into concrete progress. Break inertia, build momentum, and achieve what matters to you—one small step at a time.",
    startJourney: "Start Your Journey",
    learnMore: "Learn More",
    joinText: "Join",
    peopleCount: "2,000+",
    buildingMomentum: "people building momentum",

    // How It Works
    howItWorks: "How It Works",
    smallActionsBigResults: "Small actions, big results",
    approachDescription:
      "Our approach is simple but powerful: 2-minute actions create momentum, momentum builds habits, and habits achieve goals.",

    // Steps
    step1Title: "Start Small",
    step1Description:
      "Begin with just 2 minutes of focused action on your goal. It's small enough to be doable, big enough to matter.",
    step2Title: "Build Momentum",
    step2Description:
      "As you complete tasks, you'll break inertia and create a positive feedback loop of accomplishment.",
    step3Title: "Achieve Goals",
    step3Description: "Watch as consistent small actions compound into significant progress toward your larger goals.",

    // Features
    featuresTitle: "Features",
    featuresHeading: "Everything you need to make progress",
    featuresDescription:
      "Our app is designed to help you overcome procrastination and make consistent progress on what matters.",

    // Feature Items
    feature1Title: "Smart 2-Minute Tasks",
    feature1Description:
      "Get personalized, actionable 2-minute tasks based on your goals and intentions. No more wondering where to start.",
    feature2Title: "Micro-Thought Scrapbook",
    feature2Description:
      "Capture fleeting ideas and watch them grow into larger plans. Your digital garden of progress and inspiration.",
    feature3Title: "Calendar Integration",
    feature3Description:
      "Track meaningful time spent on your goals. See your progress visualized and stay motivated with real data.",
    feature4Title: "Gamified Progress",
    feature4Description:
      "Earn rewards, track streaks, and receive gentle reminders to keep your momentum going day after day.",

    // Testimonials
    testimonialsTitle: "Testimonials",
    testimonialsHeading: "Success stories from our users",
    testimonialsDescription: "See how people just like you are achieving their goals, two minutes at a time.",

    // Testimonial Items
    testimonial1:
      "I started coding again, 2 minutes at a time. Now I'm building my own app and learning every day. The momentum is real!",
    testimonial2:
      "I've tried so many productivity apps, but this is the first one that actually got me to take action instead of just planning.",
    testimonial3:
      "The 2-minute approach helped me write my book. What seemed impossible became inevitable with consistent small steps.",

    // Roles
    developer: "Software Developer",
    marketingManager: "Marketing Manager",
    author: "Author",

    // CTA Section
    ctaHeading: "Ready to start your 2-minute journey?",
    ctaDescription: "Join thousands of others who are turning their goals into reality, one small step at a time.",
    getStartedFree: "Get Started Free",
    seePricing: "See Pricing",
    noCreditCard: "No credit card required. Start with our free plan today.",

    // Footer
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    about: "About",
    rightsReserved: "All rights reserved.",

    // Language
    language: "Language",
    english: "English",
    korean: "한국어",
    chinese: "中文",

    // Pricing
    monthly: "Monthly",
    yearly: "Yearly",
    yearlyDiscount: "Save 20%",
    free: "Free",
    pro: "Pro",
    unlimited: "Unlimited",
    forever: "Forever",
    month: "/month",
    year: "/year",
    startFree: "Start Free",
    upgrade: "Upgrade",
    goUnlimited: "Go Unlimited",
    mostPopular: "Most Popular",
    freeFeatures: [
      "Up to 10 saved links per day",
      "Basic task recommendations",
      "Simple progress tracking",
      "Mobile app access",
      "Email support",
    ],
    proFeatures: [
      "Up to 100 links per day",
      "Advanced task recommendations",
      "Detailed progress analytics",
      "Scrapbooking feature",
      "Smart reminders",
      "Priority support",
    ],
    unlimitedFeatures: [
      "Unlimited saved links",
      "Premium task recommendations",
      "Advanced analytics & reports",
      "Enhanced scrapbooking",
      "Custom reminders & alerts",
      "Calendar integration",
      "Dedicated support",
    ],

    // Blog
    sectionTitle: "2-Minute Insights",
    sectionSubtitle: "Quick reads to boost your productivity and build better habits",
    viewAllArticles: "View All Articles",
    readMore: "Read More",

    // Blog post 1
    post1Title: "Why 2 Minutes Can Change Your Life",
    post1Summary:
      "Discover how the smallest actions can lead to the biggest changes. Learn the science behind micro-habits and why they're so effective at breaking procrastination.",

    // Blog post 2
    post2Title: "Beating Overwhelm with Tiny Tasks",
    post2Summary:
      "Feel stuck with too many goals? Learn how breaking them down into 2-minute actions can help you overcome paralysis and start making real progress.",

    // Blog post 3
    post3Title: "How Users Are Building Habits with Just 2 Minutes a Day",
    post3Summary:
      "Real stories from our community members who transformed their productivity by committing to just 2 minutes of focused action every day.",
  },
  ko: {
    // Navigation
    features: "기능",
    testimonials: "사용후기",
    pricing: "요금제",
    blog: "블로그",
    signIn: "로그인",
    getStarted: "시작하기",

    // Hero Section
    heroTitle: "단 2분으로 시작하세요",
    heroSubtitle:
      "막연한 목표를 구체적인 성과로 바꿔보세요. 정체된 상태를 깨고, 탄력을 얻어 중요한 일을 한 걸음씩 이루어 나가세요.",
    startJourney: "지금 시작하기",
    learnMore: "더 알아보기",
    joinText: "이미",
    peopleCount: "2,000명 이상이",
    buildingMomentum: "함께하고 있습니다",

    // How It Works
    howItWorks: "이용 방법",
    smallActionsBigResults: "작은 행동, 큰 변화",
    approachDescription:
      "우리의 접근법은 단순하지만 강력합니다: 2분 행동이 탄력을 만들고, 탄력이 습관을 형성하며, 습관이 목표를 달성합니다.",

    // Steps
    step1Title: "작게 시작하기",
    step1Description: "목표에 집중하여 단 2분만 행동하세요. 부담 없이 시작할 수 있지만, 충분히 의미 있는 시간입니다.",
    step2Title: "탄력 얻기",
    step2Description: "작업을 완료하면서 정체된 상태를 깨고 성취감의 선순환을 만들어보세요.",
    step3Title: "목표 달성하기",
    step3Description: "꾸준한 작은 행동들이 모여 더 큰 목표를 향한 의미 있는 진전으로 이어지는 것을 경험하세요.",

    // Features
    featuresTitle: "주요 기능",
    featuresHeading: "성장에 필요한 모든 것",
    featuresDescription: "우리 앱은 미루는 습관을 극복하고 중요한 일에 꾸준한 진전을 이룰 수 있도록 설계되었습니다.",

    // Feature Items
    feature1Title: "스마트 2분 작업",
    feature1Description:
      "목표와 의도에 맞춘 개인화된 2분 작업을 추천받으세요. 더 이상 어디서부터 시작해야 할지 고민하지 마세요.",
    feature2Title: "마이크로 아이디어 노트",
    feature2Description:
      "순간적인 아이디어를 기록하고 더 큰 계획으로 발전시켜 보세요. 당신의 성장과 영감을 위한 디지털 정원입니다.",
    feature3Title: "캘린더 연동",
    feature3Description:
      "목표에 투자한 의미 있는 시간을 추적하세요. 진행 상황을 시각화하고 실제 데이터로 동기부여를 유지하세요.",
    feature4Title: "게임화된 성장 과정",
    feature4Description: "보상을 얻고, 연속 기록을 추적하며, 매일 탄력을 유지할 수 있는 부드러운 알림을 받아보세요.",

    // Testimonials
    testimonialsTitle: "사용자 후기",
    testimonialsHeading: "사용자들의 성공 스토리",
    testimonialsDescription: "당신과 같은 사람들이 어떻게 2분씩 목표를 달성하고 있는지 확인해보세요.",

    // Testimonial Items
    testimonial1: "2분씩 다시 코딩을 시작했어요. 이제 제 앱을 만들고 매일 배우고 있습니다. 탄력이 정말 생겼어요!",
    testimonial2:
      "수많은 생산성 앱을 써봤지만, 이 앱은 단순히 계획만 세우는 것이 아니라 실제로 행동하게 만든 첫 번째 앱입니다.",
    testimonial3:
      "2분 접근법이 책 쓰기에 큰 도움이 되었어요. 불가능해 보였던 일이 작은 단계들을 꾸준히 밟아가니 자연스럽게 이루어졌습니다.",

    // Roles
    developer: "소프트웨어 개발자",
    marketingManager: "마케팅 매니저",
    author: "작가",

    // CTA Section
    ctaHeading: "2분 여정을 시작할 준비가 되셨나요?",
    ctaDescription: "목표를 한 번에 한 작은 단계씩 현실로 만들어가는 수천 명의 사용자들과 함께하세요.",
    getStartedFree: "무료로 시작하기",
    seePricing: "요금제 보기",
    noCreditCard: "신용카드가 필요 없습니다. 오늘 무료 플랜으로 시작하세요.",

    // Footer
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    contact: "문의하기",
    about: "소개",
    rightsReserved: "모든 권리 보유.",

    // Language
    language: "언어",
    english: "English",
    korean: "한국어",
    chinese: "中文",

    // Pricing
    monthly: "월간",
    yearly: "연간",
    yearlyDiscount: "20% 할인",
    free: "무료",
    pro: "프로",
    unlimited: "무제한",
    forever: "평생",
    month: "/월",
    year: "/년",
    startFree: "무료로 시작",
    upgrade: "업그레이드",
    goUnlimited: "무제한으로",
    mostPopular: "가장 인기",
    freeFeatures: [
      "하루 최대 10개 링크 저장",
      "기본 작업 추천",
      "간단한 진행 상황 추적",
      "모바일 앱 접근",
      "이메일 지원",
    ],
    proFeatures: [
      "하루 최대 100개 링크",
      "고급 작업 추천",
      "상세한 진행 분석",
      "스크랩북 기능",
      "스마트 알림",
      "우선 지원",
    ],
    unlimitedFeatures: [
      "무제한 링크 저장",
      "프리미엄 작업 추천",
      "고급 분석 및 보고서",
      "향상된 스크랩북",
      "맞춤형 알림 및 경고",
      "캘린더 통합",
      "전담 지원",
    ],

    // Blog
    sectionTitle: "2분 인사이트",
    sectionSubtitle: "생산성을 높이고 더 나은 습관을 형성하는 빠른 읽을거리",
    viewAllArticles: "모든 글 보기",
    readMore: "더 읽기",

    // Blog post 1
    post1Title: "2분이 당신의 인생을 바꾸는 이유",
    post1Summary:
      "가장 작은 행동이 어떻게 가장 큰 변화로 이어지는지 알아보세요. 마이크로 습관 뒤에 숨은 과학과 그것이 미루는 습관을 깨는 데 왜 그렇게 효과적인지 배워보세요.",

    // Blog post 2
    post2Title: "작은 작업으로 부담감 극복하기",
    post2Summary:
      "너무 많은 목표로 막막하신가요? 2분 행동으로 나누는 것이 어떻게 마비 상태를 극복하고 실제 진전을 이루는 데 도움이 되는지 알아보세요.",

    // Blog post 3
    post3Title: "사용자들이 하루 단 2분으로 습관을 형성하는 방법",
    post3Summary: "매일 단 2분의 집중된 행동에 전념함으로써 생산성을 변화시킨 커뮤니티 회원들의 실제 이야기.",
  },
  zh: {
    // Navigation
    features: "功能",
    testimonials: "用户评价",
    pricing: "价格",
    blog: "博客",
    signIn: "登录",
    getStarted: "开始使用",

    // Hero Section
    heroTitle: "只需2分钟，开启改变",
    heroSubtitle: "将模糊的目标转化为具体的进步。打破惯性，建立动力，一步一步实现对你重要的事情。",
    startJourney: "开始你的旅程",
    learnMore: "了解更多",
    joinText: "加入",
    peopleCount: "2,000+",
    buildingMomentum: "正在建立动力的用户",

    // How It Works
    howItWorks: "工作原理",
    smallActionsBigResults: "小行动，大结果",
    approachDescription: "我们的方法简单而强大：2分钟行动创造动力，动力培养习惯，习惯实现目标。",

    // Steps
    step1Title: "从小开始",
    step1Description: "只需专注于你的目标2分钟。这个时间短到容易执行，却足以产生意义。",
    step2Title: "建立动力",
    step2Description: "当你完成任务时，你会打破惯性并创造一个积极的成就反馈循环。",
    step3Title: "实现目标",
    step3Description: "看着持续的小行动如何累积成为朝着更大目标的显著进步。",

    // Features
    featuresTitle: "功能特点",
    featuresHeading: "你需要的一切进步工具",
    featuresDescription: "我们的应用旨在帮助你克服拖延，在重要事项上取得持续进步。",

    // Feature Items
    feature1Title: "智能2分钟任务",
    feature1Description: "根据你的目标和意图获取个性化、可操作的2分钟任务。不再犹豫从何开始。",
    feature2Title: "微思想剪贴簿",
    feature2Description: "捕捉稍纵即逝的想法，看着它们成长为更大的计划。这是你进步和灵感的数字花园。",
    feature3Title: "日历集成",
    feature3Description: "追踪在目标上花费的有意义时间。通过真实数据可视化你的进步并保持动力。",
    feature4Title: "游戏化进度",
    feature4Description: "获得奖励，追踪连续记录，接收温和提醒以保持每天的动力。",

    // Testimonials
    testimonialsTitle: "用户评价",
    testimonialsHeading: "用户的成功故事",
    testimonialsDescription: "看看像你一样的人如何一次2分钟地实现他们的目标。",

    // Testimonial Items
    testimonial1: "我重新开始编程，每次2分钟。现在我正在构建自己的应用并每天学习。动力是真实存在的！",
    testimonial2: "我尝试过很多生产力应用，但这是第一个真正让我采取行动而不仅仅是计划的应用。",
    testimonial3: "2分钟方法帮助我写了我的书。通过持续的小步骤，看似不可能的事情变得必然。",

    // Roles
    developer: "软件开发者",
    marketingManager: "市场经理",
    author: "作家",

    // CTA Section
    ctaHeading: "准备好开始你的2分钟旅程了吗？",
    ctaDescription: "加入成千上万的人，他们正在一步一步地将目标变为现实。",
    getStartedFree: "免费开始",
    seePricing: "查看价格",
    noCreditCard: "无需信用卡。今天就开始使用我们的免费计划。",

    // Footer
    privacy: "隐私政策",
    terms: "使用条款",
    contact: "联系我们",
    about: "关于我们",
    rightsReserved: "保留所有权利。",

    // Language
    language: "语言",
    english: "English",
    korean: "한국어",
    chinese: "中文",

    // Pricing
    monthly: "月付",
    yearly: "年付",
    yearlyDiscount: "节省20%",
    free: "免费",
    pro: "专业版",
    unlimited: "无限版",
    forever: "永久",
    month: "/月",
    year: "/年",
    startFree: "免费开始",
    upgrade: "升级",
    goUnlimited: "选择无限版",
    mostPopular: "最受欢迎",
    freeFeatures: ["每天最多保存10个链接", "基本任务推荐", "简单进度跟踪", "移动应用访问", "电子邮件支持"],
    proFeatures: ["每天最多100个链接", "高级任务推荐", "详细进度分析", "剪贴簿功能", "智能提醒", "优先支持"],
    unlimitedFeatures: [
      "无限保存链接",
      "高级任务推荐",
      "高级分析和报告",
      "增强型剪贴簿",
      "自定义提醒和警报",
      "日历集成",
      "专属支持",
    ],

    // Blog
    sectionTitle: "2分钟见解",
    sectionSubtitle: "快速阅读，提高生产力，培养更好的习惯",
    viewAllArticles: "查看所有文章",
    readMore: "阅读更多",

    // Blog post 1
    post1Title: "为什么2分钟能改变你的生活",
    post1Summary: "发现最小的行动如何带来最大的改变。了解微习惯背后的科学原理，以及为什么它们在打破拖延方面如此有效。",

    // Blog post 2
    post2Title: "用微小任务克服压力",
    post2Summary: "感觉被太多目标困住了？了解如何将它们分解为2分钟的行动，帮助你克服停滞并开始取得真正的进步。",

    // Blog post 3
    post3Title: "用户如何通过每天2分钟培养习惯",
    post3Summary: "来自我们社区成员的真实故事，他们通过每天专注2分钟的行动改变了自己的生产力。",
  },
}
