import { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import WhyActNow from '../components/WhyActNow';
import ServicesGrid from '../components/ServicesGrid';
import PricingSection from '../components/PricingSection';
import HowItWorksSteps from '../components/HowItWorksSteps';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function Home() {
  useEffect(() => {
    document.title = 'Trademark Renewal & Refiling Services | Trademark Vision Studio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Professional USPTO trademark registration, renewal, and abandoned filing support. Speak with our team today.'
    );
  }, []);

  return (
    <main>
      <Hero />
      <TrustBadges />
      <WhyActNow />
      <ServicesGrid />
      <PricingSection />
      <HowItWorksSteps />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </main>
  );
}
