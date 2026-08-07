export interface LinkItem {
  label: string;
  href: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };

  header: {
    homeAria: string;
    searchPlaceholder: string;
    searchAria: string;
    myCognex: string;
    languageAria: string;
    navAria: string;
    mobileNavAria: string;
    menuOpenAria: string;
    menuCloseAria: string;
    gnbLabels: [string, string, string, string, string];
    mobileNavLabels: [string, string, string, string, string, string];
    mobileCta: {
      line1: string;
      line2: string;
      linkLabel: string;
    };
  };

  footer: {
    footerAria: string;
    companyName: string;
    phoneAria: string;
    instagramAria: string;
    youtubeAria: string;
    navAria: string;
    legalAria: string;
    navLabels: [string, string, string, string, string];
    legalLabels: [string, string, string, string];
    newsletterTitle: string;
    emailPlaceholder: string;
    countryAria: string;
    countryPlaceholder: string;
    countries: [string, string, string, string, string, string];
    salesButton: string;
  };

  hero: {
    ariaLabel: string;
    title: [string, string];
    body: string;
    cta: string;
    slideAria: (index: number, label: string) => string;
    slideGoToAria: (index: number) => string;
    slides: [
      { label: [string, string]; alt: string },
      { label: [string, string]; alt: string },
      { label: [string, string]; alt: string },
      { label: [string, string]; alt: string },
    ];
  };

  company: {
    ariaLabel: string;
    title: string;
    body: string;
    circles: [
      { label: string; sub: string },
      { label: string; sub: string },
      { label: string; sub: string },
    ];
    stats: [string, string, string, string];
  };

  coreFeatures: {
    ariaLabel: string;
    title: string;
    features: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ];
  };

  products: {
    ariaLabel: string;
    detailLabel: string;
    items: [
      { title: string; alt: string },
      { title: string; alt: string },
      { title: string; alt: string },
      { title: string; alt: string },
      { title: string; alt: string },
      { title: string; alt: string },
    ];
  };

  solutions: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    viewAllLabel: string;
    detailLabel: string;
    mainTabs: { application: string; industry: string };
    appTabs: [string, string, string, string, string, string, string];
    industryTabs: [string, string, string, string, string, string];
    appContent: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ];
    industryContent: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ];
  };

  resources: {
    ariaLabel: string;
    title: string;
    prevAria: string;
    nextAria: string;
    detailLabel: string;
    items: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ];
  };
}
