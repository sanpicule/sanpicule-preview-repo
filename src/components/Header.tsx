import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const isDetailPage = pathname.startsWith('/blog/');
  const prefix = isDetailPage ? '/' : '';

  const navItems = [
    { name: 'About', href: `${prefix}#about` },
    { name: 'Experience', href: `${prefix}#experience` },
    { name: 'AI', href: `${prefix}#ai` },
    { name: 'Projects', href: `${prefix}#portfolio` },
    { name: 'Blog', href: `${prefix}#blog` },
    { name: 'Contact', href: `${prefix}#contact` },
  ];

  const logoHref = isDetailPage ? '/' : '#home';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggle = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-warm' : 'bg-cream/70 backdrop-blur-sm'
        }`}
      >
        <a href={logoHref} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-ntext inline-block" />
          <span className="text-[11px] font-medium tracking-[0.25em] text-ntext uppercase">
            Sanshiro Hikawa
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-medium tracking-[0.2em] text-muted uppercase hover:text-ntext transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href={`${prefix}#contact`}
            className="hidden md:inline-flex items-center gap-2 bg-ntext text-cream px-4 py-2 text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-ntext/85 transition-colors"
          >
            Get in touch
          </a>

          <button
            onClick={toggle}
            className="md:hidden flex items-center gap-2 text-ntext"
            aria-label="Menu"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase">Menu</span>
            <div className="flex flex-col gap-[4px]">
              <motion.span
                className="w-4 h-[1.5px] bg-ntext block origin-center"
                animate={isMenuOpen ? { rotate: 45, y: 2.75 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="w-4 h-[1.5px] bg-ntext block origin-center"
                animate={isMenuOpen ? { rotate: -45, y: -2.75 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-cream flex flex-col"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-16" />
            <nav className="flex-1 flex flex-col items-start justify-center px-8 gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={toggle}
                  className="font-serif font-semibold text-4xl md:text-6xl text-ntext leading-none py-3 hover:text-muted transition-colors"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            <div className="px-8 py-6 border-t border-warm flex items-center justify-between">
              <p className="text-[10px] tracking-[0.25em] text-muted uppercase">Full-stack / AI</p>
              <p className="text-[10px] text-muted">© {new Date().getFullYear()}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
