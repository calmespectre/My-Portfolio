// pages/Index.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/Projects';
import TestimonialsSection from '../components/Testimonials';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;