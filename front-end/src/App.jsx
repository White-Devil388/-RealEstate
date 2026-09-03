import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LeadProvider } from './context/LeadContext';
import AppRoutes from './routes/AppRoutes';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import Toast from './components/common/Toast';
import Lightbox from './components/common/Lightbox';

import ProjectDetailModal from './components/modals/ProjectDetailModal';
import BookSiteVisitModal from './components/modals/BookSiteVisitModal';
import JobDetailModal from './components/modals/JobDetailModal';
import BlogDetailModal from './components/modals/BlogDetailModal';
import BrochureModal from './components/modals/BrochureModal';

const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />

      <WhatsAppButton />
      <Toast />
      <Lightbox />

      <ProjectDetailModal />
      <BookSiteVisitModal />
      <JobDetailModal />
      <BlogDetailModal />
      <BrochureModal />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LeadProvider>
        <AppContent />
      </LeadProvider>
    </BrowserRouter>
  );
}

export default App;
