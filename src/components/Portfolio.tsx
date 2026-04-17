import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
}

const Portfolio = ({ projects }: PortfolioProps) => {
  const personalProjects = projects.filter(p => p.type === 'portfolio');

  return (
    <section id="portfolio" className="section-padding bg-parchment border-t border-warm">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">04 / Projects</p>
            <h2 className="font-serif font-semibold text-ntext text-3xl md:text-4xl leading-tight">
              個人開発
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm text-muted leading-[1.95] max-w-xl">
              実在する課題から出発して作ったプロダクト。フロントエンドからバックエンドまで一人で組み立てながら、AI 支援の開発プラットフォームも積極的に取り入れています。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-warm border border-warm">
          {personalProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="bg-cream flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.thumbnail && (
                <div className="overflow-hidden bg-parchment aspect-[4/3]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="text-[10px] tracking-wider text-muted">{project.role}</p>
                </div>

                <h3 className="font-serif font-medium text-ntext text-lg leading-snug mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-muted leading-[1.85] flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tag">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-warm flex items-center gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-ntext hover:text-muted transition-colors"
                    >
                      <ExternalLink size={12} />
                      Visit
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-muted hover:text-ntext transition-colors"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
