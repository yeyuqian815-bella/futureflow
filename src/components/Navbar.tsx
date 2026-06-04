import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
        <Sparkles className="w-5 h-5" />
        <span style={{ fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif' }}>FutureFlow</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary/80">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#outline" className="hover:text-primary transition-colors">Curriculum</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
      </div>

      {/* CTA */}
      <div>
        <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
          Get started
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
