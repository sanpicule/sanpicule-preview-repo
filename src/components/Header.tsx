import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const isDetailPage = pathname.startsWith('/project/');

  const navItems = [
    { name: 'Home', href: isDetailPage ? '/#home' : '#home' },
    { name: 'About', href: isDetailPage ? '/#about' : '#about' },
    { name: 'Skills', href: isDetailPage ? '/#skills' : '#skills' },
    { name: 'Portfolio', href: isDetailPage ? '/#portfolio' : '#portfolio' },
    { name: 'Contact', href: isDetailPage ? '/#contact' : '#contact' },
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
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-cream/95 backdrop-blur-md border-b border-warm' : 'bg-cream/80 backdrop-blur-sm'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href={logoHref} className="flex items-center gap-2.5 group">
          <motion.span
            className="w-2 h-2 rounded-full bg-accent inline-block"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-xs font-semibold tracking-[0.2em] text-ntext uppercase">
            Sanshiro Hikawa
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.15em] text-muted uppercase hover:text-ntext transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href={isDetailPage ? '/#contact' : '#contact'}
            className="hidden md:flex items-center gap-2 bg-accent text-cream px-5 py-2 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-accent/90 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            CONTACT ME
          </motion.a>

          <motion.button
            onClick={toggle}
            className="md:hidden flex items-center gap-2 border border-warm text-ntext px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase hover:border-accent/50 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            MENU
            <div className="flex flex-col gap-[4px]">
              <motion.span
                className="w-4 h-[1.5px] bg-ntext block origin-center"
                animate={isMenuOpen ? { rotate: 45, y: 2.75 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-4 h-[1.5px] bg-ntext block origin-center"
                animate={isMenuOpen ? { rotate: -45, y: -2.75 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-cream flex flex-col grid-bg"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-warm">
              <a href={logoHref} onClick={toggle} className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                <span className="text-xs font-semibold tracking-[0.2em] text-ntext uppercase">Sanshiro Hikawa</span>
              </a>
              <button
                onClick={toggle}
                className="flex items-center gap-2 border border-warm text-ntext px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase"
              >
                CLOSE ✕
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-start justify-center px-8 md:px-16 gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={toggle}
                  className="group relative text-5xl md:text-8xl font-serif font-black text-ntext leading-none py-2 overflow-hidden"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="relative inline-block transition-all duration-300 group-hover:translate-x-4 group-hover:text-accent">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="px-8 md:px-16 py-8 border-t border-warm flex items-center justify-between">
              <p className="text-xs text-muted tracking-widest">FRONTEND / BACKEND DEVELOPER</p>
              <p className="text-xs text-muted">© 2025</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
