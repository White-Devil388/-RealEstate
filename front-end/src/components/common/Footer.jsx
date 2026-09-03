import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLead } from '../../context/LeadContext';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const { setCurrentPage, showToast } = useLead();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast(`Thank you! ${newsletterEmail} subscribed to Gurukripa Insights.`, 'success');
    setNewsletterEmail('');
  };

  const handleNavClick = (pageId, path = `/${pageId === 'home' ? '' : pageId}`) => {
    setCurrentPage(pageId);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-[var(--text-inverse)] pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--accent-light)]/30" />

      <div className="container-custom relative z-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group text-left"
            >
              <svg width="32" height="32" viewBox="0 0 34 34" className="shrink-0" aria-hidden="true">
                <rect x="1" y="1" width="32" height="32" fill="none" stroke="var(--brass)" strokeWidth="1.5" />
                <path d="M9 25V13L17 7L25 13V25" fill="none" stroke="var(--brass)" strokeWidth="1.5" />
                <line x1="14" y1="25" x2="14" y2="17" stroke="var(--brass)" strokeWidth="1.5" />
                <line x1="20" y1="25" x2="20" y2="17" stroke="var(--brass)" strokeWidth="1.5" />
              </svg>
              <div>
                <div className="font-heading text-xl font-semibold text-[var(--text-inverse)] group-hover:text-[var(--brass)] transition-colors">
                  Gurukripa Arcon
                </div>
                <div className="text-[10px] tracking-[0.18em] uppercase text-white/45 font-mono">
                  India Pvt. Ltd.
                </div>
              </div>
            </button>

            <p className="text-sm leading-relaxed text-white/55 max-w-sm">
              Benchmark real estate developer delivering luxury residences, green townships, and Grade-A commercial hubs across NCR.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs bg-white/[0.04] px-3 py-2 border border-white/10 text-white/75">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--brass)]" />
                <span>RERA Approved</span>
              </div>
              <div className="flex items-center gap-2 text-xs bg-white/[0.04] px-3 py-2 border border-white/10 text-white/75">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brass)]" />
                <span>IGBC Certified</span>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-lg font-semibold text-[var(--text-inverse)]">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {['home', 'about', 'projects', 'media', 'blog', 'careers', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(page)}
                    className="text-white/55 hover:text-[var(--brass)] transition-colors flex items-center gap-2 capitalize"
                  >
                    <ArrowRight className="w-3 h-3 text-[var(--brass)]" />
                    <span>{page === 'about' ? 'About Us' : page === 'contact' ? 'Contact' : page}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-lg font-semibold text-[var(--text-inverse)]">Featured Projects</h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Gurukripa Grand Residences', loc: 'Golf Course Ext Rd, Gurugram' },
                { name: 'Gurukripa Eco Enclave', loc: 'Sector 150, Noida' },
                { name: 'Gurukripa Capital Square', loc: 'SPR, Gurugram' },
              ].map((proj) => (
                <li key={proj.name}>
                  <button
                    type="button"
                    onClick={() => handleNavClick('projects')}
                    className="text-left hover:text-[var(--brass)] transition-colors space-y-0.5 group"
                  >
                    <div className="font-medium text-white/85 group-hover:text-[var(--brass)]">{proj.name}</div>
                    <div className="text-xs text-white/40">{proj.loc}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-lg font-semibold text-[var(--text-inverse)]">Contact</h4>
            <div className="space-y-3 text-sm text-white/55">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--brass)] shrink-0 mt-0.5" />
                <span>Gurukripa Tower, Sector 44, Golf Course Road, Gurugram, Haryana 122003</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--brass)] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[var(--brass)] transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--brass)] shrink-0" />
                <a href="mailto:info@gurukripaarcon.com" className="hover:text-[var(--brass)] transition-colors">info@gurukripaarcon.com</a>
              </div>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/45 font-mono">Newsletter</div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/[0.04] border border-white/15 border-r-0 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[var(--brass)]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[var(--accent)] text-[var(--text-inverse)] px-4 py-2.5 hover:bg-[var(--accent-dark)] font-semibold text-sm transition-colors border border-[var(--accent)]"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Gurukripa Arcon India Pvt. Ltd. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {['Privacy Policy', 'Terms & Conditions', 'Disclaimer', 'Cookie Policy'].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => showToast(`${label} — contact us for full details.`, 'info')}
                className="hover:text-[var(--brass)] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
