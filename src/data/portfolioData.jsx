import {
  GithubIcon, Linkedin01Icon, Mail01Icon, LeetcodeIcon
} from 'hugeicons-react';

import profileImage from '../assets/profile2.png';
import profileVideo from '../assets/profile-video.webm';
import cvFile from '../assets/CV/MOVEIN_CV.pdf';
import ecoSortImg from '../assets/Project1EcoSort.png';
import dataQueryImg from '../assets/Project2DataQueryPro.png';
import funnelChurnImg from '../assets/Project3FunnelandChurnAnalysis.png';

export const portfolioData = {
  hero: {
    name: "Aniket Bajpai",
    title: "Full Stack Developer",
    pronunciation: " ah-nee-ket ",
    roles: ["Full Stack Developer", "AI/ML Enthusiast"],
    description: [
      "Building high-performance, intelligent digital experiences with modern web technologies and AI. Passionate about problem-solving and writing clean, scalable code."
    ],
    profileImage: profileImage,
    profileVideo: profileVideo,
    cvLink: cvFile,
    socials: [
      { name: "Email", icon: Mail01Icon, link: "mailto:aniketbajpai230@gmail.com", tag: "aniketbajpai230" },
      { name: "GitHub", icon: GithubIcon, link: "https://github.com/AniketB26", tag: "AniketB26" },
      { name: "LinkedIn", icon: Linkedin01Icon, link: "https://www.linkedin.com/in/aniket-bajpai", tag: "aniket-bajpai" },
      { name: "LeetCode", icon: LeetcodeIcon, link: "https://leetcode.com/u/aniketbajpai230/", tag: "aniketbajpai230" },
    ]
  },

  aboutMe: {
    summary: "Hey, I'm Aniket.\n\nI like building stuff that actually does something — not just projects that sit in a folder. Most of the time you'll find me either coding, debugging something that should have worked, or going down random tech rabbit holes at 2 AM because I got curious about how something works. I'm into full-stack development, but I don't like limiting myself to just one thing. If something looks interesting — AI, backend systems, new tools — I'll probably try it just to see what I can build with it. I enjoy that phase where things don't make sense at first, and then suddenly everything clicks. I also like solving problems for the sake of it. Sometimes it's a real project, sometimes it's just me vs a bug or a tricky question — either way, I'm in. I wouldn't say I know everything (not even close), but I'm someone who will sit with a problem longer than most until it makes sense. That's kind of my thing.",
    education: [
      {
        degree: "B.Tech – Computer Science & Engineering",
        institution: "Lovely Professional University, Phagwara",
        period: "Aug 2023 – Present",
        grade: "CGPA: 8.11"
      },
      {
        degree: "Intermediate (PCM)",
        institution: "K.V No.1 AFS, Pathankot",
        period: "Mar 2021 – May 2022",
        grade: "82.5%"
      },
      {
        degree: "Matriculation",
        institution: "K.V No.1 AFS, Pathankot",
        period: "Mar 2019 – May 2020",
        grade: "80.6%"
      }
    ],
    location: "Phagwara, Punjab, India"
  },

  projects: [
    {
      id: 'ecosort',
      slug: 'ecosort',
      title: 'EcoSort',
      description: 'AI-Powered Waste Classification System',
      fullDescription: 'EcoSort is an AI-driven waste classification system that categorizes waste into Organic, Recyclable, or Hazardous using advanced image processing and confidence scoring. Built with a modern React frontend featuring rich animations and an intuitive user interface, it helps promote sustainable waste management practices.',
      features: [
        'AI Classification: Categorizes waste into Organic, Recyclable, or Hazardous',
        'Confidence Scoring: Provides accuracy confidence for each classification',
        'Image Processing: Advanced image analysis for waste identification',
        'Modern UI: Built with React 19 and Framer Motion for smooth interactions',
        'Responsive Design: Fully optimized for all device sizes'
      ],
      techStack: ['React 19', 'Vite 7', 'Tailwind CSS', 'Framer Motion', 'Context API'],
      link: 'https://github.com/AniketB26/EcoSort',
      year: '2026',
      image: ecoSortImg,
      category: 'Web Projects',
    },
    {
      id: 'dataquery-pro',
      slug: 'dataquery-pro',
      title: 'DataQuery Pro',
      description: 'Natural Language Data Query Engine',
      fullDescription: 'DataQuery Pro is an AI-powered data assistant that lets users query SQL, MongoDB, and file-based databases using natural conversational English. It leverages Groq LLaMA 3.3 70B to translate human queries into database operations, and features a comprehensive analytics engine for advanced data manipulation and insights.',
      features: [
        'Natural Language Queries: Ask questions in plain English to query databases',
        'Multi-Database Support: Works with SQL, MongoDB, CSV, and Excel files',
        'AI Analytics Engine: Advanced statistical analysis and data transformation',
        'Real-time Processing: Instant query results with visual feedback',
        'Secure Authentication: JWT-based user authentication system'
      ],
      techStack: ['React', 'Node.js', 'Express', 'Groq LLaMA 3.3', 'MongoDB Atlas', 'JWT'],
      link: 'https://github.com/AniketB26/DataQueryPro',
      year: '2026',
      image: dataQueryImg,
      category: 'Web Projects',
    },
    {
      id: 'funnel-churn-analysis',
      slug: 'funnel-churn-analysis',
      title: 'Funnel & Churn Analysis',
      description: 'Business Analysis for Mobile Games',
      fullDescription: 'A comprehensive business analyst project focused on funnel and churn analysis for mobile games. This project involves analyzing user behavior through conversion funnels, identifying churn patterns, and deriving actionable insights to improve user retention and monetization strategies in the mobile gaming industry.',
      features: [
        'Funnel Analysis: Track user journey from install to conversion',
        'Churn Prediction: Identify patterns leading to user drop-off',
        'Retention Metrics: Analyze DAU, MAU, and cohort-based retention',
        'Data Visualization: Interactive charts and dashboards for insights',
        'Actionable Insights: Business recommendations based on data patterns'
      ],
      techStack: ['Python', 'Pandas', 'Data Analysis', 'Visualization', 'Excel'],
      link: 'https://github.com/AniketB26/Funnel-and-churn-analysis-for-mobile-games',
      year: '2025',
      image: funnelChurnImg,
      category: 'BA Projects',
    },
  ],

  experience: [
    {
      role: 'DSA Training – Intensive Program',
      company: 'Self / LeetCode',
      period: 'Jun 2025 – Jul 2025',
      description: 'Focused implementation training on arrays, linked lists, stacks, queues, trees, and graphs. Practiced extensively on LeetCode, solving 221+ problems including 12 Hard-level problems.',
      technologies: ['Java', 'C++', 'Data Structures', 'Algorithms']
    },
  ],

  certifications: [
    {
      title: 'Computational Theory: Language Principle & Finite Automata Theory',
      issuer: 'Infosys Springboard',
      date: 'Dec 2025',
    },
    {
      title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
      issuer: 'Infosys Springboard',
      date: 'Aug 2025',
    },
    {
      title: 'Master Generative AI & Generative AI tools (ChatGPT & more)',
      issuer: 'Infosys Springboard',
      date: 'Aug 2025',
    },
    {
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      issuer: 'Infosys Springboard',
      date: 'Aug 2025',
    },
    {
      title: 'Introduction to Hardware and Operating System',
      issuer: 'Coursera',
      date: 'Sep 2024',
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Coursera',
      date: 'Sep 2024',
    },
  ],

  competitiveProgramming: {
    leetcode: {
      problemsSolved: 221,
      easy: 105,
      medium: 104,
      hard: 12,
      contestRating: 1440,
      profileUrl: 'https://leetcode.com/u/aniketbajpai230/',
    },
    practiceProfiles: [
      {
        id: 'leetcode',
        name: 'LeetCode',
        url: 'https://leetcode.com/u/aniketbajpai230/',
        username: '@aniketbajpai230',
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
        gradient: 'from-amber-500/5',
        stats: [
          { label: 'Total Solved', value: '221', color: 'text-foreground' },
          { label: 'Easy', value: '105', color: 'text-emerald-500' },
          { label: 'Medium', value: '104', color: 'text-amber-500' },
          { label: 'Hard', value: '12', color: 'text-red-500' }
        ],
        footerLabel: 'Contest Rating',
        footerValue: '1440'
      },
      {
        id: 'stratascratch',
        name: 'StrataScratch',
        url: 'https://platform.stratascratch.com/user/anniket',
        username: '@anniket',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        gradient: 'from-blue-500/5',
        stats: [
          { label: 'Focus', value: 'SQL', color: 'text-foreground' },
          { label: 'Role', value: 'Data Science', color: 'text-emerald-500' }
        ],
        footerLabel: 'Profile',
        footerValue: 'Active'
      },
      {
        id: 'gfg',
        name: 'GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/profile/aniketbay4wm',
        username: '@aniketbay4wm',
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        gradient: 'from-green-500/5',
        stats: [
          { label: 'Total Solved', value: 'Active', color: 'text-foreground' },
          { label: 'Focus', value: 'DSA', color: 'text-green-500' }
        ],
        footerLabel: 'Coding Score',
        footerValue: 'Continuous'
      },
      {
        id: 'tuf',
        name: 'Take U Forward',
        url: 'https://takeuforward.org/profile/aniketbajpai',
        username: '@aniketbajpai',
        color: 'text-red-500',
        bg: 'bg-red-500/10',
        gradient: 'from-red-500/5',
        stats: [
          { label: 'Preparation', value: 'SDE', color: 'text-foreground' },
          { label: 'Focus', value: 'Algorithms', color: 'text-red-500' }
        ],
        footerLabel: 'Status',
        footerValue: 'Practicing'
      }
    ],
    totalProblemsSolved: '300+',
    platforms: ['LeetCode', 'GeeksforGeeks', 'HackerRank', 'StrataScratch', 'Take U Forward'],
    achievements: [
      'Solved 300+ problems across multiple platforms',
      'LeetCode Contest Rating: 1,440',
      '858+ GitHub contributions',
      'Selected for specialized PEP (Professional Enhancement Program) classes'
    ]
  },

  researchPublication: {
    hasPublications: false,
    note: 'Research work in progress — stay tuned for upcoming publications.'
  },

  //custom svg from folder public/images/icons
  skills: [
    { name: 'Java', Icon: '/images/icons/JavaScript.svg' },
    { name: 'Python', Icon: '/images/icons/Python.svg' },
    { name: 'JavaScript', Icon: '/images/icons/JavaScript.svg' },
    { name: 'C++', Icon: '/images/icons/C++.svg' },
    { name: 'React', Icon: '/images/icons/React.svg' },
    { name: 'Node', Icon: '/images/icons/Node.js.svg' },
    { name: 'Tailwind', Icon: '/images/icons/Tailwind CSS.svg' },
    { name: 'MongoDB', Icon: '/images/icons/MongoDB.svg' },
    { name: 'SQL', Icon: '/images/icons/SQL Developer.svg' },
    { name: 'Git', Icon: '/images/icons/Git.svg' },
    { name: 'CSS', Icon: '/images/icons/CSS3.svg' },
    { name: 'Docker', Icon: '/images/icons/Docker.svg' },
    { name: 'Postman', Icon: '/images/icons/Postman.svg' },
    { name: 'AWS', Icon: '/images/icons/AWS.svg' },
  ],
  footer: {
    year: new Date().getFullYear(),
    text: "All rights reserved",
    love: "Built with ❤︎ by Aniket Bajpai"
  }
};
