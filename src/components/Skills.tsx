import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const skillCategories = [
  { name: 'Frontend', category: 'frontend' as const },
  { name: 'Backend', category: 'backend' as const },
  { name: 'Cloud', category: 'database' as const },
  { name: 'Tools', category: 'tool' as const },
];

const Skills = ({ skills }: SkillsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Skill['category']>(
    skillCategories[0].category
  );

  const filteredSkills = skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="section-padding bg-cream border-t border-warm">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">05 / Skills</p>
            <h2 className="font-serif font-semibold text-ntext text-3xl md:text-4xl leading-tight">
              技術スタック
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm text-muted leading-[1.95] max-w-xl">
              実務・個人開発で継続的に使用している技術。詳細はスキルシートに記載しています。
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-5 py-2 text-[11px] tracking-[0.2em] uppercase transition-colors border ${
                selectedCategory === cat.category
                  ? 'bg-ntext text-cream border-ntext'
                  : 'bg-cream text-muted border-warm hover:text-ntext hover:border-ntext/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-warm border border-warm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="bg-cream p-5 flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain mb-4"
                  />
                )}
                <p className="font-medium text-ntext text-sm leading-tight">{skill.name}</p>
                <p className="text-[11px] text-muted mt-2 leading-relaxed">{skill.level}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
