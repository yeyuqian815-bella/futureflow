import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/40 bg-white/30 backdrop-blur-md py-12 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
          <Sparkles className="w-5 h-5" />
          <span>FutureFlow</span>
        </div>
        <p className="text-primary/60 text-sm">
          &copy; {new Date().getFullYear()} FutureFlow Academy. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-primary/60">
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
