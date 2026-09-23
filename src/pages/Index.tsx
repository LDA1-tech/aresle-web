import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedModuleSection from "@/components/FeaturedModuleSection";
import FeaturedUF02Section from "@/components/FeaturedUF02Section";

import BenefitsSection from "@/components/BenefitsSection";

import WhyModularSection from "@/components/WhyModularSection";
import ValuesSection from "@/components/ValuesSection";
import ModelsSection from "@/components/ModelsSection";
import OfficesSection from "@/components/OfficesSection";
import SanitaryUnitsSection from "@/components/SanitaryUnitsSection";
import ConstructionSystemSection from "@/components/ConstructionSystemSection";
import PanelTypesSection from "@/components/PanelTypesSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedModuleSection />
        <FeaturedUF02Section />
        <ModelsSection />

        <BenefitsSection />
        <WhyModularSection />
        <OfficesSection />
        <SanitaryUnitsSection />
        <ConstructionSystemSection />
        <PanelTypesSection />
        <ValuesSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
