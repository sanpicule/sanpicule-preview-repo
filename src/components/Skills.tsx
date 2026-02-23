import { useRef, useEffect, useState } from 'react';
import { Skill } from '../types';
import { Code, Database, Server, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillsProps {
  skills: Skill[];
}

const skillCategories = [
  { name: 'Frontend', category: 'frontend', icon: <Code className="w-4 h-4" /> },
  { name: 'Backend & DB', category: 'backend', icon: <Server className="w-4 h-4" /> },
  { name: 'Cloud', category: 'database', icon: <Database className="w-4 h-4" /> },
  { name: 'Tools', category: 'tool', icon: <Settings className="w-4 h-4" /> },
];

const getLevelWidth = (level: string) => {
  const years = parseInt(level.match(/\d+/)?.[0] || '1');
  if (years >= 4) return '100%';
  if (years === 3) return '80%';
  if (years === 2) return '60%';
  return '40%';
};

const Skills = ({ skills }: SkillsProps) => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].category);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.skills-heading', {
        y: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const filteredSkills = skills.filter(s =>
    s.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
  );

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-parchment overflow-hidden">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-[11px] tracking-[0.25em] text-muted uppercase mb-3">Technical Skills</p>
            <h2 className="skills-heading font-serif font-black text-5xl md:text-6xl text-dark leading-none">Skills</h2>
          </div>
          <p className="text-xs text-muted max-w-xs leading-relaxed">
            主要な技術スタックをご覧ください。詳しくはスキルシートをご参照ください。
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`flex items-center gap-2 py-2 px-5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border
                ${selectedCategory === cat.category
                  ? 'bg-dark text-light border-dark'
                  : 'bg-cream text-dark border-warm hover:border-dark'
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.icon}
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="bg-cream border border-warm rounded-2xl p-5 group hover:border-dark/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={skill.icon} className="w-8 h-8 object-contain" alt={skill.name} />
                  <h4 className="font-semibold text-dark text-sm">{skill.name}</h4>
                </div>
                <p className="text-[11px] text-muted mb-3 leading-relaxed">{skill.level}</p>
                <div className="w-full bg-warm rounded-full h-1 overflow-hidden">
                  <motion.div
                    className="bg-dark h-1 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: getLevelWidth(skill.level) }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
