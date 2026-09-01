import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Cognex | Machine Vision & AI Solutions",
    description:
      "Cognex delivers world-leading machine vision solutions for industrial automation, solving automation challenges with high accuracy and ease of use.",
  },

  header: {
    homeAria: "Go to Cognex home",
    searchPlaceholder: "Search",
    searchAria: "Search",
    myCognex: "MyCognex",
    languageAria: "Select language",
    navAria: "Main navigation",
    mobileNavAria: "Mobile navigation",
    menuOpenAria: "Open menu",
    menuCloseAria: "Close menu",
    gnbLabels: ["Products", "Applications", "Support", "Tools & Resources", "About Us"],
    mobileNavLabels: ["Products", "Applications", "Support", "Tools & Resources", "Why Cognex", "Company"],
    mobileCta: {
      line1: "Not sure which product",
      line2: "you need?",
      linkLabel: "Explore Products",
    },
  },

  footer: {
    footerAria: "Site footer",
    companyName: "Cognex Headquarters",
    phoneAria: "Call us",
    instagramAria: "Cognex on Instagram",
    youtubeAria: "Cognex on YouTube",
    navAria: "Footer navigation",
    legalAria: "Legal navigation",
    navLabels: ["Products", "Case Studies", "About Us", "Careers", "Support"],
    legalLabels: ["Privacy Policy", "Terms of Service", "Partner Portal", "Cookies Settings"],
    newsletterTitle: "Get Cognex updates",
    emailPlaceholder: "Email address",
    countryAria: "Select country/region",
    countryPlaceholder: "Country / Region",
    countries: ["South Korea", "United States", "China", "Japan", "Germany", "United Kingdom"],
    salesButton: "Contact Sales",
  },

  hero: {
    ariaLabel: "Hero section",
    title: ["Continuously delivering", "new AI vision"],
    body: "Discover Cognex's latest AI-powered products, designed to solve automation challenges with high accuracy and ease of use.",
    cta: "Download Product Guide",
    slideAria: (i, label) => `Slide ${i + 1}: ${label}`,
    slideGoToAria: (i) => `Go to slide ${i + 1}`,
    slides: [
      { label: ["Processing power and flexibility", "for complex automation challenges"], alt: "Cognex In-Sight AI machine vision system" },
      { label: ["Standardize & scale AI inspection", "processes with OneVision"], alt: "Cognex OneVision software" },
      { label: ["Ultra-fast AI-powered inspection", "for seamless production lines"], alt: "Cognex vision sensor" },
      { label: ["Trusted by 500+ companies", "worldwide — Cognex AI vision"], alt: "Cognex 3D laser scanner" },
    ],
  },

  company: {
    ariaLabel: "Company section",
    title: "We deliver the world's leading machine vision solutions for industrial automation.",
    body: "We are leading the shift to AI-powered vision automation by uniquely delivering the capabilities that matter most to industrial production.",
    circles: [
      { label: "Company Overview", sub: "Who we are" },
      { label: "Technology & Innovation", sub: "Technology & AI" },
      { label: "Key Industries", sub: "Industries" },
    ],
    stats: ["Founded", "Global Installations", "Global Locations", "Patents Held"],
  },

  coreFeatures: {
    ariaLabel: "Core features section",
    title: "Why Choose Cognex",
    viewAllLabel: "View All",
    features: [
      {
        title: "Solving Complex Automation Challenges",
        body: "High-performance processing power and exceptional flexibility solve even the most complex automation challenges accurately and efficiently.",
      },
      {
        title: "Standardizing AI Inspection Processes",
        body: "The unified OneVision platform makes it easy to standardize AI inspection processes and scale them to any facility size.",
      },
      {
        title: "Ultra-Fast AI Vision Inspection",
        body: "AI-powered ultra-fast inspection technology keeps production lines running without interruption, minimizing defects and maximizing quality.",
      },
      {
        title: "Proven Global Solutions",
        body: "Cognex AI vision solutions are trusted by more than 500 companies worldwide, setting the standard for the industry.",
      },
    ],
  },

  products: {
    ariaLabel: "Product categories section",
    detailLabel: "View Details",
    items: [
      { title: "Vision Sensors &\nSystems", alt: "Cognex vision sensors and systems" },
      { title: "3D Vision\nSystems", alt: "Cognex 3D vision systems" },
      { title: "Barcode\nReaders", alt: "Cognex barcode readers" },
      { title: "Vision\nSoftware", alt: "Cognex vision software" },
      { title: "Logistics\nSolutions", alt: "Cognex logistics solutions" },
      { title: "Lenses, Lighting &\nAccessories", alt: "Cognex lenses, lighting and accessories" },
    ],
  },

  solutions: {
    ariaLabel: "Solutions section",
    eyebrow: "SOLUTIONS / Results",
    title: "Solutions in Action",
    viewAllLabel: "View All",
    detailLabel: "View Details",
    mainTabs: { application: "Applications", industry: "Industries" },
    appTabs: [
      "Assembly Inspection & Verification",
      "Automated Defect Detection",
      "Barcode Scanning & Tracking",
      "Automated Sorting & Classification",
      "Measurement & Dimensioning",
      "Guidance & Alignment",
      "Optical Character Recognition (OCR)",
    ],
    industryTabs: ["Semiconductor", "Food & Beverage", "Automotive", "Pharmaceutical", "Electronics", "Logistics"],
    appContent: [
      { title: "Assembly Inspection & Verification", body: "[Sample] Advanced machine vision technology precisely inspects and verifies every component of complex assembly processes, ensuring product quality and production reliability. Real content coming soon." },
      { title: "Automated Defect Detection", body: "[Sample] The combined power of advanced machine vision and AI detects every defect, ensuring consistent quality and reducing costly errors. Real content coming soon." },
      { title: "Barcode Scanning & Tracking", body: "[Sample] High-speed barcode reading technology secures product traceability across the supply chain while boosting logistics efficiency and data accuracy. Real content coming soon." },
      { title: "Automated Sorting & Classification", body: "[Sample] Precision vision systems automatically sort products by shape, color, and size, quickly rejecting defective items to maximize production efficiency. Real content coming soon." },
      { title: "Measurement & Dimensioning", body: "[Sample] Non-contact precision measurement technology detects dimensional deviations down to the micrometer in real time, automatically ensuring compliance with design specifications. Real content coming soon." },
      { title: "Guidance & Alignment", body: "[Sample] Vision-based guidance systems support real-time, accurate positioning of robotic arms and automation equipment, improving assembly precision. Real content coming soon." },
      { title: "Optical Character Recognition (OCR)", body: "[Sample] A deep-learning-based OCR engine accurately reads characters across various fonts, orientations, and surfaces, improving traceability and data quality. Real content coming soon." },
    ],
    industryContent: [
      { title: "Semiconductor", body: "[Sample] From wafer and package inspection to mark reading, we boost yield and minimize defects across the entire semiconductor manufacturing process." },
      { title: "Food & Beverage", body: "[Sample] Label inspection, foreign material detection, and fill-level verification automatically meet quality and safety standards on food and beverage lines." },
      { title: "Automotive", body: "[Sample] Defect detection and assembly verification for body, engine, and electrical components ensure automotive manufacturing quality." },
      { title: "Pharmaceutical", body: "[Sample] Label, barcode, and appearance inspection automate pharmaceutical regulatory compliance and product traceability." },
      { title: "Electronics", body: "[Sample] Precision inspection of PCBs, connectors, and small components maximizes electronics production quality." },
      { title: "Logistics", body: "[Sample] Barcode reading and automated sorting at logistics centers boost throughput speed and accuracy at the same time." },
    ],
  },

  resources: {
    ariaLabel: "Popular resources section",
    title: "Popular Resources",
    prevAria: "Previous slide",
    nextAria: "Next slide",
    detailLabel: "View Details",
    items: [
      { title: "Vision System Case Study for QC", body: "See how a production line fully automated quality control using Cognex vision systems." },
      { title: "In-Sight 2000 Barcode Reading Application", body: "A setup and operation guide for high-speed barcode reading solutions using the In-Sight 2000 series." },
      { title: "Vision Guidance for Autonomous Robots", body: "How to build a smart logistics center by integrating autonomous mobile robots (AMRs) with vision systems." },
      { title: "High-Performance Barcode Machine Vision Guide", body: "A technical brief on achieving optimal read rates across various barcode types and environments." },
      { title: "Quality Assurance Solutions for Consumer Goods", body: "A case study on real-time detection of appearance defects and label errors using AI vision on a consumer goods line." },
      { title: "AI-Powered Automated Defect Detection", body: "A practical guide to quickly deploying and applying deep-learning-based defect detection models on the factory floor." },
    ],
  },

  successStories: {
    ariaLabel: "Customer success stories section",
    eyebrow: "SUCCESS STORIES",
    title: "Customers Succeeding with Cognex",
    viewAllLabel: "View All",
    detailLabel: "View Details",
    slideAria: (i, title) => `Success story ${i + 1}: ${title}`,
    items: [
      {
        title: "How Panpass Technology digitally transformed product lifecycle management",
        heading: "Beyond quality, protecting brand reputation",
        body: "A 99.9% code-reading accuracy rate dramatically improves quality and efficiency while enhancing end-to-end traceability and transparency across the supply chain. This safeguards the brand and strengthens customer loyalty, protecting the company's reputation.",
      },
      {
        title: "How Schneider Electric standardized AI inspection with Cognex OneVision",
        heading: "Beyond inspection accuracy, faster integration",
        body: "Standardizing AI inspection on the OneVision platform cut false rejects 70x, improving operational efficiency and reducing unnecessary waste. Integration time for new inspection applications dropped by 30%, and expanded inspection coverage significantly boosted detection accuracy.",
      },
      {
        title: "Federal Package achieves a defect detection rate above 99%",
        heading: "Beyond full inspection, a perfect quality promise",
        body: "100% product inspection coverage pushed defect detection accuracy above 99%. This fully delivers on the brand's promise of outstanding quality to customers, driving satisfying results.",
      },
      {
        title: "How Wipro PARI is solving EV manufacturing challenges with AI",
        heading: "Beyond inspection speed, cost efficiency",
        body: "Inspection of EV battery modules was accelerated even while accounting for numerous component configurations. EtherInspect was used to create multiple virtual cameras for a cost-effective deployment, while vision-guided robots, vision software, and barcode scanners together improved throughput and traceability.",
      },
    ],
  },
};

export default en;
