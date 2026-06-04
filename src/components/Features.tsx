import React from 'react';
import { Target, Wrench, Zap, RefreshCw, Users } from 'lucide-react';
import { StaggerFeatures } from '@/components/ui/stagger-features';

const featuresData = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Action-Oriented",
    description: "Content is closely integrated with real-world scenarios, providing numerous practical cases and templates."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Comprehensive Tools",
    description: "Covers the most popular and practical AI tools (ChatGPT, Midjourney, Notion AI) to ensure you can apply what you learn."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Efficiency Boost",
    description: "Promises students at least a 30% increase in daily work efficiency after completing the course."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Continuous Updates",
    description: "As AI technology evolves rapidly, course content is updated regularly to remain cutting-edge."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Support",
    description: "Access to an exclusive student community for collaborative learning and problem-solving."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Why Choose FutureFlow?</h2>
          <p className="text-primary/70 max-w-2xl mx-auto text-lg">We don't just teach theory. We build systems that transform how you work.</p>
        </div>

        <div className="w-full">
          <StaggerFeatures features={featuresData} />
        </div>
      </div>
    </section>
  );
};

export default Features;
