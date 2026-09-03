import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLead } from '../context/LeadContext';
import { PROJECTS } from '../data/projectsData';
import { BLOG_POSTS } from '../data/blogData';
import { COMPANY_STATS, CORE_VALUES } from '../data/companyData';
import {
  MapPin, Search, Calendar, ArrowRight, ShieldCheck,
  Compass, Send, Calculator,
} from 'lucide-react';
import EMICAL from '../components/common/EMICAL';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    setCurrentPage, setActiveProjectModal, openSiteVisitForProject,
    setActiveBlogModal, submitLead,
  } = useLead();

  const [searchLocation, setSearchLocation] = useState('All');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchStatus, setSearchStatus] = useState('All');
  const [heroForm, setHeroForm] = useState({ name: '', phone: '', email: '', project: '' });
  const [showcaseTab, setShowcaseTab] = useState('All');
  const [showEMICalculator, setShowEMICalculator] = useState(false);

  useEffect(() => {
    if (showEMICalculator) {
      document.getElementById('emi-calculator')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showEMICalculator]);

  const locationOptions = ['All', ...new Set(PROJECTS.map((p) => p.city).filter(Boolean))];
  const categoryOptions = ['All', ...new Set(PROJECTS.map((p) => p.category).filter(Boolean))];
  const statusOptions = ['All', ...new Set(PROJECTS.map((p) => p.status).filter(Boolean))];

  const filteredProjects = PROJECTS.filter((p) => {
    if (searchLocation !== 'All') {
      const loc = searchLocation.toLowerCase();
      if (!p.city.toLowerCase().includes(loc) && !p.location.toLowerCase().includes(loc)) return false;
    }
    if (searchCategory !== 'All' && p.category !== searchCategory) return false;
    if (searchStatus !== 'All' && p.status !== searchStatus) return false;
    return true;
  });

  const showcaseProjects = showcaseTab === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === showcaseTab);

  const goToProjects = () => {
    setCurrentPage('projects');
    navigate('/projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEMICalculator = () => {
    setShowEMICalculator(true);
  };

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    submitLead({
      name: heroForm.name,
      phone: heroForm.phone,
      email: heroForm.email,
      projectName: heroForm.project || 'Homepage Quick Enquiry',
      type: 'Project Enquiry',
      message: 'Quick Callback Request from Homepage Hero',
    });
    setHeroForm({ name: '', phone: '', email: '', project: '' });
  };

  return (
    <div className="page-shell pb-20">

      {/* ── Hero ── */}
      <section className="relative flex items-center pt-28 sm:pt-32 pb-14 lg:min-h-[88vh] lg:pb-20 overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
            alt="Gurukripa Architecture"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/45" />
          <div className="absolute inset-0 blueprint-grid opacity-30" />
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-7 lg:space-y-8">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--brass)]">
              <span className="w-1.5 h-1.5 bg-[var(--brass)]" />
              Site Ref. NCR-2007 — Architectural Benchmark
            </div>

            <h1 className="hero-heading">
              Buildings drafted for the way families actually live
            </h1>

            <p className="hero-subtitle">
              Ultra-luxury residences, green townships, and executive commercial hubs — built with structural integrity and transparent RERA governance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button type="button" onClick={() => openSiteVisitForProject(null)} className="btn-gold py-3.5 px-7">
                <Calendar className="w-4 h-4" />
                <span>Book Site Visit</span>
              </button>
              <button type="button" onClick={goToEMICalculator} className="btn-outline-gold py-3.5 px-7 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50">
                <Calculator className="w-4 h-4" />
                <span>EMI Calculator</span>
              </button>
              <button type="button" onClick={goToProjects} className="btn-outline-gold py-3.5 px-7 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50">
                <Compass className="w-4 h-4" />
                <span>Explore Projects</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-7 lg:pt-8 border-t border-white/15 max-w-lg">
              {[
                { val: '3.5M+', label: 'Sq. Ft. Delivered' },
                { val: '18+', label: 'Years, Track Record' },
                { val: '100%', label: 'RERA Compliant' },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="index-numeral text-2xl sm:text-3xl font-semibold text-[var(--text-inverse)]">{s.val}</div>
                  <div className="text-xs text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead form card */}
          <div className="lg:col-span-5">
            <div className="card-panel p-6 sm:p-8 lg:p-10 space-y-6 bg-surface shadow-2xl">
              <div className="space-y-2 border-b border-border pb-5">
                <span className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">Priority Desk</span>
                <h3 className="font-heading text-2xl font-semibold text-ink">Request a callback</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Connect with our advisory team for verified pricing and unit availability.
                </p>
              </div>

              <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                <div className="form-group mb-0">
                  <label className="form-label">Full Name *</label>
                  <input type="text" required placeholder="Your full name" value={heroForm.name}
                    onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })} className="form-input" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group mb-0">
                    <label className="form-label">Phone *</label>
                    <input type="tel" required placeholder="+91 98765 00000" value={heroForm.phone}
                      onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })} className="form-input" />
                  </div>
                  <div className="form-group mb-0">
                    <label className="form-label">Email *</label>
                    <input type="email" required placeholder="name@example.com" value={heroForm.email}
                      onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })} className="form-input" />
                  </div>
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Project of Interest</label>
                  <select value={heroForm.project} onChange={(e) => setHeroForm({ ...heroForm, project: e.target.value })} className="form-select">
                    <option value="">Select a project</option>
                    {PROJECTS.map((p) => (
                      <option key={p.id} value={p.name}>{p.name} ({p.city})</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-gold w-full py-3.5 mt-1">
                  <Send className="w-4 h-4" />
                  <span>Request Callback</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Finder ── */}
      <section className="container-custom -mt-8 relative z-20">
        <div className="card-panel p-8 sm:p-10 space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
            <div className="section-head !max-w-none">
              <h3 className="section-title text-2xl flex items-center gap-3">
                <Search className="w-6 h-6 text-accent" />
                Quick Project Finder
              </h3>
              <p className="section-desc text-sm">Filter by location, category, and development stage</p>
            </div>
            <button type="button" onClick={() => { setSearchLocation('All'); setSearchCategory('All'); setSearchStatus('All'); }}
              className="text-sm text-accent font-semibold hover:underline">
              Reset filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Location', value: searchLocation, setter: setSearchLocation, opts: locationOptions },
              { label: 'Category', value: searchCategory, setter: setSearchCategory, opts: categoryOptions },
              { label: 'Stage', value: searchStatus, setter: setSearchStatus, opts: statusOptions },
            ].map((f) => (
              <div key={f.label} className="form-group mb-0">
                <label className="form-label">{f.label}</label>
                <select value={f.value} onChange={(e) => f.setter(e.target.value)} className="form-select">
                  {f.opts.map((o) => (
                    <option key={o} value={o}>{o === 'All' ? `All ${f.label}s` : o}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex items-end">
              <button type="button" onClick={goToProjects} className="btn-gold w-full py-3.5">
                <Search className="w-4 h-4" />
                <span>{filteredProjects.length} Projects</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {showEMICalculator && (
        <div id="emi-calculator" className="scroll-mt-24">
          <EMICAL />
        </div>
      )}

      {/* ── Stats ── */}
      <section className="container-custom">
        <div className="card-panel p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className={`pt-6 sm:pt-0 space-y-2 ${idx > 0 ? 'sm:pl-8 lg:pl-10' : ''}`}>
              <div className="index-numeral text-4xl font-semibold text-accent">{stat.value}</div>
              <div className="text-base font-semibold text-ink">{stat.label}</div>
              <div className="text-sm text-ink-muted">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="container-custom space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="section-head">
            <span className="badge-gold">Curated Portfolio</span>
            <h2 className="section-title">Featured developments</h2>
            <p className="section-desc">Luxury sky residences, green townships, and commercial spaces</p>
          </div>
          <button type="button" onClick={goToProjects} className="btn-outline-gold shrink-0">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'Residential', 'Commercial', 'Township'].map((tab) => (
            <button key={tab} type="button" onClick={() => setShowcaseTab(tab)}
              className={`px-5 py-2 text-sm font-medium transition-all border ${
                showcaseTab === tab
                  ? 'bg-accent text-[var(--text-inverse)] border-accent'
                  : 'bg-transparent text-ink-secondary border-border hover:border-accent hover:text-accent'
              }`}>
              {tab === 'All' ? 'All' : tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.slice(0, 3).map((project) => (
            <article key={project.id} className="glass-card overflow-hidden flex flex-col group">
              <div className="relative h-60 overflow-hidden frame-corners">
                <img src={project.heroImage} alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2 z-[3]">
                  <span className="badge-gold bg-white/90">{project.category}</span>
                  <span className={`badge-status ${project.status === 'Ready to Move' ? 'status-ready' : 'status-ongoing'}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-[3]">
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium bg-dark/70 px-3 py-1.5 w-fit">
                    <MapPin className="w-3.5 h-3.5 text-[var(--brass)]" />
                    {project.location}, {project.city}
                  </div>
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col gap-5">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold text-ink group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed line-clamp-2">{project.shortDesc}</p>
                </div>
                <div className="mt-auto pt-5 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-ink-muted font-semibold tracking-wide font-mono">Starting from</span>
                    <span className="index-numeral text-base font-bold text-accent">{project.price}</span>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setActiveProjectModal(project)} className="btn-secondary flex-1 text-sm py-2.5">
                      Details
                    </button>
                    <button type="button" onClick={() => openSiteVisitForProject(project)} className="btn-gold flex-1 text-sm py-2.5">
                      <Calendar className="w-3.5 h-3.5" /> Visit
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-muted section-block">
        <div className="container-custom space-y-14">
          <div className="section-head section-head-center">
            <span className="badge-gold">Our Philosophy</span>
            <h2 className="section-title">The Gurukripa standard</h2>
            <p className="section-desc text-center">Four pillars defining every square foot of our architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, i) => (
              <div key={i} className="card-panel p-8 space-y-4 border-t-2 border-t-accent">
                <div className="w-12 h-12 bg-accent-subtle flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-ink">{val.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="container-custom space-y-12">
        <div className="section-head section-head-center">
          <span className="badge-gold">Your Journey</span>
          <h2 className="section-title">Path to homeownership</h2>
          <p className="section-desc text-center">A transparent advisory experience from discovery to key handover</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {[
            { step: '01', title: 'Discover', desc: 'Explore catalog & virtual tours' },
            { step: '02', title: 'Shortlist', desc: 'Compare locations & budgets' },
            { step: '03', title: 'Enquire', desc: 'Connect with your advisor' },
            { step: '04', title: 'Understand', desc: 'Review RERA & payment plans' },
            { step: '05', title: 'Decision', desc: 'Secure booking & handover' },
          ].map((item) => (
            <div key={item.step} className="card-panel p-6 space-y-3 group hover:border-accent transition-colors">
              <div className="index-numeral text-2xl font-semibold text-border group-hover:text-accent transition-colors">{item.step}</div>
              <div className="font-heading text-lg font-semibold text-ink">{item.title}</div>
              <div className="text-xs text-ink-muted leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="container-custom space-y-10 pb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="section-head">
            <span className="badge-gold">Insights</span>
            <h2 className="section-title">Real estate trends</h2>
          </div>
          <button type="button" onClick={() => { setCurrentPage('blog'); navigate('/blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="btn-outline-gold shrink-0">
            Read All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article key={post.id} onClick={() => setActiveBlogModal(post)}
              className="glass-card p-5 cursor-pointer group space-y-4">
              <div className="h-48 overflow-hidden">
                <img src={post.featuredImage} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center justify-between text-xs text-ink-muted font-mono">
                <span className="text-accent font-semibold uppercase tracking-wide">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-accent font-semibold pt-2 border-t border-border">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
