export const siteConfig = {
  name: "Cognex",
  description: "산업 자동화를 위한 세계 최고의 머신 비전 솔루션",
  address: {
    company: "Cognex 본사",
    full: "One Vision Drive Natick, MA 01760-2059 USA",
  },
  social: {
    phone: "tel:+18008545999",
    instagram: "https://www.instagram.com/cognex/",
    youtube: "https://www.youtube.com/@CognexCorporation",
  },
  gnbLinks: [
    { label: "제품", href: "/products" },
    { label: "애플리케이션", href: "/applications" },
    { label: "지원", href: "/support" },
    { label: "도구 및 자료", href: "/resources" },
    { label: "회사 소개", href: "/about" },
  ],
  mobileNavLinks: [
    { label: "제품", href: "/products", hasDropdown: true },
    { label: "애플리케이션", href: "/applications", hasDropdown: true },
    { label: "지원", href: "/support", hasDropdown: true },
    { label: "도구 및 자료", href: "/resources", hasDropdown: true },
    { label: "Why Cognex", href: "/why", hasDropdown: false },
    { label: "회사", href: "/about", hasDropdown: true },
  ],
  footerLinks: {
    nav: [
      { label: "제품", href: "/products" },
      { label: "고객사례", href: "/case-studies" },
      { label: "회사소개", href: "/about" },
      { label: "채용", href: "/careers" },
      { label: "지원", href: "/support" },
    ],
    legal: [
      { label: "개인정보보호정책", href: "/privacy" },
      { label: "서비스 약관", href: "/terms" },
      { label: "Partner Portal", href: "/partner" },
      { label: "Cookies Settings", href: "#" },
    ],
  },
  copyright: "@2026 Cognex.",
} as const;
