import { motion } from 'framer-motion';
import { profileData } from '@/lib/data';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="home"
      className="relative bg-cream min-h-screen flex items-end px-6 md:px-12 pb-[30vh] md:pb-[28vh] overflow-hidden"
    >
      <svg
        className="absolute bottom-0 left-0 pointer-events-none text-warm"
        width="320"
        height="120"
        viewBox="0 0 320 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line x1="0" y1="120" x2="320" y2="60" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="absolute right-6 md:right-10 bottom-[20vh] flex flex-col items-center gap-3 pointer-events-none">
        <span
          className="text-[10px] tracking-[0.4em] text-muted uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <span className="w-px h-16 bg-muted/40" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="text-[11px] tracking-[0.3em] text-muted uppercase mb-8"
          >
            Portfolio / 2025
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif font-normal text-ntext leading-[1.45] text-3xl md:text-5xl lg:text-6xl"
          >
            <span className="block">{profileData.tagline.line1}</span>
            <span className="block">{profileData.tagline.line2}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-10 md:mt-12">
            <a
              href="#experience"
              aria-label="Scroll to work"
              className="inline-block text-ntext/70 hover:text-ntext transition-colors"
            >
              <svg width="180" height="12" viewBox="0 0 180 12" fill="none">
                <line x1="0" y1="6" x2="172" y2="6" stroke="currentColor" strokeWidth="1" />
                <path d="M163 1 L178 6 L163 11" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
