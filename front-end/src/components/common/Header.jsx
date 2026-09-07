import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLead } from '../../context/LeadContext';
import { Calendar, Menu, X, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage, openSiteVisitForProject, leads } = useLead();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'media', label: 'Media', path: '/media' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'careers', label: 'Careers', path: '/careers' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (pageId, path = `/${pageId === 'home' ? '' : pageId}`) => {
    setCurrentPage(pageId);
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/97 backdrop-blur-md py-2 sm:py-2.5 shadow-md border-b border-border'
          : 'bg-surface/90 backdrop-blur-md py-2.5 sm:py-3 border-b border-border/50'
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-2 lg:gap-6">
        {/* Logo — a drafted plan mark */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <svg width="29" height="29" viewBox="0 0 34 34" className="shrink-0 group-hover:rotate-6 transition-transform duration-300" aria-hidden="true">
            <rect x="1" y="1" width="32" height="32" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M9 25V13L17 7L25 13V25" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            <line x1="14" y1="25" x2="14" y2="17" stroke="var(--accent)" strokeWidth="1.5" />
            <line x1="20" y1="25" x2="20" y2="17" stroke="var(--accent)" strokeWidth="1.5" />
          </svg>
          <div className="text-left hidden sm:block">
            <div className="font-heading text-base sm:text-lg font-semibold tracking-tight text-ink group-hover:text-animated-gold transition-colors leading-tight">
              Gurukripa Arcon
            </div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-ink-muted font-medium font-mono group-hover:text-accent transition-colors">
              India Pvt. Ltd. — Est. 2007
            </div>
          </div>
        </motion.button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            if (item.id === 'projects') {
              return (
                <div key={item.id} className="relative group">
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id, item.path)}
                    className={`relative text-[11px] xl:text-xs font-medium px-2 xl:px-2.5 py-1.5 transition-all whitespace-nowrap animated-underline ${
                      isActive ? 'text-ink font-semibold active' : 'text-ink-secondary hover:text-ink hover-text-expand'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeHeaderTab"
                        className="absolute left-2 right-2 xl:left-2.5 xl:right-2.5 -bottom-0.5 h-[2px] bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 translate-y-2 border border-border bg-surface py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="relative group/ongoing">
                      <button type="button" className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs text-ink-secondary hover:bg-accent-subtle hover:text-accent transition-colors">
                        <span>Ongoing Projects</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                      <div className="invisible absolute left-full top-0 z-50 w-40 border border-border bg-surface py-2 opacity-0 shadow-lg transition-all group-hover/ongoing:visible group-hover/ongoing:opacity-100 group-focus-within/ongoing:visible group-focus-within/ongoing:opacity-100">
                        <button type="button" onClick={() => handleNavClick('projects', '/projects?status=ongoing&type=residential')} className="block w-full px-4 py-2.5 text-left text-xs text-ink-secondary hover:bg-accent-subtle hover:text-accent transition-colors">
                          Residential
                        </button>
                        <button type="button" onClick={() => handleNavClick('projects', '/projects?status=ongoing&type=commercial')} className="block w-full px-4 py-2.5 text-left text-xs text-ink-secondary hover:bg-accent-subtle hover:text-accent transition-colors">
                          Commercial
                        </button>
                      </div>
                    </div>
                    <button type="button" onClick={() => handleNavClick('projects', '/projects?status=completed')} className="block w-full px-4 py-2.5 text-left text-xs text-ink-secondary hover:bg-accent-subtle hover:text-accent transition-colors">
                      Completed Projects
                    </button>
                  </div>
                </div>
              );
            }
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id, item.path)}
                className={`relative text-[11px] xl:text-xs font-medium px-2 xl:px-2.5 py-1.5 transition-all whitespace-nowrap animated-underline ${
                  isActive ? 'text-ink font-semibold active' : 'text-ink-secondary hover:text-ink hover-text-expand'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeHeaderTab"
                    className="absolute left-2 right-2 xl:left-2.5 xl:right-2.5 -bottom-0.5 h-[2px] bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 shrink-0">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={() => handleNavClick('lead-admin', '/lead-admin')}
            className={`text-[11px] font-semibold px-2.5 py-2 border transition-all flex items-center gap-1 xl:gap-1.5 ${
              currentPage === 'lead-admin'
                ? 'bg-accent text-[var(--text-inverse)] border-accent'
                : 'bg-transparent text-ink-secondary border-border hover:border-accent hover:text-accent'
            }`}
            title="Lead CRM Dashboard"
          >
            <ShieldCheck className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            <span className="hidden xl:inline">Leads</span>
            <span className="bg-muted text-accent text-[10px] xl:text-[11px] px-1.5 py-0.5 font-mono font-semibold border border-border">
              {leads.length}
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => openSiteVisitForProject(null)}
            className="btn-gold text-[11px] xl:text-xs py-2 px-3 xl:py-2.5 xl:px-4 min-h-0 animate-pulse-glow"
          >
            <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            <span>Book Site Visit</span>
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => openSiteVisitForProject(null)}
            className="btn-gold text-xs px-3 py-2 min-h-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Visit</span>
          </button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-ink-secondary hover:text-accent bg-muted border border-border"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-surface border-b border-border px-5 py-4 overflow-hidden shadow-md"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <React.Fragment key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id, item.path)}
                    className={`text-left text-sm font-medium py-2.5 px-1 flex items-center justify-between transition-all border-b border-border ${
                      currentPage === item.id ? 'text-accent font-semibold' : 'text-ink'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </button>
                  {item.id === 'projects' && (
                    <div className="grid grid-cols-2 gap-2 border-b border-border px-1 py-2">
                      <div className="col-span-2">
                        <div className="py-1 text-xs font-semibold text-ink">Ongoing Projects</div>
                        <div className="grid grid-cols-2 gap-2">
                          <button type="button" onClick={() => handleNavClick('projects', '/projects?status=ongoing&type=residential')} className="py-2 text-left text-xs text-ink-secondary hover:text-accent">
                            Residential
                          </button>
                          <button type="button" onClick={() => handleNavClick('projects', '/projects?status=ongoing&type=commercial')} className="py-2 text-left text-xs text-ink-secondary hover:text-accent">
                            Commercial
                          </button>
                        </div>
                      </div>
                      <button type="button" onClick={() => handleNavClick('projects', '/projects?status=completed')} className="py-2 text-left text-xs text-ink-secondary hover:text-accent">
                        Completed
                      </button>
                    </div>
                  )}
                </React.Fragment>
              ))}

              <button
                type="button"
                onClick={() => handleNavClick('lead-admin', '/lead-admin')}
                className="text-left text-sm font-medium py-2.5 px-1 flex items-center justify-between mt-1"
              >
                <div className="flex items-center gap-2 text-ink-secondary">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Lead Admin</span>
                </div>
                <span className="bg-muted text-accent text-xs px-2 py-0.5 font-mono font-bold border border-border">
                  {leads.length}
                </span>
              </button>

              <div className="pt-4 mt-1 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openSiteVisitForProject(null);
                  }}
                  className="btn-gold w-full py-3"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Site Visit</span>
                </button>
                <a
                  href="tel:+919589807388"
                  className="btn-outline-gold w-full py-3 text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>+91 9589807388</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

