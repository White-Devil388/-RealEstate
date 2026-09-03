import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/97 backdrop-blur-md py-2.5 sm:py-3 shadow-sm border-b border-border'
          : 'bg-surface/90 backdrop-blur-md py-3.5 sm:py-4.5 border-b border-border/50'
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-3 lg:gap-8">
        {/* Logo — a drafted plan mark, not a rounded app icon */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <svg width="34" height="34" viewBox="0 0 34 34" className="shrink-0" aria-hidden="true">
            <rect x="1" y="1" width="32" height="32" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M9 25V13L17 7L25 13V25" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            <line x1="14" y1="25" x2="14" y2="17" stroke="var(--accent)" strokeWidth="1.5" />
            <line x1="20" y1="25" x2="20" y2="17" stroke="var(--accent)" strokeWidth="1.5" />
          </svg>
          <div className="text-left hidden sm:block">
            <div className="font-heading text-lg sm:text-xl font-semibold tracking-tight text-ink group-hover:text-accent transition-colors leading-tight">
              Gurukripa Arcon
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-ink-muted font-medium font-mono">
              India Pvt. Ltd. — Est. 2007
            </div>
          </div>
        </button>

        {/* Desktop Nav — underline tabs, not a pill segmented control */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id, item.path)}
                className={`relative text-xs xl:text-sm font-medium px-2.5 xl:px-3.5 py-2 transition-colors whitespace-nowrap ${
                  isActive ? 'text-ink' : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 -bottom-0.5 h-[2px] bg-accent transition-transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('lead-admin', '/lead-admin')}
            className={`text-xs font-semibold px-3 py-2.5 border transition-all flex items-center gap-1.5 xl:gap-2 ${
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
          </button>

          <button
            type="button"
            onClick={() => openSiteVisitForProject(null)}
            className="btn-gold text-xs xl:text-sm py-2.5 px-4 xl:py-3 xl:px-5 min-h-0"
          >
            <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            <span>Book Site Visit</span>
          </button>
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
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-ink-secondary hover:text-accent bg-muted border border-border"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-border px-6 py-6 animate-fade-in shadow-md">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id, item.path)}
                className={`text-left text-base font-medium py-3.5 px-1 flex items-center justify-between transition-all border-b border-border ${
                  currentPage === item.id ? 'text-accent' : 'text-ink'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavClick('lead-admin', '/lead-admin')}
              className="text-left text-sm font-medium py-3.5 px-1 flex items-center justify-between mt-1"
            >
              <div className="flex items-center gap-2 text-ink-secondary">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Lead Admin</span>
              </div>
              <span className="bg-muted text-accent text-xs px-2 py-0.5 font-mono font-bold border border-border">
                {leads.length}
              </span>
            </button>

            <div className="pt-5 mt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openSiteVisitForProject(null);
                }}
                className="btn-gold w-full py-3.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Site Visit</span>
              </button>
              <a
                href="tel:+919589807388"
                className="btn-outline-gold w-full py-3.5 text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+91 9589807388</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
