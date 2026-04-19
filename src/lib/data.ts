import GeminiColor from '@lobehub/icons/es/Gemini/components/Color';
import { Profile } from '../types';

export const profileData: Profile = {
  name: 'Sanshiro Hikawa',
  title: 'Full-stack Engineer / AI Integration',
  tagline: {
    line1: '営業から、エンジニアへ。',
    line2: 'そして、AIと共に作る側へ。',
    line3: '人と技術の間をつなぐ、フルスタックエンジニア。',
  },
  heroLead:
    '熊本の通信会社で営業として働いた後、上京してエンジニアに転向。現在は実務でフロントエンドとバックエンドを横断し、副業では企業のAI導入支援を担当。事業の言葉を技術の言葉に翻訳しながら、使われるプロダクトを作っています。',
  introduction: '',
  skills: [
    {
      name: 'React',
      level: '業務で4年以上使用',
      category: 'frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'TypeScript',
      level: '業務で2年以上使用',
      category: 'frontend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'Tailwind CSS',
      level: '業務で4年以上使用',
      category: 'frontend',
      icon: '/images/tailwindcss-icon.png'
    },
    {
      name: 'Next.js',
      level: '業務で2年以上使用',
      category: 'frontend',
      icon: '/images/nextjs-icon.svg'
    },
    {
      name: 'NestJS',
      level: '業務で1年使用',
      category: 'backend',
      icon: '/images/nestjs-icon.svg'
    },
    {
      name: 'Python',
      level: '業務で3年以上使用',
      category: 'backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'PostgreSQL',
      level: '業務で2年使用',
      category: 'backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'MySQL',
      level: '業務で1年使用',
      category: 'backend',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'AWS',
      level: '業務で1年使用',
      category: 'database',
      icon: '/images/aws-icon.svg'
    },
    {
      name: 'Firebase',
      level: '業務で1年使用',
      category: 'database',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    {
      name: 'Vercel',
      level: '個人開発で3年使用',
      category: 'database',
      icon: '/images/vercel-icon.svg'
    },
    {
      name: 'Supabase',
      level: '個人開発で2年使用',
      category: 'database',
      icon: '/images/supabase-icon.svg'
    },
    {
      name: 'Git / GitHub / GitLab',
      level: '業務・個人開発で4年以上使用',
      category: 'tool',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'Prisma',
      level: '業務で1年以上使用',
      category: 'tool',
      icon: '/images/prisma-icon.svg'
    },
    {
      name: 'Playwright',
      level: '業務で1年使用',
      category: 'tool',
      icon: '/images/playwright-icon.svg'
    },
    {
      name: 'Docker',
      level: '業務で3年使用',
      category: 'tool',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'Claude Code',
      level: '業務・個人開発で日常利用',
      category: 'ai',
      icon: 'https://cdn.simpleicons.org/claude'
    },
    {
      name: 'Gemini',
      level: '業務・個人開発で利用',
      category: 'ai',
      iconComponent: GeminiColor
    },
    {
      name: 'GitHub Copilot',
      level: '業務で日常利用',
      category: 'ai',
      icon: 'https://cdn.simpleicons.org/githubcopilot'
    },
    {
      name: 'Genspark',
      level: '副業（AI導入支援）で利用',
      category: 'ai',
      icon: 'https://cdn.simpleicons.org/genspark'
    },
  ],
  experience: [
    {
      title: 'カスハラ対策 SaaS ＋ 認証基盤の自社開発',
      industry: 'カスハラ対策 SaaS / 認証基盤',
      role: 'プロジェクトリーダー（PL / チーム 3名）',
      period: '2025.10 — 現在',
      stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'AWS Cognito'],
      summary:
        'カスタマーハラスメント対策 SaaS と認証基盤の自社開発に PL として参画。要件未定義・開発環境ゼロの立ち上げ状態から、要件整理・進捗管理・リソース管理・報告業務・急な仕様変更への対応まで推進。並行して React + FastAPI での実装、テスト、AWS へのデプロイ、Cognito を用いた認証機能の構築も担当し、チーム 3 名でリリースまで走り切った。',
    },
    {
      title: '社内データポータルサイト開発（受託）',
      industry: '受託開発 / BtoB',
      role: 'フロント・バックエンド（PG / 4名チーム）',
      period: '2025.01 — 2025.09',
      stack: ['Next.js', 'TypeScript', 'NestJS', 'GraphQL', 'Prisma', 'PostgreSQL'],
      summary:
        '社内データ活用を目的としたポータルサイトをフロントエンド・バックエンド横断で担当。Next.js + GraphQL で BFF を構築し、NestJS + gRPC によるマイクロサービス間通信と BullMQ を用いた通知処理を実装。ドメイン駆動設計でバックエンドを整え、Jest / Playwright でユニット・E2E テストも整備。',
    },
    {
      title: 'アレルギー管理 Web アプリケーション開発',
      industry: '学校給食 / ヘルスケア',
      role: 'テックリード（TL / 7名チーム）',
      period: '2022.12 — 2024.12',
      stack: ['React', 'JavaScript', 'MUI', 'FastAPI', 'Python', 'MySQL'],
      summary:
        '学校給食向けアレルギー管理 SaaS の新規機能追加と保守を担当。React + MUI + zustand でフロント、FastAPI で API エンドポイントを実装。テックリードとしてスクラム運営・タスク管理・コードレビュー・進捗報告を主導し、チーム 7 名の開発を牽引した。',
    },
  ],
  aiServices: [
    {
      title: 'Genspark / Manus 使い方解説スライド',
      status: 'delivered',
      summary:
        '業務で AI エージェントを活用し始める企業向けに、Genspark と Manus の基本操作から実用的なユースケースまでを、迷わず読めるスライドとして納品。',
      keywords: ['AI Agent', 'Genspark', 'Manus', 'Enablement'],
    },
    {
      title: 'AI 導入のセキュリティリスク解説スライド',
      status: 'delivered',
      summary:
        '企業が生成 AI を導入する際に最低限押さえておきたい情報漏洩・プロンプトリスク・ログ管理・運用ルールを整理した意思決定用スライドを納品。',
      keywords: ['AI Security', 'Governance', 'Risk Management'],
    },
    {
      title: '看護師・介護士向けシフト生成 Gem',
      status: 'in_progress',
      summary:
        '現場の制約（夜勤回数・スキル・希望休）を満たすシフトを自動生成する Gem を開発中。プロンプト設計と制約条件の言語化を担当。',
      keywords: ['LLM', 'Scheduling', 'Healthcare', 'Prompting'],
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Kikara 公式HP',
      description:
        '母が経営する会社の公式サイトを制作。ブランドトーンに合う配色・フォント選定から Figma でのワイヤーフレーム、実装まで一貫して担当。',
      thumbnail: '/images/project1-1.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
      duration: '約1年',
      role: '個人開発',
      category: 'web',
      type: 'portfolio',
      demoUrl: 'https://kikara-official.vercel.app/',
      githubUrl: 'https://github.com/sanpicule/KikaraHP/',
      screenshots: [],
      challenge: '',
      solution: '',
      learnings: [],
      client: 'Kikara',
    },
    {
      id: '2',
      title: 'Tiny Post',
      description:
        'Kikara 公式HP 向けの簡易 CMS。60歳の母でも迷わず記事投稿できるよう、ミニマムな UI と Google 認証で設計。',
      thumbnail: '/images/project2-1.png',
      technologies: ['React', 'Tailwind CSS', 'Supabase', 'Figma'],
      duration: '6ヶ月',
      role: 'フロントエンド / デザイン',
      category: 'web',
      type: 'portfolio',
      demoUrl: 'https://tinypost-three.vercel.app/',
      githubUrl: 'https://github.com/sanpicule/Tinypost',
      screenshots: [],
      challenge: '',
      solution: '',
      learnings: [],
      client: '個人開発',
    },
    {
      id: '3',
      title: 'Shiftme',
      description:
        '月収・ボーナス・固定支出を管理し、貯金目標までの進捗を可視化する PWA。AI 支援の開発環境（Bolt.new）で短期リリースを実現。',
      thumbnail: '/images/project3-1.png',
      technologies: ['React', 'TypeScript', 'Supabase', 'Vite', 'PWA'],
      duration: '3ヶ月',
      role: '個人開発（フルスタック）',
      category: 'web',
      type: 'portfolio',
      demoUrl: 'https://shiftme.vercel.app/',
      githubUrl: 'https://github.com/sanpicule/shiftme',
      screenshots: [],
      challenge: '',
      solution: '',
      learnings: [],
      client: '個人開発',
    },
  ],
  contact: {
    email: 'sannsi4444@gmail.com',
    github: 'https://github.com/sanpicule',
    twitter: 'https://twitter.com/SanpiTech240',
    instagram: 'https://instagram.com/sanp___ery'
  },
  about: {
    description:
      '大学卒業後、熊本の通信会社に新卒で営業職として入社。営業を通じて「良いサービスだから売れる」のではなく、お客様に必要性を理解してもらうことで初めて価値が生まれるという実感を得た。その経験から "本当に良いサービスを自分で作りたい" という思いが強くなり、独学でプログラミングを学び始める。その後スキルを深めるために上京し、エンジニアへキャリアチェンジ。現在は実務でフロントエンド・バックエンドを横断しながら、副業では企業の AI 導入支援にも取り組んでいる。',
    workHistory: [
      {
        company: '株式会社 Gizumo',
        position: 'エンジニア',
        period: '2022年8月 — 現在',
        description: 'フロントエンド / バックエンド開発。案件ベースで複数プロジェクトを横断。'
      },
      {
        company: '株式会社 J:COM',
        position: '営業',
        period: '2020年4月 — 2022年7月',
        description: '新規開拓営業。'
      },
      {
        company: '熊本大学 工学部 数理工学科',
        position: '卒業',
        period: '2015年4月 — 2020年3月',
        description: ''
      }
    ],
    education: [],
    achievements: [],
  }
};
