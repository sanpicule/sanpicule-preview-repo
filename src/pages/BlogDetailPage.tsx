import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import DOMPurify from 'dompurify';
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
        <div className="max-w-3xl mx-auto">
          <motion.button
            onClick={() => navigate('/#blog')}
            className="flex items-center gap-2 text-[11px] text-muted hover:text-ntext transition-colors uppercase tracking-[0.2em] mb-12"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={12} /> Back to Articles
          </motion.button>

          {loading && (
            <div className="space-y-4 animate-pulse">
              <div className="h-6 bg-warm w-3/4" />
              <div className="h-3 bg-warm w-24" />
              <div className="mt-10 space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-3 bg-warm" />
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="text-xs text-red-500">{error}</p>
          )}

          {!loading && !error && article && (
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <header className="mb-10 pb-8 border-b border-warm">
                <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">Articles</p>
                <h1 className="font-serif font-semibold text-3xl sm:text-4xl text-ntext leading-tight mb-4">
                  {article.title}
                </h1>
                <time
                  dateTime={article.created_at}
                  className="text-xs text-muted tracking-wide"
                >
                  {formatDate(article.created_at)}
                </time>
              </header>

              <div
                className="blog-body prose prose-sm max-w-none
                  prose-headings:font-serif prose-headings:font-semibold prose-headings:text-ntext
                  prose-p:text-ntext/80 prose-p:leading-relaxed
                  prose-a:text-ntext prose-a:underline prose-a:underline-offset-4
                  prose-code:text-ntext prose-code:bg-parchment prose-code:px-1.5 prose-code:py-0.5 prose-code:text-xs prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-ntext prose-pre:text-cream
                  prose-blockquote:border-l-ntext prose-blockquote:text-muted
                  prose-strong:text-ntext
                  prose-hr:border-warm
                  prose-li:text-ntext/80"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }}
              />
            </motion.article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
