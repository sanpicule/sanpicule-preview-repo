'use client';

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { profileData } from '../lib/data';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const fadeUpAnimate = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const portfolioProjects = profileData.projects.filter(p => p.type === 'portfolio');
  const projectIndex = portfolioProjects.findIndex(p => p.id === id);
  const project = portfolioProjects[projectIndex];
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!project) {
    navigate('/');
    return null;
  }

  const heroImage = project.screenshots.length > 0 ? project.screenshots[0].src : project.thumbnail;

  return (
    <div className="min-h-screen bg-cream text-ntext">
      <Header />

      {/* ━━━ Hero ━━━ */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.replace(/(\.[^.]+)$/, '-sp$1')}
            alt={project.title}
            className="md:hidden w-full h-full object-cover"
          />
          <img
            src={heroImage}
            alt={project.title}
            className="hidden md:block w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/20" />
        </div>

        <div className="absolute top-1/2 right-6 md:right-10 -translate-y-1/2 z-10">
          <p className="text-[10px] tracking-[0.45em] text-accent uppercase [writing-mode:vertical-rl]">
            PORTFOLIO
          </p>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24">
          <motion.p
            className="text-[10px] tracking-[0.3em] text-accent uppercase mb-4"
            {...fadeUpAnimate(0)}
          >
            CASE STUDY
          </motion.p>
          <motion.h1
            className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-ntext leading-[1.05] mb-6"
            {...fadeUpAnimate(0.1)}
          >
            {project.title}
          </motion.h1>
          <motion.div
            className="flex flex-wrap gap-3"
            {...fadeUpAnimate(0.2)}
          >
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-cream px-5 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-accent/85 transition-colors"
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ━━━ メタ情報 ━━━ */}
      <section className="border-b border-warm py-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div>
              <p className="text-[9px] tracking-[0.25em] text-accent uppercase mb-1.5">ROLE</p>
              <p className="text-sm text-ntext font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] text-accent uppercase mb-1.5">PERIOD</p>
              <p className="text-sm text-ntext font-medium">{project.duration}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] text-accent uppercase mb-1.5">CLIENT</p>
              <p className="text-sm text-ntext font-medium">{project.client ?? '個人開発'}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] text-accent uppercase mb-1.5">STACK</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.map(t => (
                  <span key={t} className="text-[10px] text-ntext/60 border border-warm px-1.5 py-0.5">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Story ━━━ */}
      <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">

            {/* 左: 概要 + 課題/解決 + Learnings */}
            <motion.div className="md:col-span-2 space-y-10" {...fadeUp()}>
              <div>
                <p className="text-[9px] tracking-[0.3em] text-accent uppercase mb-4">OVERVIEW</p>
                <p className="text-sm text-ntext/75 leading-relaxed">{project.description}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[9px] tracking-[0.3em] text-accent uppercase mb-2">CHALLENGE</p>
                  <p className="text-sm text-ntext/75 leading-relaxed">{project.challenge}</p>
                </div>
                <div className="w-8 h-px bg-warm" />
                <div>
                  <p className="text-[9px] tracking-[0.3em] text-accent uppercase mb-2">SOLUTION</p>
                  <p className="text-sm text-ntext/75 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div>
                <p className="text-[9px] tracking-[0.3em] text-accent uppercase mb-3">LEARNINGS</p>
                <ul className="space-y-2">
                  {project.learnings.map((l, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ntext/70">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 右: スクリーンショット縦積み */}
            <motion.div className="md:col-span-3 space-y-6" {...fadeUp(0.1)}>
              {project.screenshots.map((shot, i) => (
                <div key={i}>
                  <div className="overflow-hidden border border-warm">
                    <img
                      src={shot.src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                  {shot.comment && (
                    <p className="mt-2 text-xs text-ntext/45 leading-relaxed px-1">{shot.comment}</p>
                  )}
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ━━━ NEXT PROJECT ━━━ */}
      {nextProject && nextProject.id !== project.id && (
        <motion.section
          className="py-16 md:py-24 px-6 border-t border-warm cursor-pointer group"
          onClick={() => navigate(`/project/${nextProject.id}`)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-[9px] tracking-[0.4em] text-muted uppercase mb-3">NEXT PROJECT</p>
              <p className="font-serif font-black text-3xl sm:text-4xl text-ntext group-hover:text-accent transition-colors duration-300">
                {nextProject.title}
              </p>
            </div>
            <ArrowRight size={24} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </div>
        </motion.section>
      )}

      {/* ━━━ 戻るボタン ━━━ */}
      <div className="px-6 sm:px-8 lg:px-12 py-6 border-t border-warm">
        <div className="max-w-5xl mx-auto">
          <motion.button
            onClick={() => navigate('/#portfolio')}
            className="flex items-center gap-2 text-xs text-muted hover:text-ntext transition-colors uppercase tracking-widest"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </motion.button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
