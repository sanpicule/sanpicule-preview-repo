#!/usr/bin/env node
import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const USERNAME = 'sanpi34';
const COUNT = 12;
const OUTPUT = fileURLToPath(new URL('../src/data/zenn-articles.json', import.meta.url));

async function readExisting() {
  try {
    const raw = await readFile(OUTPUT, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function main() {
  const url = `https://zenn.dev/api/articles?username=${USERNAME}&order=latest&count=${COUNT}`;
  let articles;
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'sanshiro-portfolio-build/1.0 (+https://github.com/sanpicule)' },
    });
    if (!res.ok) throw new Error(`Zenn API responded ${res.status}`);
    const data = await res.json();
    articles = (data.articles ?? []).map((a) => ({
      id: a.id,
      slug: a.slug,
      title: a.title,
      emoji: a.emoji ?? '📝',
      articleType: a.article_type,
      publishedAt: a.published_at,
      likedCount: a.liked_count ?? 0,
      url: `https://zenn.dev${a.path}`,
    }));
  } catch (err) {
    const existing = await readExisting();
    console.warn(`[zenn] fetch failed (${err.message}). Keeping existing snapshot of ${existing.length} articles.`);
    if (existing.length === 0) {
      await mkdir(dirname(OUTPUT), { recursive: true });
      await writeFile(OUTPUT, '[]\n');
    }
    return;
  }

  await mkdir(dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, JSON.stringify(articles, null, 2) + '\n');
  console.log(`[zenn] wrote ${articles.length} articles → src/data/zenn-articles.json`);
}

main();
