import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import bundled from '@/data/zenn-articles.json';
import type { ZennArticle } from '@/types';

const ZENN_USERNAME = 'sanpi34';
const TOP_N = 5;
const REVALIDATE_URL = `https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest&count=48`;

const formatDate = (s: string): string => {
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.');
};

const Blog = () => {
  const [articles, setArticles] = useState<ZennArticle[]>(bundled as ZennArticle[]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(REVALIDATE_URL);
        if (!res.ok) return;
        const data = await res.json();
        const fresh: ZennArticle[] = (data.articles ?? [])
          .map((a: {
            id: number;
            slug: string;
            title: string;
            emoji: string | null;
            article_type: 'tech' | 'idea';
            published_at: string;
            liked_count: number;
            path: string;
          }) => ({
            id: a.id,
            slug: a.slug,
            title: a.title,
            emoji: a.emoji ?? '📝',
            articleType: a.article_type,
            publishedAt: a.published_at,
            likedCount: a.liked_count ?? 0,
            url: `https://zenn.dev${a.path}`,
          }))
          .sort((a: ZennArticle, b: ZennArticle) => b.likedCount - a.likedCount)
          .slice(0, TOP_N);
        if (cancelled || fresh.length === 0) return;
        const head = articles[0]?.id;
        if (fresh[0].id !== head || fresh.length !== articles.length) {
          setArticles(fresh);
        }
      } catch {
        // Silent: keep bundled snapshot if revalidation fails.
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="blog" className="section-padding bg-parchment border-t border-warm">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">06 / Notes</p>
            <h2 className="font-serif font-semibold text-ntext text-3xl md:text-4xl leading-tight">
              Articles
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm text-muted leading-[1.95] max-w-xl">
              Zenn で技術記事を発信しています。記事タイトルをクリックすると Zenn で開きます。
            </p>
          </div>
        </div>

        {articles.length === 0 ? (
          <p className="text-xs text-muted border-t border-warm py-6">
            まだ記事がありません。<a className="underline" href={`https://zenn.dev/${ZENN_USERNAME}`} target="_blank" rel="noopener noreferrer">Zenn を見る</a>
          </p>
        ) : (
          <motion.ul
            className="border-t border-warm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          >
            {articles.map((a) => (
              <motion.li
                key={a.id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
                }}
                className="border-b border-warm"
              >
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full py-6 flex items-start justify-between gap-4 md:gap-6 text-left"
                >
                  <div className="flex items-start gap-4 md:gap-6 flex-1 min-w-0">
                    <span aria-hidden className="text-xl md:text-2xl flex-shrink-0 leading-none pt-0.5">
                      {a.emoji}
                    </span>
                    <time
                      dateTime={a.publishedAt}
                      className="hidden md:block text-[11px] text-muted tracking-wider flex-shrink-0 w-24 pt-1"
                    >
                      {formatDate(a.publishedAt)}
                    </time>
                    <p className="text-sm text-ntext leading-relaxed group-hover:text-muted transition-colors break-words">
                      {a.title}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted group-hover:text-ntext group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}

        <div className="mt-10 flex justify-end">
          <a
            href={`https://zenn.dev/${ZENN_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-muted hover:text-ntext transition-colors"
          >
            View all on Zenn
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
