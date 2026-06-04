"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

export interface FeatureData {
  tempId: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  position: number;
  feature: FeatureData;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  position,
  feature,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out flex flex-col justify-center",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary shadow-2xl"
          : "z-0 bg-white/70 backdrop-blur-md text-foreground border-white/40 hover:border-primary/50 shadow-xl"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-white/40 backdrop-blur-md"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
        isCenter ? "bg-white/20 text-white" : "bg-primary/5 text-primary"
      )}>
        {feature.icon}
      </div>

      <h3 className={cn(
        "text-xl sm:text-2xl font-bold mb-4",
        isCenter ? "text-white" : "text-primary"
      )}>
        {feature.title}
      </h3>
      
      <p className={cn(
        "text-sm sm:text-base leading-relaxed",
        isCenter ? "text-white/80" : "text-primary/70"
      )}>
        {feature.description}
      </p>
    </div>
  );
};

interface StaggerFeaturesProps {
  features: Omit<FeatureData, 'tempId'>[];
}

export const StaggerFeatures: React.FC<StaggerFeaturesProps> = ({ features }) => {
  const [cardSize, setCardSize] = useState(365);
  
  // Initialize with tempIds
  const [featuresList, setFeaturesList] = useState<FeatureData[]>(
    features.map((f, i) => ({ ...f, tempId: i }))
  );

  const handleMove = (steps: number) => {
    const newList = [...featuresList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setFeaturesList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl"
      style={{ height: 600 }}
    >
      {featuresList.map((feature, index) => {
        const position = featuresList.length % 2
          ? index - (featuresList.length - 1) / 2
          : index - featuresList.length / 2;
        return (
          <FeatureCard
            key={feature.tempId}
            feature={feature}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-full",
            "bg-white/80 backdrop-blur-md border border-white/60 shadow-lg text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous feature"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-full",
            "bg-white/80 backdrop-blur-md border border-white/60 shadow-lg text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next feature"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
