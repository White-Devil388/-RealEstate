import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLead } from '../context/LeadContext';

// Import Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import MediaPage from '../pages/MediaPage';
import BlogPage from '../pages/BlogPage';
import CareersPage from '../pages/CareersPage';
import ContactPage from '../pages/ContactPage';
import SiteVisitPage from '../pages/SiteVisitPage';
import LeadAdminPage from '../pages/LeadAdminPage';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import UserDashboardPage from '../pages/UserDashboardPage';
import ProtectedRoutes from './protectedRoutes';

// Helper component to sync route path with LeadContext and scroll to top
const RouteChangeHandler = () => {
  const location = useLocation();
  const { setCurrentPage } = useLead();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const path = location.pathname.replace('/', '') || 'home';
    if (path === 'home' || path === '') setCurrentPage('home');
    else if (path === 'about') setCurrentPage('about');
    else if (path === 'projects') setCurrentPage('projects');
    else if (path === 'media') setCurrentPage('media');
    else if (path === 'blog') setCurrentPage('blog');
    else if (path === 'careers') setCurrentPage('careers');
    else if (path === 'contact') setCurrentPage('contact');
    else if (path === 'site-visit') setCurrentPage('site-visit');
    else if (path === 'lead-admin' || path === 'admin') setCurrentPage('admin');
    else if (path === 'dashboard') setCurrentPage('dashboard');
  }, [location, setCurrentPage]);

  return null;
};

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
};

const AnimatedPage = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <RouteChangeHandler />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="/home" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
          <Route path="/media" element={<AnimatedPage><MediaPage /></AnimatedPage>} />
          <Route path="/blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
          <Route path="/careers" element={<AnimatedPage><CareersPage /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
          <Route path="/site-visit" element={<AnimatedPage><SiteVisitPage /></AnimatedPage>} />
          <Route path="/admin" element={<AnimatedPage><AdminDashboardPage /></AnimatedPage>} />
          <Route path="/lead-admin" element={<AnimatedPage><AdminDashboardPage /></AnimatedPage>} />
          <Route
            path="/dashboard"
            element={(
              <ProtectedRoutes>
                <AnimatedPage><UserDashboardPage /></AnimatedPage>
              </ProtectedRoutes>
            )}
          />
          <Route path="*" element={<AnimatedPage><HomePage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;

