// components/TestimonialsSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "One of the most dedicated students I've mentored. Their code quality and attention to detail stood out from day one.",
    name: "Tech Mentor",
    role: "Moringa School Instructor",
    initials: "TM",
  },
  {
    quote: "We paired on multiple projects and they always brought creative solutions. Great communicator and a reliable teammate.",
    name: "Study Partner",
    role: "Fellow Developer",
    initials: "SP",
  },
  {
    quote: "They built our team's internal tool in two weeks flat. The interface was intuitive and it just worked — no hand-holding needed.",
    name: "Project Lead",
    role: "Capstone Team",
    initials: "PL",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-[#ff4d6d] mb-2 block">// kind words</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">
            What people say<span className="text-[#ff4d6d]">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#ff4d6d]/20 transition-colors flex flex-col"
            >
              <Quote size={24} className="text-[#ff4d6d]/40 mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 rounded-full bg-[#ff4d6d]/10 flex items-center justify-center text-sm font-bold text-[#ff4d6d]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;