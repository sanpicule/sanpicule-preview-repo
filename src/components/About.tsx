import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Github, FileText, Rss } from 'lucide-react';
import { profileData } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  about: typeof profileData.about;
}

const About = ({ about }: AboutProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { name: 'GitHub', href: profileData.contact.github, icon: Github },
    { name: 'Zenn', href: 'https://zenn.dev/sanpi34', icon: Rss },
    { name: 'Skill Sheet', href: 'https://sanpicule.github.io/my-information/skill-sheet.pdf', icon: FileText }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.about-headline span', {
        y: '120%',
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const getTimelineIcon = (item: typeof about.workHistory[0]) => {
    if (item.position.includes('エンジニア') || item.position.includes('開発')) {
      return <Briefcase className="w-3.5 h-3.5 text-accent" />;
    }
    return <GraduationCap className="w-3.5 h-3.5 text-muted" />;
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-cream overflow-hidden">
      <div className="container-max">
        <div className="divider mb-16" />

        {/* Large headline */}
        <div ref={headingRef} className="about-headline mb-16 overflow-hidden">
          <h2 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl text-ntext leading-tight">
            <span className="block overflow-hidden"><span className="block">ABOUT ME</span></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: About text + profile */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 border border-accent/30" />
                <img
                  src="/images/profile.jpg"
                  alt="Sanshiro Hikawa"
                  className="w-24 h-24 md:w-40 md:h-40 object-cover object-top border border-warm relative"
                />
              </div>
              <div>
                <h3 className="font-bold text-ntext text-2xl md:text-4xl">{profileData.name}</h3>
                <div className="mt-1">
                  {profileData.title.split(' / ').map((line, i) => (
                    <p key={i} className="text-xs text-muted">— {line}</p>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-ntext/75 leading-[1.9] mb-8">
              {about.description}
            </p>

            <div>
              <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-4">Find me on</p>
              <div className="flex gap-6">
                {socialLinks.map(link => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="text-[10px] tracking-wider">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xs font-semibold tracking-[0.2em] text-muted uppercase mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-accent inline-block" />
              Career Timeline
            </h3>
            <div className="relative border-l border-warm pl-8 space-y-10">
              {about.workHistory.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-[41px] top-1 w-7 h-7 rounded-full bg-surface border border-warm flex items-center justify-center">
                    {getTimelineIcon(item)}
                  </div>
                  <p className="text-[11px] text-accent tracking-wider mb-1 uppercase font-medium">{item.period}</p>
                  <h4 className="font-bold text-ntext text-lg leading-tight">{item.company}</h4>
                  <p className="text-sm text-muted mb-1">{item.position}</p>
                  <p className="text-xs text-ntext/50 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="divider mt-16" />
      </div>
    </section>
  );
};

export default About;
