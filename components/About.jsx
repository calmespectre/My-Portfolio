// components/AboutSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { GraduationCap, Heart, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Heart, title: "User First", desc: "I design with real people in mind, not just specs." },
    { icon: Zap, title: "Ship Fast", desc: "Rapid prototyping to production-ready code." },
    { icon: Users, title: "Team Player", desc: "Clear communication, code reviews, pair programming." },
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-[#ff4d6d] mb-2 block">// about me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">
            Getting to know me<span className="text-[#ff4d6d]">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a recent graduate from <span className="text-white font-medium">Moringa School (Class of 2025)</span>,
              where I spent months building real-world projects and learning how to write clean, maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in both <span className="text-white font-medium">frontend and backend development</span> —
              from crafting pixel-perfect interfaces with React and TypeScript, to building robust APIs with
              Python, Django, and Node.js. I'm comfortable with SQL databases and setting up CI/CD pipelines.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What excites me most? Taking a rough idea and turning it into something that actually works —
              something that loads fast, looks good, and makes people's lives a tiny bit easier.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <GraduationCap size={18} className="text-[#ff4d6d]" />
              <span className="text-sm text-gray-400">
                Moringa School · Full-Stack Web Development · 2025
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#ff4d6d]/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#ff4d6d]/10 text-[#ff4d6d] group-hover:bg-[#ff4d6d]/20 transition-colors">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">{v.title}</h3>
                    <p className="text-sm text-gray-400">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;