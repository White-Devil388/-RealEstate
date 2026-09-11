import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLead } from '../context/LeadContext';
import { useProjects } from '../context/ProjectContext';
import { useData } from '../context/DataContext';
import {
  MapPin, Search, Calendar, ArrowRight, ShieldCheck,
  Compass, Send, Calculator, Quote, PhoneCall, X
} from 'lucide-react';
import EMICAL from '../components/common/EMICAL';
import CounterNumber from '../components/common/CounterNumber';

const HomePage = () => {
  const { projects } = useProjects();
  const { blogs, companyData } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const navigate = useNavigate();
  const {
    setCurrentPage, setActiveProjectModal, openSiteVisitForProject,
    setActiveBlogModal, submitLead,
  } = useLead();

  const COMPANY_STATS = companyData.stats || [];
  const ACHIEVEMENTS = companyData.achievements || [];
  const ACHIEVEMENT_IMAGES = companyData.achievementImages || [];
  const CORE_VALUES = companyData.coreValues || [];
  const TESTIMONIALS = companyData.testimonials || [];

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

  const locationOptions = ['All', ...new Set(projects.map((p) => p.city).filter(Boolean))];
  const categoryOptions = ['All', ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const statusOptions = ['All', ...new Set(projects.map((p) => p.status).filter(Boolean))];

  const filteredProjects = projects.filter((p) => {
    if (searchLocation !== 'All') {
      const loc = searchLocation.toLowerCase();
      if (!p.city.toLowerCase().includes(loc) && !p.location.toLowerCase().includes(loc)) return false;
    }
    if (searchCategory !== 'All' && p.category !== searchCategory) return false;
    if (searchStatus !== 'All' && p.status !== searchStatus) return false;
    return true;
  });

  const showcaseProjects = showcaseTab === 'All'
    ? projects
    : projects.filter((p) => p.category === showcaseTab);

  const goToProjects = () => {
    setCurrentPage('projects');

    const params = new URLSearchParams();
    if (searchLocation !== 'All') params.set('city', searchLocation);
    if (searchCategory !== 'All') params.set('category', searchCategory);
    if (searchStatus !== 'All') params.set('status', searchStatus);

    const queryString = params.toString();
    navigate(queryString ? `/projects?${queryString}` : '/projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    submitLead({
      name: heroForm.name,
      phone: heroForm.phone,
      email: heroForm.email,
      projectName: heroForm.project || 'Homepage Quick Enquiry',
      type: 'Project Enquiry',
      message: 'Quick Callback Request from Homepage Hero Modal',
    });
    setHeroForm({ name: '', phone: '', email: '', project: '' });
    setIsCallbackModalOpen(false);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="page-shell home-compact pb-10">

      {/* ── Hero ── */}
      <section className="relative flex items-center pt-28 sm:pt-32 pb-14 lg:min-h-[85vh] lg:pb-20 overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
            alt="Gurukripa Architecture"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/45" />
          <div className="absolute inset-0 blueprint-grid opacity-30" />
        </div>

        <div className="container-custom relative z-10 max-w-4xl lg:max-w-5xl space-y-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-4 lg:space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--brass)]">
              <span className="w-1.5 h-1.5 bg-[var(--brass)]" />
              Site Ref. NCR-2007 — Architectural Benchmark
            </motion.div>

            <motion.h1 variants={fadeInUp} className="hero-heading !max-w-none">
              Buildings drafted for <span className="text-animated-light-gold font-normal">the way families actually live</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="hero-subtitle">
              Ultra-luxury residences, green townships, and executive commercial hubs — built with structural integrity and transparent RERA governance.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <button type="button" onClick={() => openSiteVisitForProject(null)} className="btn-gold py-3.5 px-7">
                <Calendar className="w-4 h-4" />
                <span>Book Site Visit</span>
              </button>
              <button type="button"
                onClick={() => setIsOpen(true)}
                className="btn-outline-gold py-3.5 px-7 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50">
                <Calculator className="w-4 h-4" />
                <span>EMI Calculator</span>
              </button>
              <button type="button" onClick={() => setIsCallbackModalOpen(true)} className="btn-outline-gold py-3.5 px-7 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50">
                <PhoneCall className="w-4 h-4 text-accent" />
                <span>Request a Callback</span>
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 sm:gap-6 pt-7 lg:pt-8 border-t border-white/15 max-w-lg">
              {[
                { val: '3.5M+', label: 'Sq. Ft. Delivered' },
                { val: '18+', label: 'Years, Track Record' },
                { val: '100%', label: 'RERA Compliant' },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <CounterNumber value={s.val} className="index-numeral text-2xl sm:text-3xl font-semibold text-animated-light-gold text-gold-glow block" />
                  <div className="text-xs text-white/70 tracking-wide font-mono uppercase">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Project Finder ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="container-custom project-finder mt-4"
      >
        <div className="card-panel p-8 sm:p-10 lg:p-16 space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
            <div className="section-head !max-w-none">
              <h3 className="section-title text-3xl lg:text-4xl flex items-center gap-3">
                <Search className="w-7 h-7 lg:w-8 lg:h-8 text-accent" />
                Quick Project Finder
              </h3>
              <p className="section-desc text-base lg:text-lg">Filter by location, category, and development stage</p>
            </div>
            <button type="button" onClick={() => { setSearchLocation('All'); setSearchCategory('All'); setSearchStatus('All'); }}
              className="text-sm text-accent font-semibold hover:underline cursor-pointer">
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
      </motion.section>

      {showEMICalculator && (
        <div id="emi-calculator" className="scroll-mt-24">
          <EMICAL />
        </div>
      )}

      {/* ── Stats ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="container-custom py-4 sm:py-6"
      >
        <div className="card-panel p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className={`pt-6 sm:pt-0 space-y-2 group ${idx > 0 ? 'sm:pl-8 lg:pl-10' : ''}`}>
              <CounterNumber value={stat.value} className="index-numeral text-4xl font-bold text-animated-gold text-gold-glow group-hover:scale-105 transition-transform block" />
              <div className="text-base font-bold text-ink group-hover:text-accent transition-colors">{stat.label}</div>
              <div className="text-sm font-medium text-ink-muted">{stat.sub}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Achievements ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="section-muted section-block"
      >
        <div className="container-custom space-y-10">
          <div className="section-head section-head-center max-w-3xl py-4 sm:py-6">
            <span className="badge-gold">Why choose us</span>
            <h2 className="section-title">Built on trust, <span className="text-animated-gold">proven by progress</span></h2>
            <p className="section-desc text-center">From first blueprint to final handover, our work is measured in lasting relationships and spaces that feel like home.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {[
              ACHIEVEMENTS[0],
              ACHIEVEMENT_IMAGES[0] ? { image: ACHIEVEMENT_IMAGES[0], alt: 'Modern residential architecture' } : null,
              ACHIEVEMENTS[1],
              ACHIEVEMENT_IMAGES[1] ? { image: ACHIEVEMENT_IMAGES[1], alt: 'Contemporary commercial architecture' } : null,
              ACHIEVEMENTS[2],
              ACHIEVEMENTS[3]
            ]
              .filter(Boolean)
              .map((item) => (
              item.image ? (
                <motion.div
                  key={item.image}
                  variants={fadeInUp}
                  className="min-h-[260px] overflow-hidden border border-border bg-surface shadow-sm sm:min-h-[320px]"
                >
                  <img src={item.image} alt={item.alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </motion.div>
              ) : (
                <motion.article
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="card-panel min-h-[260px] border border-border p-6 sm:min-h-[320px] sm:p-7 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-accent hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="h-10 w-10 border border-accent/30 bg-accent-subtle" />
                    <h3 className="font-heading text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-secondary">{item.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <CounterNumber value={item.value} className="index-numeral text-3xl font-bold text-animated-gold text-gold-glow block" />
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-muted">Verified milestone</div>
                  </div>
                </motion.article>
              )
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Featured Projects ── */}
      <section className="container-custom space-y-9">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4 sm:py-6">
          <div className="section-head">
            <span className="badge-gold">Curated Portfolio</span>
            <h2 className="section-title">Featured <span className="text-animated-gold">developments</span></h2>
            <p className="section-desc">Luxury sky residences, green townships, and commercial spaces</p>
          </div>
          <button type="button" onClick={goToProjects} className="btn-outline-gold shrink-0">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'Residential', 'Commercial', 'Township'].map((tab) => (
            <button key={tab} type="button" onClick={() => setShowcaseTab(tab)}
              className={`px-5 py-2 text-sm font-medium transition-all border cursor-pointer ${
                showcaseTab === tab
                  ? 'bg-accent text-[var(--text-inverse)] border-accent'
                  : 'bg-transparent text-ink-secondary border-border hover:border-accent hover:text-accent'
              }`}>
              {tab === 'All' ? 'All' : tab}
            </button>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {showcaseProjects.slice(0, 3).map((project) => (
            <motion.article
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              key={project.id}
              className="glass-card card-hover-animated h-full overflow-hidden flex flex-col group transition-all duration-300 shadow-md hover:shadow-xl border border-accent/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden frame-corners">
                <img src={project.heroImage} alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
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
                  <h3 className="font-heading text-xl font-semibold text-ink card-title-hover transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {project.shortDesc || 'Premium residential development designed for modern urban living and long-term value.'}
                  </p>
                </div>

                <div className="rounded-2xl bg-muted/70 border border-accent/15 p-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-ink-muted uppercase tracking-wide font-bold">Configurations</span>
                    <span className="font-extrabold text-ink text-right">
                      {project.specifications?.configurations || project.configurations || '2 & 3 BHK'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-ink-muted uppercase tracking-wide font-bold">Units</span>
                    <span className="font-semibold text-ink text-right">
                      {project.specifications?.totalUnits || project.totalUnits || '120 Units'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-ink-muted uppercase tracking-wide font-bold">Possession</span>
                    <span className="font-semibold text-ink text-right">
                      {project.specifications?.possession || project.possession || '2027'}
                    </span>
                  </div>
                </div>

                <div className="mt-auto pt-5 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-ink-muted font-semibold tracking-wide font-mono">Starting from</span>
                    <span className="index-numeral text-base font-bold text-animated-gold">{project.price}</span>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setActiveProjectModal(project)} className="btn-secondary flex-1 text-sm py-2.5 cursor-pointer">
                      Details
                    </button>
                    <button type="button" onClick={() => openSiteVisitForProject(project)} className="btn-gold flex-1 text-sm py-2.5 cursor-pointer">
                      <Calendar className="w-3.5 h-3.5" /> Visit
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-muted section-block">
        <div className="container-custom space-y-8">
          <div className="section-head section-head-center">
            <span className="badge-gold">Our Philosophy</span>
            <h2 className="section-title">The Gurukripa standard</h2>
            <p className="section-desc text-center">Four pillars defining every square foot of our architecture</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CORE_VALUES.map((val, i) => (
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                key={i}
                className="card-panel h-full p-8 space-y-4 border-t-2 border-t-accent transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-accent-subtle flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-ink">{val.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="container-custom space-y-8">
        <div className="section-head section-head-center">
          <span className="badge-gold">Testimonials</span>
          <h2 className="section-title">A better address, by every measure</h2>
          <p className="section-desc text-center">What homeowners and investors say about the Gurukripa experience</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.article
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              key={testimonial.name}
              className="glass-card h-full p-6 sm:p-7 flex flex-col gap-5 border-t-2 border-t-accent transition-all duration-300"
            >
              <Quote className="w-7 h-7 text-accent" aria-hidden="true" />
              <blockquote className="font-heading text-lg leading-relaxed text-ink">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-auto pt-4 border-t border-border">
                <div className="font-semibold text-ink">{testimonial.name}</div>
                <div className="mt-1 text-xs text-ink-muted font-mono uppercase tracking-wide">{testimonial.detail}</div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── Journey ── */}
      <section className="container-custom space-y-10">
        <div className="section-head section-head-center py-4 sm:py-6">
          <span className="badge-gold">Your Journey</span>
          <h2 className="section-title">Path to homeownership</h2>
          <p className="section-desc text-center">A transparent advisory experience from discovery to key handover</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-7 lg:gap-8"
        >
          {[
            { step: '01', title: 'Discover', desc: 'Explore catalog & virtual tours' },
            { step: '02', title: 'Shortlist', desc: 'Compare locations & budgets' },
            { step: '03', title: 'Enquire', desc: 'Connect with your advisor' },
            { step: '04', title: 'Understand', desc: 'Review RERA & payment plans' },
            { step: '05', title: 'Decision', desc: 'Secure booking & handover' },
          ].map((item) => (
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              key={item.step}
              className="card-panel h-full p-6 space-y-3 group hover:border-accent transition-colors"
            >
              <div className="index-numeral text-2xl font-semibold text-border group-hover:text-accent transition-colors">{item.step}</div>
              <div className="font-heading text-lg font-semibold text-ink">{item.title}</div>
              <div className="text-xs text-ink-muted leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Blog ── */}
      <section className="container-custom space-y-9 pb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4 sm:py-6">
          <div className="section-head">
            <span className="badge-gold">Insights</span>
            <h2 className="section-title">Real estate trends</h2>
          </div>
          <button type="button" onClick={() => { setCurrentPage('blog'); navigate('/blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="btn-outline-gold shrink-0">
            Read All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogs.slice(0, 3).map((post) => (
            <motion.article
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              key={post.id || post._id}
              onClick={() => setActiveBlogModal(post)}
              className="glass-card h-full p-5 cursor-pointer group flex flex-col gap-4 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.featuredImage} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
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
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── Request a Callback Modal Popup ── */}
      <AnimatePresence>
        {isCallbackModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto"
            onClick={() => setIsCallbackModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-surface border border-accent/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsCallbackModalOpen(false)}
                className="absolute top-5 right-5 text-ink-muted hover:text-ink p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b border-border pb-5">
                <span className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">Priority Desk</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-ink">Request a callback</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Connect with our advisory team for verified pricing and unit availability.
                </p>
              </div>

              <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                <div className="form-group mb-0">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={heroForm.name}
                    onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group mb-0">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={heroForm.phone}
                      onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={heroForm.email}
                      onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Project of Interest</label>
                  <select
                    value={heroForm.project}
                    onChange={(e) => setHeroForm({ ...heroForm, project: e.target.value })}
                    className="form-select"
                  >
                    <option value="">Select a project</option>
                    {projects.map((p) => (
                      <option key={p.id} value={p.name}>{p.name} ({p.city})</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-gold w-full py-3.5 mt-2 cursor-pointer font-semibold">
                  <Send className="w-4 h-4" />
                  <span>Request Callback</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-surface border border-accent/40 rounded-3xl p-6 sm:p-8 shadow-2xl"
            style={{ scrollbarWidth: "none" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 text-gray-600 hover:text-black text-2xl cursor-pointer"
            >
              ×
            </button>

            <EMICAL compact />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

