import { Profile } from '../types';

export const profileData: Profile = {
  name: 'SanshiroHikawa',
  title: 'Frontend: 4years / Backend: 2years',
  introduction: '',
  skills: [
    // フロントエンド
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
    
    // バックエンド
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

    // クラウドサービス
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


    
    // ツール
    {
      name: 'Git/GitHub/GitLab',
      level: '業務/個人開発で4年以上使用',
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
  ],
  projects: [
    {
      id: '1',
      title: 'Kikara 公式HP',
      description: 'Kikaraは、私の母が経営する、お客様の健康を考えた取り組みを行なっている会社です。知り合いに作って貰ったHPが気に入ってないということを知り、初めてHP制作に挑戦しました。私一人ではなく、知り合い数人と共同開発しています。お店のコンセプトに合う色味やフォント選び、Figmaでのワイヤーフレーム作成に苦労しました。',
      thumbnail: '/images/project1-1.png',
      technologies: ['NextJS', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma', 'React Hook Form'],
      duration: '約1年',
      role: '個人開発',
      category: 'web',
      type: 'portfolio',
      demoUrl: 'https://kikara-official.vercel.app/',
      githubUrl: 'https://github.com/sanpicule/KikaraHP/',
      screenshots: [
        {
          src: '/images/project1-1.png',
          comment: 'Next.jsとTailwind CSSを使用したレスポンシブデザインのホームページ。Framer Motionで滑らかなアニメーションを実装。',
          icon: '/images/motion_icon.png'
        },
        {
          src: '/images/project1-2.png',
          comment: 'Figmaでデザインしたワイヤーフレームとプロトタイプ。ユーザビリティを考慮した直感的なUIを設計。レスポンシブデザインを実装。',
          icon: '/images/figma_icon.png'
        },
        {
          src: '/images/project1-3.png',
          comment: 'ReactHookFormを使用したお問い合わせフォーム。バリデーションとユーザーフィードバックを実装し、使いやすさを向上。',
          icon: '/images/react-hook-form_icon.png'
        }
      ],
      challenge: 'API連携とレスポンシブデザインの実装',
      solution: 'カスタムフックとエラーハンドリングの実装',
      learnings: ['API設計', 'エラーハンドリング', 'レスポンシブデザイン'],
      client: 'Kikara',
      resultsDescription: 'サイト公開後、ユーザーは店舗を訪れる前にウェブ上で強いブランド体験を得られるようになり、問い合わせ数が増加。オーナーからも「自分たちのイメージ通り」との好評を頂きました。',
      resultItems: [
        { label: 'Success', sublabel: 'PROJECT LAUNCH' },
        { label: 'Smooth', sublabel: 'USER EXPERIENCE' },
        { label: 'Modern', sublabel: 'DESIGN SYSTEM' },
        { label: 'High', sublabel: 'ACCESSIBILITY' },
      ],
    },
    {
      id: '2',
      title: 'Tiny Post',
      description: 'Kikara公式HPの簡易的なCMSとして「Tiny Post」を開発。私の母がHPにお知らせを投稿できるようにするために開発。母（60歳）でも使いやすく直感的にわかるデザインに工夫しました。',
      thumbnail: '/images/project2-1.png',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Supabase', 'Figma'],
      duration: '6ヶ月',
      role: 'フロントエンド開発・デザイン',
      category: 'web',
      type: 'portfolio',
      demoUrl: 'https://tinypost-three.vercel.app/',
      githubUrl: 'https://github.com/sanpicule/Tinypost',
      screenshots: [
        {
          src: '/images/project2-1.png',
          comment: 'BaaSであるSupabaseを活用したGoogle認証によるログイン機能を実装。メールアドレスやパスワードを忘れやすい母にとっては最適な選択だと感じた。',
          icon: '/images/google-icon.png'
        },
        {
          src: '/images/project2-2.png',
          comment: 'React Hook Formを使用した記事作成・編集画面。バリデーションとユーザーフィードバックを実装し、使いやすさを向上。公開非公開機能をつけることで、一時編集や投稿の作りダメができるよう設計。今後は、予約投稿などできるように改良予定',
          icon: '/images/react-hook-form_icon.png'
        },
        {
          src: '/images/project2-3.png',
          comment: 'アプリケーション内にプレビュー画面を設けることで公開前に、見栄えを確認できるように工夫。Supabaseのストレージ機能を使って画像のアップロードを実現しています。また、プロフィール画像の編集もできますが、それもSupabaseのストレージに保存しています。',
          icon: '/images/supabase-icon.svg'
        },
      ],
      challenge: '美しいアニメーションとレスポンシブデザインの実現',
      solution: 'Tailwind CSSとCSSアニメーションの組み合わせ',
      learnings: ['アニメーション実装', 'SEO最適化', 'パフォーマンス改善'],
      client: '個人開発',
      resultsDescription: '直感的なUIにより、PCに不慣れな60歳のユーザーでもスムーズに記事投稿が可能に。Supabaseを活用した認証・ストレージ機能で、セキュアかつ使いやすいCMSを実現しました。',
      resultItems: [
        { label: 'Simple', sublabel: 'UX DESIGN' },
        { label: 'Secure', sublabel: 'AUTHENTICATION' },
        { label: 'Smooth', sublabel: 'EDITOR EXPERIENCE' },
        { label: 'Fast', sublabel: 'CONTENT DELIVERY' },
      ],
    },
    {
      id: '3',
      title: 'Shiftme',
      description: 'ShiftmeはBolt.newというAIエージェントが導入された開発プラットフォームでバイブコーディングで作成。Supabase、Netlifyとの連携が可能（Vercelでデプロイしました）。月収・ボーナス・固定支出を管理し、貯金目標までの進捗を可視化するアプリ。React + Supabase + Tailwind CSSで実装。支出の日別記録、月別予算分析、PWA対応でモバイルアプリのような体験を実現しました。',
      thumbnail: '/images/project3-1.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite', 'React Hook Form', 'Lucide React', 'date-fns'],
      duration: '3ヶ月',
      role: '個人開発（フルスタック）',
      category: 'web',
      type: 'portfolio',
      demoUrl: 'https://shiftme.vercel.app/',
      githubUrl: 'https://github.com/sanpicule/shiftme',
      screenshots: [
        {
          src: '/images/project3-1.png',
          comment: 'ダッシュボード画面。月の予算残額と貯金目標の進捗率を一目で確認可能。',
          icon: '/images/boltnew-icon.png'
        },
        { src: '/images/project3-2.png', comment: '支出管理画面。カレンダービューで日別支出を追跡。' },
        { src: '/images/project3-3.png', comment: '分析ページ。月別支出グラフと貯金目標への到達ペースを表示。' },
      ],
      challenge: '複雑な予算計算ロジックとリアルタイムデータ同期、PWA対応によるオフライン機能の実装',
      solution: 'カスタムフックによる状態管理の一元化、Supabaseの行レベルセキュリティで多要素データの安全性確保、service workerでオフライン対応',
      learnings: ['Supabaseのセキュリティ設計', '複雑な財務計算ロジック', 'PWA・オフライン機能', 'レスポンシブデザイン実装'],
      client: '個人開発',
      resultsDescription: 'バイブコーディングにより短期間でのリリースを実現。PWA対応でモバイルアプリのような体験を提供し、日々の支出管理を手軽に行える環境を構築しました。',
      resultItems: [
        { label: 'Fast', sublabel: 'VIBE CODING' },
        { label: 'PWA', sublabel: 'OFFLINE SUPPORT' },
        { label: 'Visual', sublabel: 'BUDGET CHARTS' },
        { label: 'Secure', sublabel: 'ROW LEVEL SECURITY' },
      ],
    }
  ],
  contact: {
    email: 'sannsi4444@gmail.com',
    github: 'https://github.com/sanpicule',
    twitter: 'https://twitter.com/SanpiTech240',
    instagram: 'https://instagram.com/sanp___ery'
  },
  about: {
    description: '大学卒業後、接客のアルバイト経験を活かすために、熊本の通信会社へ新卒で営業職として入社。営業を通じて、「良いサービスだから売れる」のではなく、お客様に必要性を理解してもらうことで初めて価値が生まれるということを実感。この経験から、"本当に良いサービスを自ら生み出したい" という思いが強まり、独学でプログラミングを学び始める。その後、スキルを深めるために上京し、エンジニアへキャリアチェンジ。現在はエンジニアとしての経験を活かし、プロダクトマネジメントにも関心を持ちながら、現場ではリーダーとしてチームを牽引。社内のPMセミナーへの参加など、プロダクトづくり全体への理解も広げている。',
    workHistory: [
      {
        company: '株式会社Gizumo',
        position: 'エンジニア',
        period: '2022年8月 - 現在',
        description: 'フロントエンド / バックエンド開発。'
      },
      {
        company: '株式会社J:COM',
        position: '営業',
        period: '2020年4月 - 2022年7月',
        description: '新規開拓営業。'
      },
      {
        company: '熊本大学卒業',
        position: '工学部 数理工学科',
        period: '2015年4月 - 2020年3月',
        description: '数理工学科卒業。'
      }
    ],
    education: [],
    achievements: [],
  }
};
