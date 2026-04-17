import { motion } from 'framer-motion';
import { Github, FileText, Rss } from 'lucide-react';
import { profileData } from '@/lib/data';

interface AboutProps {
  about: typeof profileData.about;
}

const About = ({ about }: AboutProps) => {
  const socialLinks = [
    { name: 'GitHub', href: profileData.contact.github, icon: Github },
    { name: 'Zenn', href: 'https://zenn.dev/sanpi34', icon: Rss },
    { name: 'Skill Sheet', href: 'https://sanpicule.github.io/my-information/skill-sheet.pdf', icon: FileText }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section id="about" className="section-padding bg-cream border-t border-warm">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">01 / About</p>
            <h2 className="font-serif font-semibold text-ntext text-3xl md:text-4xl leading-tight">
              About
            </h2>
          </div>

          <motion.div
            className="md:col-span-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-5 mb-10">
              <img
                src="/images/profile.jpg"
                alt={profileData.name}
                className="w-20 h-20 md:w-24 md:h-24 object-cover object-top border border-warm"
              />
              <div>
                <h3 className="font-medium text-ntext text-xl md:text-2xl">{profileData.name}</h3>
                <p className="text-xs text-muted mt-1">{profileData.title}</p>
              </div>
            </div>

            <p className="text-[15px] text-ntext/80 leading-[1.95] mb-12">
              {about.description}
            </p>

            <div className="mb-12">
              <p className="eyebrow mb-5">Career</p>
              <div className="space-y-5">
                {about.workHistory.map((item, index) => (
                  <div key={index} className="grid grid-cols-[120px_1fr] gap-5 md:gap-8 pb-5 border-b border-warm last:border-b-0">
                    <p className="text-[11px] text-muted tracking-wider pt-1">{item.period}</p>
                    <div>
                      <p className="font-medium text-ntext text-sm">{item.company}</p>
                      <p className="text-xs text-muted mt-1">{item.position}</p>
                      {item.description && (
                        <p className="text-xs text-muted/80 mt-2 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow mb-4">Links</p>
              <div className="flex gap-6">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-ntext transition-colors text-xs tracking-wider"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
