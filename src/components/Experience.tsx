import { motion } from 'framer-motion';
import { ExperienceEntry } from '../types';

interface ExperienceProps {
  experience: ExperienceEntry[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="section-padding bg-parchment border-t border-warm">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">02 / Experience</p>
            <h2 className="font-serif font-semibold text-ntext text-3xl md:text-4xl leading-tight">
              実務案件
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm text-muted leading-[1.95] max-w-xl">
              株式会社 Gizumo 所属エンジニアとして、案件ベースで横断的に開発。フロントエンドのリードから API 設計、インフラまで、プロダクトに必要なレイヤーを選ばず関わっています。
            </p>
          </div>
        </div>

        <div className="border-t border-warm">
          {experience.map((item, index) => (
            <motion.article
              key={index}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-b border-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="md:col-span-3">
                <p className="text-[11px] text-muted tracking-[0.15em] uppercase">{item.period}</p>
                <p className="mt-2 text-xs text-muted">{item.industry}</p>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-serif font-medium text-ntext text-xl md:text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted tracking-wider">{item.role}</p>
                <p className="mt-4 text-sm text-ntext/75 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="md:col-span-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
