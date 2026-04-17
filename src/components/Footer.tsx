import { Github, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'AI', href: '#ai' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: profileData.contact.github, name: 'GitHub' },
    { icon: Twitter, href: profileData.contact.twitter, name: 'Twitter' },
    { icon: Instagram, href: profileData.contact.instagram, name: 'Instagram' },
    { icon: Mail, href: `mailto:${profileData.contact.email}`, name: 'Email' },
  ].filter(l => l.href);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark text-light py-16 px-6 md:px-12">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="text-[10px] tracking-[0.3em] text-light/50 uppercase mb-4">Sanshiro Hikawa</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              人と技術の間をつなぐ、<br />
              フルスタックエンジニア。
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] text-light/50 uppercase mb-4">Navigation</p>
            <nav className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs text-light/70 hover:text-light transition-colors tracking-wider"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] text-light/50 uppercase mb-4">Connect</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-light/20 flex items-center justify-center text-light/60 hover:text-light hover:border-light/60 transition-colors"
                  title={name}
                  aria-label={name}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-light/10 pt-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[11px] text-light/40">© {currentYear} Sanshiro Hikawa. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-light/50 hover:text-light transition-colors"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
