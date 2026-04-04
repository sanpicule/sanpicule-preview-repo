import { useState, useEffect } from 'react';
import { Article } from '../types';
import { fetchArticles } from '../lib/api';

interface UseArticlesResult {
  articles: Article[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useArticles = (): UseArticlesResult => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchArticles();
        if (!cancelled) setArticles(data);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : '不明なエラー');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [trigger]);

  const refetch = () => setTrigger(t => t + 1);

  return { articles, loading, error, refetch };
};
