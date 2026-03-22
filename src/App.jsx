import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import RootLayout from './components/Layout/RootLayout';
import SignatureLoader from './components/SignatureLoader';
import CommandPalette from './components/CommandPalette';
const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const PracticePage = lazy(() => import('./pages/Practice'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {isLoading && <SignatureLoader key="loader" />}
      </AnimatePresence>
      <CommandPalette />

      <RootLayout>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/practice" element={<PracticePage />} />
          </Routes>
        </Suspense>
      </RootLayout>
      <Analytics />
    </BrowserRouter>
  );
}
