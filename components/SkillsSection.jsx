// components/SkillsSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    desc: "Building what people see and interact with",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    desc: "The engine behind the scenes",
    skills: [
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "Node.js", level: 78 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Database & DevOps",
    desc: "Storing data and shipping code",
    skills: [
      { name: "SQL / PostgreSQL", level: 82 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD", level: 75 },
      { name: "Docker", level: 65 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-2 block">// what I work with</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My toolkit<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-12">
            Here's a plain-English breakdown of my technical skills.
            No jargon walls — just what I can do for your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIdx * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all"
            >
              <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-6">{cat.desc}</p>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 + catIdx * 0.15 + i * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-pink-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;