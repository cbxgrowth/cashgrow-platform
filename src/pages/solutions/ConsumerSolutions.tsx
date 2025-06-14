
import React from 'react';
import {
  HeroSection,
  HowItWorksSection,
  MainFeaturesSection,
  TestimonialsSection,
  AdditionalFeaturesSection,
  PricingPreviewSection,
  CTASection
} from './consumer/components';

const ConsumerSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <HeroSection />
      <HowItWorksSection />
      <MainFeaturesSection />
      <TestimonialsSection />
      <AdditionalFeaturesSection />
      <PricingPreviewSection />
      <CTASection />
    </div>
  );
};

export default ConsumerSolutions;
