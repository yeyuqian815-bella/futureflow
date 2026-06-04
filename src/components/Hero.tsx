import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Zap, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';

// 动画数字组件
const AnimatedNumber = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{prefix}{displayValue}{suffix}</span>;
};

const Hero = () => {
  return (
    <AuroraBackground className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 h-auto min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 border border-white/60 text-primary text-xs font-medium mb-8 backdrop-blur-sm shadow-sm"
          style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          AI Productivity Masterclass is live
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-black text-primary tracking-tight leading-[1.1] mb-6 max-w-4xl"
          style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
        >
          Work Faster.<br className="hidden md:block" /> Achieve More.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-primary/70 mb-10 max-w-2xl font-medium leading-relaxed"
          style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
          Turn AI into your daily unfair advantage. <br className="hidden sm:block" />
          Master the tools that shape tomorrow's workflows.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto bg-white/50 backdrop-blur-sm text-primary border border-white/60 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/80 transition-all shadow-sm hover:shadow-md">
            View Demo <PlayCircle className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Bento Grid Dynamic Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10"
        >
          {/* Card 1: Efficiency Boost */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col items-start text-left justify-between h-48 md:col-span-1 transform transition-transform hover:-translate-y-1 duration-300">
            <div className="w-10 h-10 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-primary/60 text-sm font-medium mb-1">Efficiency Boost</p>
              <h3 className="text-4xl font-extrabold text-primary flex items-baseline gap-1">
                +<AnimatedNumber value={300} suffix="%" />
              </h3>
            </div>
          </div>

          {/* Card 2: Main Workflow / AI Generation */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col h-48 md:col-span-2 relative overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100/50 flex items-center justify-center text-purple-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-primary/80 font-medium">Content Generation Pipeline</p>
            </div>
            
            <div className="space-y-3">
              <div className="h-2 w-full bg-primary/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="h-full bg-purple-500/50 rounded-full"
                />
              </div>
              <div className="h-2 w-3/4 bg-primary/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="h-full bg-blue-500/50 rounded-full"
                />
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-primary/40 font-mono">Generating report...</span>
                <span className="text-xs font-bold text-purple-600">Active</span>
              </div>
            </div>
          </div>

          {/* Card 3: Time Saved */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col items-start text-left justify-between h-48 md:col-span-2 transform transition-transform hover:-translate-y-1 duration-300 bg-gradient-to-br from-white/70 to-blue-50/30">
            <div className="flex justify-between w-full items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100/50 flex items-center justify-center text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
              <div className="px-3 py-1 bg-green-100/50 text-green-700 text-xs font-bold rounded-full">
                Verified Result
              </div>
            </div>
            <div>
              <p className="text-primary/60 text-sm font-medium mb-1">Hours Saved Weekly</p>
              <h3 className="text-4xl font-extrabold text-primary flex items-baseline gap-1">
                <AnimatedNumber value={15} suffix="+" /> <span className="text-lg font-semibold text-primary/50">hrs</span>
              </h3>
            </div>
          </div>

          {/* Card 4: ROI */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col items-start text-left justify-between h-48 md:col-span-1 transform transition-transform hover:-translate-y-1 duration-300">
            <div className="w-10 h-10 rounded-full bg-green-100/50 flex items-center justify-center text-green-600 mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-primary/60 text-sm font-medium mb-1">Task Automation</p>
              <h3 className="text-4xl font-extrabold text-primary flex items-baseline gap-1">
                <AnimatedNumber value={85} suffix="%" />
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
