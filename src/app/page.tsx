import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import WhyUs from "@/components/sections/WhyUs";
import MaterialComparison from "@/components/sections/MaterialComparison";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <BeforeAfterSection />
      <WhyUs />
      <MaterialComparison />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
