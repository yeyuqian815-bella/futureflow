"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function PricingBlock({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you \n All plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20 mx-auto px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
        </label>
        <span className="ml-3 font-semibold text-foreground">
          Annual billing <span className="text-blue-500">(Save 20%)</span>
        </span>
      </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto relative perspective-[2000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {plans.map((plan, index) => {
            const priceValue = isMonthly ? plan.price : plan.yearlyPrice;
            const isCustomPrice = priceValue.toLowerCase() === "custom" || isNaN(Number(priceValue));

            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 1 }}
                animate={
                  isDesktop
                    ? {
                        y: plan.isPopular ? -20 : 0,
                        opacity: 1,
                        x: isHovered ? (index === 0 ? 30 : index === 2 ? -30 : 0) : 0,
                        scale: isHovered ? (index === 0 || index === 2 ? 0.94 : 1.0) : 1.0,
                        rotateY: isHovered ? (index === 0 ? 10 : index === 2 ? -10 : 0) : 0,
                        z: isHovered && (index === 0 || index === 2) ? -50 : 0,
                        zIndex: isHovered && (index === 0 || index === 2) ? 0 : 10,
                      }
                    : {}
                }
                style={{
                  transformOrigin: index === 0 ? "right center" : index === 2 ? "left center" : "center",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 1,
                }}
                className={cn(
                  `rounded-3xl border-[1px] p-8 bg-white/70 backdrop-blur-md shadow-xl text-center lg:flex lg:flex-col lg:justify-center relative`,
                  plan.isPopular ? "border-primary border-2 bg-primary/5" : "border-border",
                  "flex flex-col transition-colors duration-300",
                  !plan.isPopular && "mt-5"
                )}
              >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary py-1 px-3 rounded-bl-2xl rounded-tr-3xl flex items-center">
                  <Star className="text-primary-foreground h-4 w-4 fill-current" />
                  <span className="text-primary-foreground ml-1 font-sans font-semibold text-sm">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex-1 flex flex-col">
                <p className="text-lg font-bold text-primary">
                  {plan.name}
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-2">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    {isCustomPrice ? (
                      "Custom"
                    ) : (
                      <NumberFlow
                        value={Number(priceValue)}
                        format={{
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        formatter={(value) => `$${value}`}
                        transformTiming={{
                          duration: 500,
                          easing: "ease-out",
                        }}
                        willChange
                        className="font-variant-numeric: tabular-nums"
                      />
                    )}
                  </span>
                  {plan.period !== "Next 3 months" && !isCustomPrice && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                      / {plan.period}
                    </span>
                  )}
                </div>

                <p className="text-xs leading-5 text-muted-foreground h-5 mt-1">
                  {!isCustomPrice ? (isMonthly ? "billed monthly" : "billed annually") : "contact us for details"}
                </p>

                <ul className="mt-8 gap-3 flex flex-col">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-left text-primary/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="w-full my-6 border-gray-200" />

                <a
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tight py-6 rounded-xl",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-primary-foreground",
                    plan.isPopular
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-primary border-primary/20 hover:bg-primary/5"
                  )}
                >
                  {plan.buttonText}
                </a>
                <p className="mt-6 text-sm leading-5 text-muted-foreground">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}