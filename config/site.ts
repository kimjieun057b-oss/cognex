export const siteConfig = {
  name: "Cognex",
  address: {
    full: "One Vision Drive Natick, MA 01760-2059 USA",
  },
  social: {
    phone: "tel:+18008545999",
    instagram: "https://www.instagram.com/cognex/",
    youtube: "https://www.youtube.com/@CognexCorporation",
  },
  // 라벨은 언어별로 다르므로 dictionaries의 header/footer 항목과 같은 순서로 zip 됩니다.
  gnbLinks: [
    { href: "/products" },
    { href: "/applications" },
    { href: "/support" },
    { href: "/resources" },
    { href: "/about" },
  ],
  mobileNavLinks: [
    { href: "/products", hasDropdown: true },
    { href: "/applications", hasDropdown: true },
    { href: "/support", hasDropdown: true },
    { href: "/resources", hasDropdown: true },
    { href: "/why", hasDropdown: false },
    { href: "/about", hasDropdown: true },
  ],
  footerLinks: {
    nav: [
      { href: "/products" },
      { href: "/case-studies" },
      { href: "/about" },
      { href: "/careers" },
      { href: "/support" },
    ],
    legal: [
      { href: "/privacy" },
      { href: "/terms" },
      { href: "/partner" },
      { href: "#" },
    ],
  },
  copyright: "@2026 Cognex.",
} as const;
