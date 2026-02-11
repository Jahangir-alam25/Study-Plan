
import AIFeatures from "@/components/layouts/AIFeatures";
import { BenefitsSection } from "@/components/layouts/BenefitsSection";
import { CTASection } from "@/components/layouts/CTASection";
import { DashboardPreview } from "@/components/layouts/DashboardPreview";
import { Footer } from "@/components/layouts/Footer";
import HeroSection from "@/components/layouts/HeroSection";
import { HowItWorks } from "@/components/layouts/HowItWorks";
import Navbar from "@/components/layouts/Navbar";
import { PricingSection } from "@/components/layouts/PricingSection";
import ProblemSection from "@/components/layouts/ProblemSection";
import { SecuritySection } from "@/components/layouts/SecuritySection";
import SolutionSection from "@/components/layouts/SolutionSection";


export default function Home() {
  return (
  <div>
      {/* Navbar */}
      <Navbar />
 {/* Hero */}
      <HeroSection />

      {/* Problem / Pain Points */}
      <ProblemSection />

      {/* Solution */}
      <SolutionSection />

      {/* AI Features */}
      <AIFeatures />

      {/* How It Works */}
      <HowItWorks />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Benefits */}
      <BenefitsSection />

      {/* Security & Privacy */}
      <SecuritySection />

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      {/* <FAQSection /> */}

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
  </div>
  );
}
