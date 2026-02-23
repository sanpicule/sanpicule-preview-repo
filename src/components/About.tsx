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
      // Split heading reveal
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
      return <Briefcase className="w-4 h-4 text-muted" />;
    }
    return <GraduationCap className="w-4 h-4 text-muted" />;
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
          <h2 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl text-dark leading-tight">
            <span className="block overflow-hidden"><span className="block">CRAFTING MEANINGFUL</span></span>
            <span className="block overflow-hidden"><span className="block">CODE <span className="italic">&amp; Intuitive</span></span></span>
            <span className="block overflow-hidden"><span className="block">EXPERIENCES</span></span>
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
                <img
                  src="/images/profile.jpg"
                  alt="Sanshiro Hikawa"
                  className="w-20 h-20 rounded-full object-cover object-top border-2 border-warm"
                />
              </div>
              <div>
                <h3 className="font-bold text-dark text-xl">{profileData.name}</h3>
                <div className="mt-1">
                  {profileData.title.split(' / ').map((line, i) => (
                    <p key={i} className="text-xs text-muted">— {line}</p>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-dark/80 leading-[1.9] mb-8">
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
                    className="flex flex-col items-center gap-2 text-dark/60 hover:text-dark transition-colors"
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
            <h3 className="text-xs font-semibold tracking-[0.2em] text-muted uppercase mb-8">Career Timeline</h3>
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
                  <div className="absolute -left-[41px] top-1 w-7 h-7 rounded-full bg-cream border-2 border-warm flex items-center justify-center">
                    {getTimelineIcon(item)}
                  </div>
                  <p className="text-[11px] text-muted tracking-wider mb-1 uppercase">{item.period}</p>
                  <h4 className="font-bold text-dark text-lg leading-tight">{item.company}</h4>
                  <p className="text-sm text-muted mb-1">{item.position}</p>
                  <p className="text-xs text-dark/60 leading-relaxed">{item.description}</p>
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
