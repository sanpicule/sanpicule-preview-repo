'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, X, ArrowRight, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
  projects: Project[];
  selectedProject: Project | null;
  onProjectSelect: (project: Project) => void;
  onClose: () => void;
}

const ProjectCard = ({
  project,
  index,
  isSelected,
  onSelect,
}: {
  project: Project;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <motion.article
      layout
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
        isSelected ? 'border-dark' : 'border-warm hover:border-dark/40'
      }`}
      onClick={onSelect}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="overflow-hidden bg-parchment">
        {project.thumbnail && (
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="w-full  md:h-[210px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      <div className="p-5 bg-cream">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-lg text-dark leading-tight mb-1">{project.title}</h3>
            <p className="text-xs text-muted line-clamp-2 leading-relaxed">{project.description}</p>
          </div>
          <motion.div
            className="w-8 h-8 rounded-full border border-warm flex-shrink-0 flex items-center justify-center mt-1"
            whileHover={{ backgroundColor: '#1A1917', borderColor: '#1A1917' }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={12} className="text-dark group-hover:text-light transition-colors" />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="tag text-[10px]">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tag text-[10px]">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>

      {/* Selected indicator */}
      {isSelected && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-dark"
          layoutId="selectedIndicator"
        />
      )}
    </motion.article>
  );
};

const ProjectDetailPanel = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full md:max-w-5xl bg-cream rounded-t-3xl md:rounded-3xl overflow-hidden border border-warm max-h-[92vh] overflow-y-auto"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-cream/95 backdrop-blur-sm px-6 md:px-8 py-4 border-b border-warm">
          {/* SP: タイトルと閉じるボタンを同行、ボタン群は下 / PC: 全て同行 */}
          <div className="flex items-start justify-between gap-2 md:items-center">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-muted uppercase mb-0.5">Portfolio</p>
              <h2 className="font-serif font-bold text-lg md:text-2xl text-dark leading-tight">{project.title}</h2>
            </div>
            {/* 閉じるボタンは常に右上 */}
            <motion.button
              onClick={onClose}
              className="flex-shrink-0 w-9 h-9 rounded-full border border-warm flex items-center justify-center text-dark hover:bg-parchment transition-colors mt-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={16} />
            </motion.button>
          </div>
          {/* Live / GitHub ボタン: SP は次行, PC は右に並べる */}
          <div className="flex items-center gap-2 mt-3 md:hidden">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-dark text-light px-4 py-2 rounded-full text-xs font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={12} /> Live
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-warm text-dark px-4 py-2 rounded-full text-xs font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={12} /> GitHub
              </motion.a>
            )}
          </div>
          {/* PC 用ボタン (hidden on SP) */}
          <div className="hidden md:flex absolute top-4 right-14 items-center gap-3">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-dark text-light px-4 py-2 rounded-full text-xs font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={12} /> Live
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-warm text-dark px-4 py-2 rounded-full text-xs font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={12} /> GitHub
              </motion.a>
            )}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Images */}
            <div className="lg:col-span-3 space-y-3">
              <div className="relative overflow-hidden rounded-xl border border-warm bg-parchment aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={project.screenshots.length > 0 ? project.screenshots[currentImageIndex].src : project.thumbnail}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              {project.screenshots.length > 1 && (
                <div className="flex gap-2">
                  {project.screenshots.map((screenshot, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-1 overflow-hidden rounded-lg border-2 transition-all ${
                        index === currentImageIndex ? 'border-dark' : 'border-warm opacity-60 hover:opacity-100'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img src={screenshot.src} alt="" className="w-full aspect-video object-cover" />
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Feature comment */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-parchment rounded-xl p-4 border border-warm"
                >
                  <p className="text-xs text-dark/70 leading-relaxed">
                    {project.screenshots.length > 0 ? project.screenshots[currentImageIndex].comment : ''}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">About</h3>
                <p className="text-sm text-dark/80 leading-relaxed">{project.description}</p>
              </div>

              <div className="bg-parchment rounded-xl p-5 border border-warm space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar size={14} className="text-muted flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider">期間</p>
                    <p className="text-sm text-dark font-medium">{project.duration}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-wider mb-2">使用技術</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tag text-[10px]">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {project.challenge && (
                <div>
                  <h3 className="text-xs font-semibold tracking-widest text-muted uppercase mb-2">Challenge</h3>
                  <p className="text-xs text-dark/70 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h3 className="text-xs font-semibold tracking-widest text-muted uppercase mb-2">Solution</h3>
                  <p className="text-xs text-dark/70 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {project.learnings && project.learnings.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold tracking-widest text-muted uppercase mb-2">Learnings</h3>
                  <ul className="space-y-1">
                    {project.learnings.map((l, i) => (
                      <li key={i} className="text-xs text-dark/70 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = ({ projects, selectedProject, onProjectSelect, onClose }: PortfolioProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-heading', {
        y: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const personalProjects = projects.filter(p => p.type === 'portfolio');

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="section-padding bg-cream overflow-hidden">
        <div className="container-max">
          <div className="divider mb-16" />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-muted uppercase mb-3">My Work</p>
              <h2 className="portfolio-heading font-serif font-black text-5xl md:text-6xl text-dark leading-none">Portfolio</h2>
            </div>
            <p className="text-xs text-muted max-w-xs leading-relaxed">
              私が開発したプロジェクトをご覧ください。クリックで詳細を表示します。
            </p>
          </div>

          {personalProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {personalProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isSelected={selectedProject?.id === project.id}
                  onSelect={() => onProjectSelect(project)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inline detail panel */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPanel project={selectedProject} onClose={onClose} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
