import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggle = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <motion.span
            className="w-2.5 h-2.5 rounded-full bg-dark inline-block"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-xs font-semibold tracking-[0.2em] text-dark uppercase">
            Sanshiro Hikawa
          </span>
        </a>

        <motion.button
          onClick={toggle}
          className="flex items-center gap-2.5 bg-dark text-light px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase hover:bg-dark/80 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          MENU
          <div className="flex flex-col gap-[4px]">
            <motion.span
              className="w-4 h-[1.5px] bg-light block origin-center"
              animate={isMenuOpen ? { rotate: 45, y: 2.75 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-4 h-[1.5px] bg-light block origin-center"
              animate={isMenuOpen ? { rotate: -45, y: -2.75 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-cream flex flex-col"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 md:px-12 py-5">
              <a href="#home" onClick={toggle} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-dark inline-block" />
                <span className="text-xs font-semibold tracking-[0.2em] text-dark uppercase">Sanshiro Hikawa</span>
              </a>
              <button
                onClick={toggle}
                className="flex items-center gap-2.5 bg-dark text-light px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase"
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
                  className="group relative text-5xl md:text-8xl font-serif font-black text-dark leading-none py-2 overflow-hidden"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-4">
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
