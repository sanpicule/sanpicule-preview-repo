import { Article } from '../types';

const BASE_URL = '/api/tinypost';

const getApiKey = (): string => {
  const key = import.meta.env.VITE_TINYPOST_API_KEY;
  if (!key) throw new Error('VITE_TINYPOST_API_KEY が設定されていません');
  return key;
};

interface ArticlesResponse {
  data: Article[];
  count: number;
}

interface ArticleResponse {
  data: Article;
}

export const fetchArticles = async (): Promise<Article[]> => {
  const res = await fetch(`${BASE_URL}/articles`, {
    headers: { 'x-api-key': getApiKey() },
  });
  if (!res.ok) throw new Error(`記事の取得に失敗しました: ${res.status}`);
  const json: ArticlesResponse = await res.json();
  return json.data;
};

export const fetchArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`${BASE_URL}/articles/${id}`, {
    headers: { 'x-api-key': getApiKey() },
  });
  if (res.status === 404) throw new Error('記事が見つかりません');
  if (!res.ok) throw new Error(`記事の取得に失敗しました: ${res.status}`);
  const json: ArticleResponse = await res.json();
  return json.data;
};


