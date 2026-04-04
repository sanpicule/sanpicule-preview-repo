import { useState, useEffect } from 'react';
import { Article } from '../types';
import { fetchArticle } from '../lib/api';

interface UseArticleResult {
  article: Article | null;
  loading: boolean;
  error: string | null;
}

export const useArticle = (id: string): UseArticleResult => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setArticle(null);

    fetchArticle(id)
      .then(data => { if (!cancelled) setArticle(data); })
      .catch(e => { if (!cancelled) setError(e instanceof Error ? e.message : '不明なエラー'); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [id]);

  return { article, loading, error };
};
