import React from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { LeadProvider } from './context/LeadContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProjectProvider } from './context/ProjectContext';
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
import AuthContainer from './components/auth/AuthContainer';

const AppContent = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Header onOpenAuth={() => setIsAuthModalOpen(true)} />
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
      <AuthContainer
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthenticated={() => {
          setIsAuthModalOpen(false);
          navigate('/dashboard');
        }}
      />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LeadProvider>
          <ProjectProvider>
            <AppContent />
          </ProjectProvider>
        </LeadProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
