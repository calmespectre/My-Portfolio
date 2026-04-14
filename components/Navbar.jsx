// components/Navbar.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 backdrop-blur-xl bg-black/80"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("#home")} className="text-2xl font-bold tracking-tight text-white">
          Gerrad<span className="text-[#ff4d6d]"> M</span>eitamei
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("#contact")}
              className="text-sm px-4 py-2 rounded-lg bg-[#ff4d6d] text-white hover:bg-[#ff1e3c] transition-colors"
            >
              Hire Me
            </button>
          </li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-gray-300 hover:text-white transition-colors w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full text-center px-4 py-2 rounded-lg bg-[#ff4d6d] text-white"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;