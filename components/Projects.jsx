import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { FiShoppingCart, FiCheckSquare, FiGlobe, FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  // {
  //   icon: FiShoppingCart,
  //   title: "E-Commerce Platform",
  //   desc: "A full online store where users can browse products, add items to their cart, and complete purchases. Built with real payment flow and inventory tracking.",
  //   role: "Full-Stack Developer",
  //   impact: "Handles 100+ products with search and filtering",
  //   tech: ["React", "TypeScript", "Django", "PostgreSQL"],
  //   color: "from-pink-500/20 to-purple-500/20",
  //   githubUrl: "https://github.com/yourusername/ecommerce-platform",
  //   liveUrl: "https://ecommerce-demo.com",
  // },
  {
    icon: FiCheckSquare,
    title: "Hope Evangelistic Ministry",
    desc: "A complete website for an evangelistic team featuring event management, sermon uploads, donation tracking, and a custom admin dashboard for content management.",
    role: "Solo Developer",
    impact: "Full-featured admin app for team management",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    color: "from-blue-500/20 to-cyan-500/20",
    githubUrl: "https://github.com/calmespectre/Hope-Ministry.git",
    liveUrl: "https://hope-vangelistic-ministry-adventure.vercel.app/",
  },
  {
    icon: FiGlobe,
    title: "Portfolio Website",
    desc: "This very site! Designed to prove that technical skills and good design can coexist. Fully responsive, animated, and performance-optimized.",
    role: "Designer & Developer",
    impact: "Sub-1s load time, 95+ Lighthouse score",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    color: "from-primary/20 to-orange-500/20",
    githubUrl: "https://github.com/calmespectre/My-Portfolio.git",
    liveUrl: "https://gerradmeitamei.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleOpenLink = (url, e) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-2 block">// selected work</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Projects I've built<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-12">
            Real projects with real outcomes — not just tutorials.
            Each one taught me something new about building for people.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className={`md:col-span-2 p-8 flex items-center justify-center bg-gradient-to-br ${project.color} min-h-[200px]`}>
                  <project.icon size={64} className="text-foreground/30 group-hover:text-foreground/50 transition-colors" />
                </div>

                <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex gap-2">
                        <button 
                          onClick={(e) => handleOpenLink(project.liveUrl, e)}
                          className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View live demo of ${project.title}`}
                          title="View live demo"
                        >
                          <FiExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">My Role</span>
                        <p className="text-sm font-medium mt-0.5">{project.role}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Impact</span>
                        <p className="text-sm font-medium mt-0.5">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;