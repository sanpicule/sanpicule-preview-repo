import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Github, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 4, suffix: '+', label: 'FRONTEND EXP' },
  { value: 2, suffix: '+', label: 'BACKEND EXP' },
  { value: 3, suffix: '', label: 'PRODUCTS BUILT' },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = document.querySelector(`[data-stat="${i}"]`);
        if (!el) return;
        gsap.fromTo(el,
          { textContent: 0 },
          {
            textContent: stat.value,
            duration: 1.8,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      gsap.to('.hero-portrait', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-cream pt-24 pb-12 px-6 md:px-12"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 min-h-[85vh] items-center">

          {/* Left Column: All text content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="text-[11px] tracking-[0.3em] text-muted uppercase mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-accent inline-block" />
              Frontend &amp; Backend Developer
            </motion.p>

            <motion.div variants={item}>
              <h1 className="font-serif font-black leading-[0.92] tracking-tight">
                <span className="block text-4xl md:text-5xl lg:text-6xl text-muted font-bold italic mb-1">
                  Hey. I&apos;m Sanshiro,
                </span>
                <span className="block text-6xl md:text-8xl lg:text-9xl text-ntext">A FULL</span>
                <span className="block text-6xl md:text-8xl lg:text-9xl text-ntext italic">&amp; Stack</span>
                <span className="block text-6xl md:text-8xl lg:text-9xl accent-text">ENGINEER</span>
              </h1>
            </motion.div>

            <motion.p variants={item} className="mt-8 max-w-md text-sm text-muted leading-relaxed">
              フロントエンド4年・バックエンド2年の経験を持つエンジニア。
              美しいUIと堅牢なバックエンドで、プロダクトの価値を最大化します。
            </motion.p>

            {/* Social icons */}
            <motion.div variants={item} className="mt-6 flex items-center gap-5">
              <a
                href="https://github.com/sanpicule"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://twitter.com/SanpiTech240"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://zenn.dev/sanpi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200 text-sm font-bold tracking-wide"
                aria-label="Zenn"
              >
                Zenn
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              variants={item}
              className="mt-8 flex items-center gap-0"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`pr-6 ${i < stats.length - 1 ? 'border-r border-warm mr-6' : ''}`}
                >
                  <p className="font-serif font-black text-3xl md:text-4xl text-ntext leading-none">
                    <span data-stat={i}>{stat.value}</span>{stat.suffix}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] text-muted uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="mt-10 flex gap-4 flex-wrap">
              <motion.a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-accent text-cream px-7 py-3.5 text-sm font-bold tracking-wider uppercase hover:bg-accent/90 transition-colors accent-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                EXPLORE WORK <ArrowRight size={14} />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 border border-warm text-ntext px-7 py-3.5 text-sm font-bold tracking-wider uppercase hover:border-accent/50 hover:text-accent transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                CONTACT ME
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="relative hero-portrait">
              {/* Outer glow frame */}
              <div className="absolute -inset-3 border border-accent/20 rounded-none" />
              <div className="absolute -inset-6 border border-accent/10 rounded-none" />

              {/* Video container */}
              <div className="w-64 h-80 md:w-80 md:h-[420px] lg:w-96 lg:h-[500px] overflow-hidden border border-warm bg-surface relative">
                <video
                  src="/videos/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/40" />
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent" />

              {/* Floating label */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-accent text-cream text-[10px] font-bold tracking-widest px-4 py-2 uppercase"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                AVAILABLE FOR HIRE
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Services strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-warm mt-16 border border-warm overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {[
            { title: 'FRONTEND DEV', desc: 'React / Next.js で快適なUIを設計' },
            { title: 'BACKEND DEV', desc: 'NestJS / Python でAPIを構築' },
            { title: 'RESPONSIVE UI', desc: 'あらゆるデバイスに最適化' },
            { title: 'UI DESIGN', desc: 'Figmaでのデザインも対応可能' },
          ].map((service) => (
            <div key={service.title} className="bg-cream p-5 md:p-6 hover:bg-parchment transition-colors group">
              <p className="text-[11px] font-bold tracking-widest text-accent uppercase mb-2 group-hover:text-accent">{service.title}</p>
              <p className="text-xs text-muted leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] tracking-[0.3em] text-muted uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-muted/50 to-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
