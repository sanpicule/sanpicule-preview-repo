'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
  projects: Project[];
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const navigate = useNavigate();

  return (
    <motion.article
      layout
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-warm hover:border-accent/30 transition-all duration-300"
      onClick={() => navigate(`/project/${project.id}`)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="overflow-hidden bg-surface">
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

      <div className="p-5 bg-surface">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-lg text-ntext leading-tight mb-1">{project.title}</h3>
            <p className="text-xs text-muted line-clamp-2 leading-relaxed">{project.description}</p>
          </div>
          <motion.div
            className="w-8 h-8 rounded-full border border-warm flex-shrink-0 flex items-center justify-center mt-1"
            whileHover={{ backgroundColor: '#00D4C8', borderColor: '#00D4C8' }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={12} className="text-ntext group-hover:text-cream transition-colors" />
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

    </motion.article>
  );
};

const Portfolio = ({ projects }: PortfolioProps) => {
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
              <h2 className="portfolio-heading font-serif font-black text-5xl md:text-6xl text-ntext leading-none">Portfolio</h2>
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
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
