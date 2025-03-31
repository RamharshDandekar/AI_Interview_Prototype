"use client"; // Add "use client" directive at the top

import React, { useRef } from 'react'; // Import useRef
import HeroSection from './_components/HeroSection';
import KeyBenefitsSection from './_components/KeyBenefitsSection';
import AIInterviewActionSection from './_components/AIInterviewActionSection';
import MasterProcessSection from './_components/MasterProcessSection';
import AIInterviewAgentFeaturesSection from './_components/AIInterviewAgentFeaturesSection';
import PricingSection from './_components/PricingSection';
import FAQSection from './_components/FAQSection';
import FooterSection from './_components/FooterSection';
import Navbar from './_components/Navbar';

export default function HomePage() {
  const pricingSectionRef = useRef(null); // Create refs
  const faqSectionRef = useRef(null);

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <KeyBenefitsSection />
      <AIInterviewActionSection />
      <MasterProcessSection />
      <AIInterviewAgentFeaturesSection />
      <PricingSection sectionRef={pricingSectionRef} /> {/* Pass ref to PricingSection */}
      <FAQSection sectionRef={faqSectionRef} /> {/* Pass ref to FAQSection */}
      <FooterSection />
    </div>
  );
}