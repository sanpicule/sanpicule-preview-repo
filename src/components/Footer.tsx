import { motion } from 'framer-motion';
import { Mail, Twitter, Instagram, Github, ArrowUp } from 'lucide-react';
import { profileData } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];
  const socialLinks = [
    { icon: Github, href: profileData.contact.github, name: 'GitHub' },
    { icon: Twitter, href: profileData.contact.twitter, name: 'Twitter' },
    { icon: Instagram, href: profileData.contact.instagram, name: 'Instagram' },
    { icon: Mail, href: `mailto:${profileData.contact.email}`, name: 'Email' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark text-light py-16 px-6 md:px-12 overflow-hidden">
      <div className="container-max">
        <div className="flex items-start justify-between mb-16 gap-8 flex-wrap">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-light/50 hover:text-light transition-colors tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-light/10 pt-8 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-light/30">© {currentYear} Sanshiro Hikawa. All Rights Reserved.</p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, name }) => href && (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-light/20 flex items-center justify-center text-light/40 hover:text-accent hover:border-accent/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={name}
              >
                <Icon size={14} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-light/20 transition-colors ml-2"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Scroll to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
