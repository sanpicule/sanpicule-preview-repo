import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useArticles } from '../hooks/useArticles';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.');
};

const Blog = () => {
  const { articles, loading, error } = useArticles();
  const navigate = useNavigate();

  return (
    <section id="blog" className="section-padding bg-parchment border-t border-warm">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">06 / Notes</p>
            <h2 className="font-serif font-semibold text-ntext text-3xl md:text-4xl leading-tight">
              Blog
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm text-muted leading-[1.95] max-w-xl">
              日々の開発で得た学びや、AI・設計に関する考察を発信しています。
            </p>
          </div>
        </div>

        {loading && (
          <div className="space-y-3 border-t border-warm">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="py-6 border-b border-warm animate-pulse">
                <div className="h-4 bg-warm rounded w-2/3 mb-2" />
                <div className="h-3 bg-warm rounded w-24" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-xs text-red-500 border-t border-warm py-6">{error}</p>
        )}

        {!loading && !error && articles.length === 0 && (
          <p className="text-xs text-muted border-t border-warm py-6">記事がありません。</p>
        )}

        {!loading && !error && articles.length > 0 && (
          <motion.ul
            className="border-t border-warm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {articles.map((article) => (
              <motion.li
                key={article.id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
                }}
                className="border-b border-warm"
              >
                <button
                  onClick={() => navigate(`/blog/${article.id}`)}
                  className="group w-full py-6 flex items-center justify-between gap-6 text-left"
                >
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    <time
                      dateTime={article.created_at}
                      className="text-[11px] text-muted tracking-wider flex-shrink-0 w-24"
                    >
                      {formatDate(article.created_at)}
                    </time>
                    <p className="text-sm text-ntext leading-relaxed group-hover:text-muted transition-colors truncate">
                      {article.title}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted group-hover:text-ntext group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                  />
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
};

export default Blog;
