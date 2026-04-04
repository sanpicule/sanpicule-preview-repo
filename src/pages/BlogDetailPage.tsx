import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useArticle } from '../hooks/useArticle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
};

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { article, loading, error } = useArticle(id ?? '');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  return (
    <div className="min-h-screen bg-cream text-ntext">
      <Header />

      <main className="pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto">

          {/* 戻るボタン */}
          <motion.button
            onClick={() => navigate('/#blog')}
            className="flex items-center gap-2 text-xs text-muted hover:text-ntext transition-colors uppercase tracking-widest mb-12"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={14} /> Back to Blog
          </motion.button>

          {/* ローディング */}
          {loading && (
            <div className="space-y-4 animate-pulse">
              <div className="h-6 bg-surface rounded w-3/4" />
              <div className="h-3 bg-surface rounded w-24" />
              <div className="mt-10 space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-3 bg-surface rounded" />
                ))}
              </div>
            </div>
          )}

          {/* エラー */}
          {error && (
            <p className="text-xs text-red-400">{error}</p>
          )}

          {/* 記事本文 */}
          {!loading && !error && article && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <header className="mb-10 pb-8 border-b border-warm">
                <p className="text-[10px] tracking-[0.3em] text-accent uppercase mb-4">BLOG</p>
                <h1 className="font-serif font-black text-3xl sm:text-4xl text-ntext leading-tight mb-4">
                  {article.title}
                </h1>
                <time
                  dateTime={article.created_at}
                  className="text-xs text-muted tracking-wide"
                >
                  {formatDate(article.created_at)}
                </time>
              </header>

              <div className="prose prose-sm prose-invert max-w-none
                prose-headings:font-serif prose-headings:font-black prose-headings:text-ntext
                prose-p:text-ntext/75 prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-code:text-accent prose-code:bg-surface prose-code:px-1 prose-code:py-0.5 prose-code:text-xs
                prose-pre:bg-surface prose-pre:border prose-pre:border-warm
                prose-blockquote:border-l-accent prose-blockquote:text-muted
                prose-strong:text-ntext
                prose-hr:border-warm
                prose-li:text-ntext/75"
              >
                <ReactMarkdown>{article.body}</ReactMarkdown>
              </div>
            </motion.article>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
