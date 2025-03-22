import ProjectShowcase from "@/components/landing/project-showcase";
import CallToActionSection from "@/components/landing/cta-section";
import { ContactForm } from "@/components/landing/contact-form";
import FAQSection from "@/components/landing/faq-section";
import HeroSection from "@/components/landing/hero-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import PricingSection from "@/components/landing/pricing-section";
import SaaSSection from "@/components/landing/saas-section";
import SmartSitesSection from "@/components/landing/smart-sites-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ProjectShowcase />
      <SmartSitesSection />
      <SphereMask />
      <SaaSSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <div id="contact" className="scroll-mt-20">
        <ContactForm />
      </div>
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
