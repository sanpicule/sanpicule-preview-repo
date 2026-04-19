import { motion } from 'framer-motion';
import { AiServiceEntry } from '../types';

interface AIServicesProps {
  services: AiServiceEntry[];
}

const statusLabel: Record<AiServiceEntry['status'], string> = {
  delivered: 'Delivered',
  in_progress: 'In progress',
};

const AIServices = ({ services }: AIServicesProps) => {
  return (
    <section id="ai" className="section-padding bg-cream border-t border-warm">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">03 / AI Services</p>
            <h2 className="font-serif font-semibold text-ntext text-3xl md:text-4xl leading-tight">
              AI 導入支援
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm text-muted leading-[1.95] max-w-xl">
              副業として、企業の生成 AI 導入のコンサルティングとドキュメント制作、実装支援を行っています。エンジニアとして手を動かせる立場から、現場で使える形に落とすのが得意です。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-warm border border-warm">
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="bg-cream p-7 md:p-8 flex flex-col min-h-[280px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <span
                  className={`text-[10px] tracking-[0.15em] uppercase px-2 py-1 border ${
                    service.status === 'delivered'
                      ? 'border-ntext text-ntext'
                      : 'border-warm text-muted'
                  }`}
                >
                  {statusLabel[service.status]}
                </span>
              </div>

              <h3 className="font-serif font-medium text-ntext text-lg leading-snug mb-4">
                {service.title}
              </h3>

              <p className="text-sm text-muted leading-[1.85] flex-1">
                {service.summary}
              </p>

              <div className="mt-6 pt-5 border-t border-warm flex flex-wrap gap-1.5">
                {service.keywords.map(keyword => (
                  <span key={keyword} className="tag">{keyword}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-warm pt-8">
          <p className="text-sm text-muted max-w-xl leading-relaxed">
            AI 導入のご相談、コンテンツ制作、PoC 開発などお気軽にお問い合わせください。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ntext text-ntext px-5 py-3 text-xs tracking-[0.15em] uppercase hover:bg-ntext hover:text-cream transition-colors self-start"
          >
            Inquiry
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIServices;
