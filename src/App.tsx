import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { profileData } from '@/lib/data';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Portfolio from '@/components/Portfolio';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import useCustomCursor from './hooks/useCustomCursor';

// --- Loading Screen ---
const textContainerVariants: Variants = {
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const letterVariants: Variants = {
  initial: { y: 0, opacity: 1 },
  animate: {
    y: [0, -12, 0],
    opacity: [1, 0.6, 1],
    transition: { duration: 1.6, ease: 'easeInOut', repeat: Infinity }
  }
};

const panelVariants = {
  initial: { y: '100vh' },
  animate: { y: '100vh' },
  exit: (custom: number) => ({
    y: ['100vh', '0vh', '-100vh'],
    transition: {
      times: [0, 0.5, 1],
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: custom * 0.08,
    }
  })
};

const LoadingScreen = () => {
  const text = 'SANSHIRO HIKAWA';
  const letters = Array.from(text);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-cream"
      key="loader"
      exit="exit"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={textContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1
          className="text-xl font-semibold text-accent/60 flex overflow-hidden py-4 tracking-[0.3em]"
          aria-label={text}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              style={{ whiteSpace: 'pre' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>

      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-parchment"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={i}
          />
        ))}
      </div>
    </motion.div>
  );
};

// --- Main App ---
function App() {
  useCustomCursor();
  const [loading, setLoading] = useState(() => {
    // ローディングアニメーションは初回訪問時のみ表示
    return !sessionStorage.getItem('portfolioLoaded');
  });

  useEffect(() => {
    if (!loading) return;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('portfolioLoaded', '1');
      document.body.style.overflow = 'auto';
    }, 3000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  const MainPage = () => (
    <motion.main
      className="min-h-screen-dynamic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <About about={profileData.about} />
      <Skills skills={profileData.skills} />
      <Portfolio projects={profileData.projects} />
      <Contact contact={profileData.contact} />
      <Footer />
    </motion.main>
  );

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default App;
