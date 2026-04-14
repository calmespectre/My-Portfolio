// components/ContactSection.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Eye } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: null });

  const WEB3FORMS_ACCESS_KEY = "d9a1aa2b-50ce-4398-a034-43d27ef68235";
  const resumeUrl = `${window.location.origin}/Gerrad_Saruni.pdf`;

  const handleViewResume = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Gerrad_Saruni.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(resumeUrl, '_blank');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields."
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address."
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Message from ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ 
          type: "success", 
          message: "✓ Message sent successfully! I'll get back to you soon." 
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({ 
        type: "error", 
        message: "Failed to send. Please email me directly at gerrad.meitameisaruni@gmail.com"
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ type: null, message: null });
      }, 6000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative bg-black">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#ff4d6d]/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-[#ff4d6d] mb-2 block">// let's talk</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Get in touch<span className="text-[#ff4d6d]">.</span>
          </h2>
          <p className="text-gray-400 max-w-lg mb-12">
            Whether you have a role, a freelance project, or just want to say hi —
            my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {submitStatus.message && (
              <div className={`p-4 rounded-lg flex items-center gap-3 ${
                submitStatus.type === "success" 
                  ? "bg-green-500/20 border border-green-500/50 text-green-400" 
                  : "bg-red-500/20 border border-red-500/50 text-red-400"
              }`}>
                {submitStatus.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span className="text-sm">{submitStatus.message}</span>
              </div>
            )}
            
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff4d6d]/50 transition-colors"
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff4d6d]/50 transition-colors"
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff4d6d]/50 transition-colors resize-none"
                placeholder="Tell me about the opportunity…"
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-[#ff4d6d] text-white font-medium hover:bg-[#ff1e3c] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 space-y-5">
              <h3 className="font-semibold text-lg text-white">Contact Details</h3>
              {[
                { icon: Mail, label: "gerrad.meitameisaruni@gmail.com", href: "mailto:gerrad.meitameisaruni@gmail.com" },
                { icon: Phone, label: "Call me", href: "tel:+254702294914" },
                { icon: FaWhatsapp, label: "Chat on WhatsApp", href: "https://wa.me/254702294914" },
                { icon: MapPin, label: "Nairobi, Kenya", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.icon === MapPin ? "_self" : "_blank"}
                  rel={item.icon !== MapPin ? "noopener noreferrer" : ""}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#ff4d6d]/10 text-[#ff4d6d] group-hover:bg-[#ff4d6d]/20 transition-colors">
                    <item.icon size={16} />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="font-semibold text-lg mb-4 text-white">Resume</h3>
              <div className="flex gap-3">
                <button
                  onClick={handleViewResume}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm transition-colors text-gray-300 hover:text-white cursor-pointer"
                >
                  <Eye size={16} />
                  View My Resume
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#ff4d6d] hover:bg-[#ff1e3c] text-sm transition-colors text-white cursor-pointer"
                >
                  <Send size={16} />
                  Download
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="font-semibold text-lg mb-4 text-white">Find me online</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/calmespectre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm transition-colors text-gray-300 hover:text-white"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/gerrad-meitamei-910aa83b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm transition-colors text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#ff4d6d]/20 to-[#ff4d6d]/5 border border-[#ff4d6d]/20">
              <h3 className="font-semibold mb-2 text-white">Why hire a recent grad?</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Fresh skills. Current best practices. Hungry to prove myself.
                I bring energy, up-to-date knowledge, and zero bad habits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;