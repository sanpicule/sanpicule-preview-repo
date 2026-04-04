import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useArticles } from '../hooks/useArticles';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
};

const Blog = () => {
  const { articles, loading, error } = useArticles();
  const navigate = useNavigate();

  return (
    <section id="blog" className="section-padding bg-cream overflow-hidden">
      <div className="container-max">
        <div className="divider mb-16" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-[11px] tracking-[0.25em] text-muted uppercase mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-accent inline-block" />
              Latest Posts
            </p>
            <h2 className="font-serif font-black text-5xl md:text-6xl text-ntext leading-none">Blog</h2>
          </div>
          <p className="text-xs text-muted max-w-xs leading-relaxed">
            日々の開発で得た知識や気づきを発信しています。
          </p>
        </div>

        {loading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-b border-warm py-5 animate-pulse">
                <div className="h-4 bg-surface rounded w-2/3 mb-2" />
                <div className="h-3 bg-surface rounded w-24" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-xs text-red-400">{error}</p>
        )}

        {!loading && !error && articles.length === 0 && (
          <p className="text-xs text-muted">記事がありません。</p>
        )}

        {!loading && !error && articles.length > 0 && (
          <motion.ul
            className="divide-y divide-warm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {articles.map((article) => (
              <motion.li
                key={article.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
                }}
              >
                <button
                  onClick={() => navigate(`/blog/${article.id}`)}
                  className="group w-full py-5 flex items-center justify-between gap-6 text-left"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <ArrowRight
                      size={14}
                      className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                    />
                    <p className="text-sm text-ntext font-medium leading-relaxed group-hover:text-accent transition-colors duration-200 truncate">
                      {article.title}
                    </p>
                  </div>
                  <time
                    dateTime={article.created_at}
                    className="text-[11px] text-muted tracking-wide flex-shrink-0"
                  >
                    {formatDate(article.created_at)}
                  </time>
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

