import HeroSection from "@/components/sections/HeroSection";
import CompanySection from "@/components/sections/CompanySection";
import CoreFeaturesSection from "@/components/sections/CoreFeaturesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ResourcesSection from "@/components/sections/ResourcesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <CoreFeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      {/* Section 6: Success Stories — 추후 구현 */}
      <ResourcesSection />
    </>
  );
}
