import { DashboardSection } from '@/components/DashboardSection';
import {
  Hero,
  CheckoutFeatures,
  RetentionSection,
  FunnelSection,
  GrowthStructure,
  AffiliatesSection,
  IntegrationsSection,
  MigrationSection,
  SupportSection,
  AwardsSection,
  FounderSection,
  FAQ,
  FinalCtaSection,
  Footer,
} from '@/components/wiven';

const Index = () => {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-blue-600/30 overflow-x-hidden">
      <Hero />
      <DashboardSection />
      <CheckoutFeatures />
      <RetentionSection />
      <FunnelSection />
      <GrowthStructure />
      <AffiliatesSection />
      <IntegrationsSection />
      <SupportSection />
      <AwardsSection />
      <MigrationSection />
      <FounderSection />
      <FAQ />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
