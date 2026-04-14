// components/HeroSection.jsx
import React from 'react';
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase, Eye } from "lucide-react";

const HeroSection = () => {
  const resumeUrl = "/Gerrad_Saruni.pdf";
  
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Gerrad_Saruni.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(#ff4d6d 1px, transparent 1px), linear-gradient(90deg, #ff4d6d 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff4d6d]/10 rounded-full blur-[120px]" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-mono text-white">Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Hi, I'm{" "}
              <span className="text-gradient">Gerrad Meitamei</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-md mb-4 leading-relaxed">
              A full-stack developer who builds clean, fast, and reliable web applications.
              I turn ideas into products people actually enjoy using.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#ff4d6d]" /> Nairobi, Kenya
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={14} className="text-[#ff4d6d]" /> Moringa School '25
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button 
                onClick={handleDownload}
                className="px-6 py-3 rounded-lg bg-[#ff4d6d] text-white font-medium hover:bg-[#ff1e3c] transition-colors cursor-pointer"
              >
                Download My Resume
              </button>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-colors">
                Get In Touch
              </a>
            </div>

            <div className="flex gap-8 mt-10 pt-8 border-t border-gray-700">
              {[
                { num: "6+", label: "Projects Built" },
                { num: "8+", label: "Technologies" },
                { num: "2025", label: "Graduate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#ff4d6d]">{stat.num}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] rounded-full border-2 border-[#ff4d6d]/30 p-2 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/gera.png" 
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span className="text-6xl text-gray-500 font-bold">👤</span>';
                    }}
                  />
                </div>
              </div>
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 3, repeat: Infinity }} 
                className="absolute -top-2 -right-2 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-700 text-xs font-mono shadow-sm text-white"
              >
                React & TypeScript
              </motion.div>
              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ duration: 3.5, repeat: Infinity }} 
                className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-700 text-xs font-mono shadow-sm text-white"
              >
                Python & Django
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={20} className="text-gray-400" />
        </motion.div>
      </section>
      <div className="h-16 bg-black"></div>
    </>
  );
};

export default HeroSection;