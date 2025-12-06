import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { MethodSection } from "@/components/home/MethodSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { RecoveryUsageSection } from "@/components/home/RecoveryUsageSection";
import { LegalNetworkSection } from "@/components/home/LegalNetworkSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <MethodSection />
      <TimelineSection />
      <RecoveryUsageSection />
      <LegalNetworkSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
