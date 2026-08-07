import HeroSection from "@/components/sections/HeroSection";
import CompanySection from "@/components/sections/CompanySection";
import CoreFeaturesSection from "@/components/sections/CoreFeaturesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import { resolveLocale } from "@/i18n/resolve-locale";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = resolveLocale(rawLang);
  const dict = await getDictionary(lang);

  // Dictionary.hero의 slideAria/slideGoToAria는 함수이므로 Client Component로
  // 그대로 넘길 수 없다. 여기서 미리 문자열로 계산해 전달한다.
  const heroSlides = dict.hero.slides.map((slide, i) => ({
    label: slide.label,
    alt: slide.alt,
    ariaLabel: dict.hero.slideAria(i, slide.label.join(" ")),
    goToAriaLabel: dict.hero.slideGoToAria(i),
  }));

  return (
    <>
      <HeroSection
        lang={lang}
        ariaLabel={dict.hero.ariaLabel}
        title={dict.hero.title}
        body={dict.hero.body}
        cta={dict.hero.cta}
        slides={heroSlides}
      />
      <CompanySection dict={dict.company} />
      <CoreFeaturesSection dict={dict.coreFeatures} />
      <ProductsSection lang={lang} dict={dict.products} />
      <SolutionsSection lang={lang} dict={dict.solutions} />
      {/* Section 6: Success Stories — 추후 구현 */}
      <ResourcesSection lang={lang} dict={dict.resources} />
    </>
  );
}
