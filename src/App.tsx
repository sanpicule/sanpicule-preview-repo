import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import AIServices from '@/components/AIServices';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';
import { profileData } from '@/lib/data';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Portfolio from '@/components/Portfolio';
import BlogDetailPage from '@/pages/BlogDetailPage';

const LoadingScreen = () => (
  <motion.div
    className="fixed inset-0 z-50 bg-cream flex items-center justify-center"
    key="loader"
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
  >
    <div className="flex flex-col items-center gap-5">
      <motion.span
        className="w-2 h-2 bg-ntext"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <p className="text-[10px] tracking-[0.4em] text-muted uppercase">
        Sanshiro Hikawa
      </p>
    </div>
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('portfolioLoaded');
  });

  useEffect(() => {
    if (!loading) return;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('portfolioLoaded', '1');
      document.body.style.overflow = 'auto';
    }, 1400);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  const MainPage = () => (
    <motion.main
      className="min-h-screen-dynamic bg-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <About about={profileData.about} />
      <Experience experience={profileData.experience} />
      <AIServices services={profileData.aiServices} />
      <Portfolio projects={profileData.projects} />
      <Skills skills={profileData.skills} />
      <Blog />
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
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default App;
