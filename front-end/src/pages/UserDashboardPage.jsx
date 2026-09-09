import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Heart, LogOut, MapPin, UserRound } from 'lucide-react';
import { useLead } from '../context/LeadContext';

const UserDashboardPage = () => {
  const navigate = useNavigate();
  const { openSiteVisitForProject, leads } = useLead();
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('teca-user'));
    } catch {
      return null;
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('teca-token');
    localStorage.removeItem('teca-user');
    setUser(null);
  };

  const userLeads = user
    ? leads.filter((lead) => lead.email?.toLowerCase() === user.email?.toLowerCase())
    : [];

  if (!user) {
    return (
      <div className="page-inner min-h-[70vh] flex items-center justify-center">
        <div className="card-panel max-w-md space-y-5 p-8 text-center">
          <UserRound className="mx-auto h-12 w-12 text-accent" />
          <h1 className="font-heading text-3xl font-bold text-ink">Login to view your dashboard</h1>
          <p className="text-sm leading-relaxed text-ink-secondary">Sign in to save your property interests and manage your site visit requests.</p>
          <button type="button" onClick={() => navigate('/')} className="btn-gold w-full">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-inner space-y-12">
      <section className="container-custom relative overflow-hidden border border-accent/30 bg-dark px-7 py-9 shadow-xl sm:px-10 sm:py-12">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brass)]" />
              Private Client Dashboard
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight text-[var(--text-inverse)] sm:text-5xl">Welcome, {user.name}</h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">Your Gurukripa property journey, curated around the spaces and conversations that matter to you.</p>
          </div>
          <div className="flex items-center gap-3 border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brass)] text-lg font-bold text-dark">{user.name?.charAt(0).toUpperCase()}</div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-white">{user.name}</div>
              <div className="truncate text-xs text-white/55">{user.email}</div>
            </div>
          </div>
        </div>
        <button type="button" onClick={handleLogout} className="btn-outline-gold relative mt-8 border-white/25 text-white hover:border-[var(--brass)] hover:bg-white/10 hover:text-white">
          <LogOut className="h-4 w-4" />
          <span>Log Out</span>
        </button>
      </section>

      <section className="container-custom grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="card-panel border-t-2 border-t-accent p-6 sm:p-7">
          <div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent"><UserRound className="h-5 w-5" /></div><span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Active</span></div>
          <div className="mt-5"><div className="text-xs font-bold uppercase tracking-wider text-ink-muted">Account profile</div><div className="mt-1 truncate font-semibold text-ink">{user.email}</div></div>
        </div>
        <div className="card-panel border-t-2 border-t-accent p-6 sm:p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent"><Heart className="h-5 w-5" /></div>
          <div className="mt-5"><div className="text-xs font-bold uppercase tracking-wider text-ink-muted">Saved interests</div><div className="mt-1 font-semibold text-ink">No saved properties yet</div></div>
        </div>
        <div className="card-panel border-t-2 border-t-accent p-6 sm:p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent"><Calendar className="h-5 w-5" /></div>
          <div className="mt-5"><div className="text-xs font-bold uppercase tracking-wider text-ink-muted">My enquiries</div><div className="mt-1 font-semibold text-ink">{userLeads.length} submitted</div></div>
        </div>
      </section>

      <section className="container-custom space-y-6">
        <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Activity log</span><h2 className="mt-1 font-heading text-2xl font-bold text-ink sm:text-3xl">My Enquiries & Site Visits</h2></div>
          <p className="text-sm text-ink-muted">Updated from your account activity</p>
        </div>
        {userLeads.length === 0 ? (
          <div className="card-panel p-8 text-center">
            <Calendar className="mx-auto h-9 w-9 text-accent" />
            <h3 className="mt-3 font-heading text-xl font-bold text-ink">No enquiries yet</h3>
            <p className="mt-1 text-sm text-ink-secondary">Book a site visit or contact our advisory team to see your requests here.</p>
            <button type="button" onClick={() => openSiteVisitForProject(null)} className="btn-gold mt-5">Book a site visit</button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-muted text-xs uppercase tracking-wider text-ink-muted">
                <tr>
                  <th className="p-4">Ticket</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Project</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {userLeads.map((lead) => (
                  <tr key={lead.id} className="text-ink">
                    <td className="p-4 font-mono font-semibold text-accent">{lead.id}</td>
                    <td className="p-4">{lead.type}</td>
                    <td className="p-4 text-ink-secondary">{lead.projectName}</td>
                    <td className="p-4 text-ink-secondary">{lead.dateSubmitted || 'Pending'}</td>
                    <td className="p-4"><span className="badge-gold text-[10px]">{lead.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_.7fr]">
        <div className="glass-panel space-y-5 p-8">
          <div><h2 className="font-heading text-2xl font-bold text-ink">Continue exploring</h2><p className="mt-1 text-sm text-ink-secondary">Find a home or investment that fits your next chapter.</p></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button type="button" onClick={() => navigate('/projects')} className="flex items-center gap-3 border border-border bg-muted p-5 text-left transition-colors hover:border-accent">
              <MapPin className="h-5 w-5 text-accent" /><span className="font-semibold text-ink">Browse projects</span>
            </button>
            <button type="button" onClick={() => openSiteVisitForProject(null)} className="flex items-center gap-3 border border-border bg-muted p-5 text-left transition-colors hover:border-accent">
              <Calendar className="h-5 w-5 text-accent" /><span className="font-semibold text-ink">Book a site visit</span>
            </button>
          </div>
        </div>
        <div className="card-panel space-y-3 p-8">
          <h2 className="font-heading text-2xl font-bold text-ink">Need assistance?</h2>
          <p className="text-sm leading-relaxed text-ink-secondary">Our advisory desk can help compare floor plans, pricing and RERA disclosures.</p>
          <a href="tel:+919876543210" className="btn-outline-gold mt-2 w-full">Call advisory desk</a>
        </div>
      </section>
    </div>
  );
};

export default UserDashboardPage;
