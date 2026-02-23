import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 4, suffix: '+', label: 'Years Frontend' },
  { value: 2, suffix: '+', label: 'Years Backend' },
  { value: 3, suffix: '', label: 'Products Built' },
  { value: 100, suffix: '%', label: 'Dedication' },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Stats counter
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

      // Parallax on image
      gsap.to('.hero-portrait', {
        yPercent: -15,
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
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" ref={sectionRef} className="min-h-screen relative overflow-hidden bg-cream pt-24 pb-12 px-6 md:px-12">
      {/* Background decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-full h-px bg-warm/40" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-warm/40" />
        <div className="absolute left-1/3 top-0 h-full w-px bg-warm/30" />
        <div className="absolute left-2/3 top-0 h-full w-px bg-warm/30" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-0 min-h-[85vh] items-center">

          {/* Left Column: Title */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item} className="text-sm tracking-[0.25em] text-muted uppercase mb-4">
              Frontend & Backend Developer
            </motion.p>

            <motion.div variants={item} ref={headingRef}>
              <h1 className="font-serif font-black leading-[0.95] tracking-tight text-dark">
                <span className="block text-4xl md:text-5xl lg:text-6xl italic text-muted font-bold">Hey. I'm Sanshiro,</span>
                <span className="block text-6xl md:text-8xl lg:text-9xl">A FULL</span>
                <span className="block text-6xl md:text-8xl lg:text-9xl italic">&amp; Stack</span>
                <span className="block text-6xl md:text-8xl lg:text-9xl">ENGINEER</span>
              </h1>
            </motion.div>

            <motion.p variants={item} className="mt-6 max-w-md text-sm text-muted leading-relaxed">
              フロントエンド4年・バックエンド2年の経験を持つエンジニア。
              美しいUIと堅牢なバックエンドで、プロダクトの価値を最大化します。
            </motion.p>

            <motion.div variants={item} className="mt-8 flex gap-4 flex-wrap">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-dark text-light px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-dark/80 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                CONTACT ME <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-dark text-dark px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-dark hover:text-light transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                VIEW WORK
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Center Column: Video */}
          <motion.div
            className="lg:col-span-3 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
          >
            <div className="relative">
              <div className="w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-warm hero-portrait bg-dark">
                <video
                  src="/videos/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Orbit decoration */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-warm/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{ scale: 1.12 }}
              />
            </div>
          </motion.div>

          {/* Right Column: Stats */}
          <motion.div
            ref={statsRef}
            className="lg:col-span-3 flex flex-col justify-center gap-6 lg:pl-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="border-b border-warm pb-5"
              >
                <p className="font-serif font-black text-4xl md:text-5xl text-dark leading-none">
                  <span data-stat={i}>{stat.value}</span>{stat.suffix}
                </p>
                <p className="text-xs tracking-widest text-muted uppercase mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Services strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-warm mt-12 border border-warm rounded-2xl overflow-hidden"
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
            <div key={service.title} className="bg-cream p-5 md:p-6">
              <p className="text-[11px] font-bold tracking-widest text-dark uppercase mb-2">{service.title}</p>
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
          <div className="w-px h-8 bg-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
