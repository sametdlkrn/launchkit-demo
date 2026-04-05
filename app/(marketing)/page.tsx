import { FaqList } from "@/components/marketing/faq-list";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { FinalCta } from "@/components/marketing/final-cta";
import { HeroSection } from "@/components/marketing/hero-section";
import { IncludedSection } from "@/components/marketing/included-section";
import { LogoStrip } from "@/components/marketing/logo-strip";
import { PricingTeaser } from "@/components/marketing/pricing-teaser";
import { marketingFaqs } from "@/lib/content";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <FeatureGrid />
      <IncludedSection />
      <PricingTeaser />
      <FaqList
        eyebrow="FAQ"
        title="Questions founders ask before buying a starter."
        description="The goal is simple: ship faster without inheriting a messy codebase."
        items={marketingFaqs}
      />
      <FinalCta />
    </>
  );
}
