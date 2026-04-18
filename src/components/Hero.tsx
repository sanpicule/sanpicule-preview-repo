import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { profileData } from '@/lib/data';

const stats = [
  { value: '4y+', label: 'Frontend' },
  { value: '2y+', label: 'Backend' },
  { value: 'AI', label: 'Integration' },
];

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="home"
      className="relative bg-cream pt-32 pb-20 px-6 md:px-12 md:pt-40 md:pb-28 overflow-x-hidden"
    >
      <div className="container-max">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="eyebrow mb-8 flex items-center gap-3">
            <span className="rule" />
            Portfolio / 2025
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif font-semibold text-ntext tracking-tight leading-[1.25] text-xl md:text-3xl lg:text-4xl"
          >
            <span className="block text-muted font-normal">{profileData.tagline.line1}</span>
            <span className="block text-muted font-normal">{profileData.tagline.line2}</span>
            <span className="block mt-2">{profileData.tagline.line3}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-10 max-w-2xl text-[15px] text-muted leading-[1.9]"
          >
            {profileData.heroLead}
          </motion.p>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-ntext text-cream px-6 py-3 text-xs tracking-[0.15em] uppercase hover:bg-ntext/85 transition-colors"
            >
              View Work
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ntext/80 text-ntext px-6 py-3 text-xs tracking-[0.15em] uppercase hover:bg-ntext hover:text-cream transition-colors"
            >
              Contact
            </a>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted px-2 py-3 text-xs tracking-[0.15em] uppercase hover:text-ntext transition-colors"
              aria-label="GitHub"
            >
              <Github size={14} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-5 border-t border-warm pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="font-serif text-2xl md:text-3xl text-ntext leading-none">
                  {stat.value}
                </p>
                <p className="text-[10px] tracking-[0.15em] text-muted uppercase mt-2 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
