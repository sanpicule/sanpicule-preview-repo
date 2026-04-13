# ブログ詳細ページ デザイン仕様

## 概要

ブログ詳細ページ（`/blog/:id`）のデザイン。
読みやすさを最優先とし、白背景・黒文字で広い表示領域を確保する。

## デザイン方針

- **ページ背景**: 白（`#ffffff`）
- **文字色**: グレー/黒系（`text-gray-900`、`text-gray-700`）
- **最大幅**: `max-w-4xl`（約56rem）
- ヘッダー・フッターはサイト全体の共通ダークテーマを維持

## コンポーネント構成

### 外側コンテナ

```
bg-white text-gray-900
```

### 記事コンテンツエリア

内側の白背景ボックスは不要（ページ自体が白背景のため削除）。
記事本文は prose クラスで整形し、直接白背景に表示する。

#### prose スタイル

| 要素 | クラス |
|------|--------|
| 見出し | `prose-headings:text-gray-900` |
| 本文 | `prose-p:text-gray-700` |
| リスト | `prose-li:text-gray-700` |
| 引用 | `prose-blockquote:text-gray-500` |
| 太字 | `prose-strong:text-gray-900` |
| 区切り線 | `prose-hr:border-gray-200` |
| インラインコード | `prose-code:text-pink-600` / `prose-code:bg-gray-100` |
| コードブロック | `prose-pre:bg-gray-900` / `prose-pre:text-gray-100` |
| リンク | `prose-a:text-accent`（シアン `#00D4C8`） |

### 記事ヘッダー

| 要素 | クラス |
|------|--------|
| カテゴリラベル | `text-accent`（シアン） |
| タイトル | `text-gray-900` |
| 日付 | `text-muted`（`#7A8899`） |
| 区切り線 | `border-gray-200` |

### 戻るボタン

```
text-muted hover:text-gray-900
```

### ローディングスケルトン

```
bg-gray-200
```

## 改善履歴

| 日付 | 内容 |
|------|------|
| 2026-04-13 | 黒背景→白背景へ変更。内側ホワイトボックス削除。表示幅を `max-w-2xl` → `max-w-4xl` に拡大。 |
