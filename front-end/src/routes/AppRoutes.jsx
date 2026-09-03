import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
    else if (path === 'lead-admin') setCurrentPage('lead-admin');
  }, [location, setCurrentPage]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <RouteChangeHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/site-visit" element={<SiteVisitPage />} />
        <Route path="/lead-admin" element={<LeadAdminPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
