import React from 'react';
import { PricingBlock, PricingPlan } from '@/components/blocks/pricing';

const plans: PricingPlan[] = [
  {
    name: "Basic Plan",
    price: "299",
    yearlyPrice: "239",
    period: "mo",
    features: [
      "All course video content",
      "Lifetime access to materials",
      "Course completion certificate",
      "Basic templates"
    ],
    description: "Perfect for individuals starting their AI journey.",
    buttonText: "Start Learning",
    href: "#",
    isPopular: false,
  },
  {
    name: "Premium Plan",
    price: "499",
    yearlyPrice: "399",
    period: "mo",
    features: [
      "All course video content",
      "Exclusive community access",
      "Monthly live Q&A sessions",
      "Advanced prompt library",
      "Priority email support"
    ],
    description: "For professionals who want to master AI with support.",
    buttonText: "Get Premium Access",
    href: "#",
    isPopular: true,
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "contact us",
    features: [
      "Tailored training for teams",
      "Exclusive coaching sessions",
      "API integration support",
      "Custom workflow design",
      "Dedicated account manager"
    ],
    description: "Tailored solutions for teams and organizations.",
    buttonText: "Contact Sales",
    href: "#",
    isPopular: false,
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10">
      <PricingBlock 
        plans={plans} 
        title="Simple, Transparent Pricing"
        description="Invest in your future productivity today. All plans include lifetime updates and community access."
      />
    </section>
  );
};

export default Pricing;
