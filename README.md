<div align="center">
  <h1>Aniket Bajpai | Portfolio</h1>
  <p><strong>A modern, highly interactive, and uniquely designed personal portfolio website showcasing creatively engineered web experiences. Built with an emphasis on "Cosmic Minimalism", smooth animations, and a focus on both aesthetics and performance.</strong></p>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-00d8ff?style=flat-square&logo=react&logoColor=black" alt="React 19" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" /></a>
    <a href="https://motion.dev/"><img src="https://img.shields.io/badge/Motion-12-FF0080?style=flat-square&logo=framer&logoColor=white" alt="Motion" /></a>
    <a href="https://github.com/AniketB26/Portfolio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License: MIT" /></a>
  </p>
</div>

<br />

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Getting Started](#️-getting-started)
- [📂 Project Structure](#-project-structure)
- [📄 License](#-license)

---

## 🚀 Features

- **Cosmic Minimalism Aesthetic:** A refined, sleek, and void-like design language offering an immersive deep-space vibe to users.
- **Advanced Animations:** Smooth transitions and spring physics using declarative Motion-based animations.
- **Native View Transitions:** Incorporates the native CSS View Transitions API for a seamless circular-reveal theme toggle (Dark/Light mode).
- **Command Palette:** A fully functional `Ctrl+K` / `Cmd+K` global command palette for lightning-fast, keyboard-first navigation across the entire portfolio.
- **Animated Gallery:** A vertical marquee gallery showcasing UI designs and captures with smooth scrolling and high-quality visuals.
- **Practice Platforms:** Dedicated showcase for competitive programming and data science practice profiles (LeetCode, StrataScratch, GFG, TUF).
- **Project Showcases:** Categorized displays for Web Projects and Business Analyst (BA) Projects with live deployment and source code links.
- **Accessible & Responsive:** Fully responsive layouts focusing on mobile-view porting without compromising features.

---

## 🛠️ Tech Stack

### Framework & Routing
- [**React 19**](https://react.dev/) - UI Library
- [**Vite**](https://vitejs.dev/) - Next Generation Frontend Tooling
- [**React Router DOM**](https://reactrouter.com/) - Declarative Routing

### Styling
- [**Tailwind CSS v4**](https://tailwindcss.com/) - Utility-first CSS framework
- **Vanilla CSS** - For core layout structures & complex CSS variables

### Animations
- [**Motion**](https://motion.dev/) - Fluid, spring-based component animation and lifecycle transitions.
- **CSS View Transitions API** - Native DOM transition handling.

### Assets & Optimization
- [**HugeIcons React**](https://hugeicons.com/) - Comprehensive premium icon library.
- [**Vercel Analytics**](https://vercel.com/analytics) - Privacy-friendly traffic insights.

---

## ⚙️ Getting Started

### Prerequisites

You will need [Node.js](https://nodejs.org/) installed on your machine (v18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AniketB26/Portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development

Start the Vite development server:

```bash
npm run dev
```

Your application will be available at [`http://localhost:5173`](http://localhost:5173).

---

## 📂 Project Structure

A brief overview of the top-level project architecture:

```text
/
├── public/                # Static graphical assets (favicons, og-images)
├── src/
│   ├── assets/            # Project-specific local assets (Images, PDFs, SVGs)
│   ├── components/        # Reusable UI components (Buttons, Modals, Sections)
│   │   ├── Layout/        # RootLayout and structural wrappers
│   │   └── ui/            # Granular base UI components
│   ├── data/              # Static content configurations and site data
│   ├── pages/             # Route-level components (Home, Projects, Practice)
│   ├── index.css          # Global stylesheet containing variables and core base setups
│   └── main.jsx           # React DOM entry point
├── vercel.json           # Vercel SPA routing configuration
├── package.json           # Dependencies and scripts
└── vite.config.js         # Build tool configuration
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). 
