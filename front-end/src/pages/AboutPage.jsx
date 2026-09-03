import React from 'react';
import { useLead } from '../context/LeadContext';
import { CORE_VALUES, LEADERSHIP_TEAM } from '../data/companyData';
import { Building2, Award, ShieldCheck, Target, Eye, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const { setCurrentPage, openSiteVisitForProject } = useLead();

  return (
    <div className="page-inner">
      
      {/* About Hero */}
      <section className="container-custom">
        <div className="max-w-4xl space-y-6">
          <span className="badge-gold">About Gurukripa Arcon India</span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-ink leading-[1.12]">
            Pioneering <span className="text-gold-gradient">Architectural Mastery</span> & Transparent Governance
          </h1>
          <p className="max-w-3xl text-base sm:text-xl text-ink-secondary leading-relaxed">
            Founded with an unyielding commitment to engineering excellence, Gurukripa Arcon India Pvt. Ltd. has shaped NCR's skyline through ultra-luxury residential towers, eco-conscious green townships, and Grade-A commercial hubs.
          </p>
        </div>
      </section>

      {/* Story & Promise Grid */}
      <section className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink border-b border-accent/25 pb-4">
            Our Legacy & Story
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed">
            Over the past 18 years, Gurukripa Arcon India has grown from a visionary engineering studio into one of NCR’s most trusted real estate developers. Every blueprint is audited by senior structural engineers and certified to exceed IS 1893 seismic safety standards.
          </p>
          
          <div className="space-y-4 pt-2">
            <div className="bg-surface p-6 rounded-2xl border border-accent/30 flex items-center gap-5 shadow-lg">
              <ShieldCheck className="w-10 h-10 text-accent shrink-0" />
              <div>
                <div className="font-bold text-ink text-base">100% Verified Legal Titles</div>
                <div className="text-xs sm:text-sm text-ink-muted">All projects approved by DTCP & RERA with public escrow tracking.</div>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-accent/30 flex items-center gap-5 shadow-lg">
              <Award className="w-10 h-10 text-accent shrink-0" />
              <div>
                <div className="font-bold text-ink text-base">IGBC Platinum Green Certification</div>
                <div className="text-xs sm:text-sm text-ink-muted">Sustainable zero-liquid discharge & solar energy integration.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-accent/40 h-[450px] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="Gurukripa Structural Engineering"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-muted section-block">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="glass-card p-10 space-y-5 border-l-4 border-l-accent bg-muted/80">
            <div className="flex items-center gap-3.5 text-accent">
              <Eye className="w-8 h-8" />
              <h3 className="font-heading text-3xl font-bold text-ink">Our Vision</h3>
            </div>
            <p className="text-base text-ink-secondary leading-relaxed">
              To be recognized globally as the gold standard in luxury real estate, celebrated for architectural innovation, biophilic living spaces, and absolute transparency in client relationships.
            </p>
          </div>

          <div className="glass-card p-10 space-y-5 border-l-4 border-l-accent bg-muted/80">
            <div className="flex items-center gap-3.5 text-accent">
              <Target className="w-8 h-8" />
              <h3 className="font-heading text-3xl font-bold text-ink">Our Mission</h3>
            </div>
            <p className="text-base text-ink-secondary leading-relaxed">
              To construct benchmark residential and commercial communities that enrich lives, elevate urban standards, deliver consistent capital appreciation, and uphold environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="container-custom space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="badge-gold">Executive Steering Board</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-ink">
            Leadership & Visionaries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {LEADERSHIP_TEAM.map((leader, i) => (
            <div key={i} className="glass-card p-8 flex flex-col items-center text-center space-y-5 rounded-3xl border border-accent/30 bg-surface hover:border-accent transition-all">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full object-cover border-2 border-accent shadow-xl"
              />
              <div className="space-y-1.5">
                <h3 className="font-heading text-2xl font-bold text-ink">{leader.name}</h3>
                <div className="text-xs sm:text-sm text-accent font-extrabold uppercase tracking-wider">{leader.role}</div>
              </div>
              <p className="text-sm leading-relaxed text-ink-secondary">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect CTA */}
      <section className="container-custom">
        <div className="bg-surface p-10 sm:p-14 rounded-3xl border border-accent/45 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              Ready to Explore Gurukripa Properties?
            </h3>
            <p className="text-base text-ink-secondary">
              Schedule a personalized site visit or speak with our executive property consultants.
            </p>
          </div>

          <button onClick={() => openSiteVisitForProject(null)} className="btn-gold whitespace-nowrap py-4 px-8 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Book Site Visit Pass</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
