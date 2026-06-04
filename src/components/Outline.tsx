import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Image as ImageIcon, Search, Settings, Briefcase, ShieldAlert } from 'lucide-react';

const outlineItems = [
  { icon: <BookOpen />, title: "AI Fundamentals & Mindset", desc: "Understanding core AI concepts, trends, and future impacts." },
  { icon: <PenTool />, title: "AI Writing & Content Creation", desc: "Leveraging AI to quickly generate copy, emails, reports, and social media content." },
  { icon: <ImageIcon />, title: "AI Image & Design", desc: "Mastering AI image generation tools to create professional-grade visual content." },
  { icon: <Search />, title: "AI Learning & Research", desc: "Using AI for information retrieval, paper reading, and knowledge management." },
  { icon: <Settings />, title: "AI Automated Workflows", desc: "Building personalized AI workflows to automate repetitive tasks." },
  { icon: <Briefcase />, title: "AI Business Applications & Innovation", desc: "Exploring AI applications in marketing, customer service, and product development." },
  { icon: <ShieldAlert />, title: "AI Ethics & Future Outlook", desc: "Using AI responsibly and gaining insights into future developments." }
];

const Outline = () => {
  return (
    <section id="outline" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Course Curriculum</h2>
          <p className="text-primary/70 max-w-2xl mx-auto text-lg">A systematic approach to mastering AI from zero to hero.</p>
        </div>

        <div className="space-y-4">
          {outlineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-6 group hover:bg-white/90 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-3">
                  <span className="text-primary/30 text-sm font-mono">{String(index + 1).padStart(2, '0')}</span>
                  {item.title}
                </h3>
                <p className="text-primary/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outline;
