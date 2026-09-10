import React, { useState } from 'react';
import { useLead } from '../context/LeadContext';
import { useProjects } from '../context/ProjectContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  LayoutDashboard,
  Users,
  Building2,
  Calendar,
  FileText,
  Settings,
  Search,
  Plus,
  Filter,
  Eye,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  X,
  ChevronRight,
  Download,
  BellRing,
  Sparkles,
  UserCheck,
  Building,
  DollarSign,
  PieChart,
  Edit,
  Trash2,
  RotateCcw,
  Upload
} from 'lucide-react';

const AdminDashboardPage = () => {
  const { leads, updateLeadStatus, submitLead, showToast } = useLead();
  const { projects, addProject, updateProject, deleteProject, resetProjects } = useProjects();
  const [activeTab, setActiveTab] = useState('overview');

  // CRM Leads State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedLeadModal, setSelectedLeadModal] = useState(null);
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);

  // New Lead Form State
  const [newLeadData, setNewLeadData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Project Enquiry',
    projectName: projects[0]?.name || 'Skyline Heights 1',
    message: ''
  });

  // Projects State & Modals
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('All');
  const [projectStatusFilter, setProjectStatusFilter] = useState('All');
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [deletingProjectId, setDeletingProjectId] = useState(null);

  // Form State for Add / Edit Project Card
  const [projectForm, setProjectForm] = useState({
    name: '',
    category: 'Premium Apartments',
    status: 'Ready to Move',
    price: '₹35 Lakh - ₹70 Lakh',
    location: 'Vijay Nagar',
    city: 'Indore',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    shortDesc: '',
    totalUnits: '120',
    configurations: '2 & 3 BHK',
    possession: '2027'
  });

  // Site Visits State
  const [visitStatusFilter, setVisitStatusFilter] = useState('All');
  const [mockVisits, setMockVisits] = useState([
    { id: 'SV-901', name: 'Rajesh Sharma', phone: '+91 98260 11223', project: 'Skyline Heights 1', date: '2026-09-12', time: '11:00 AM', status: 'Confirmed', executive: 'Amit Varma', cabNeeded: true },
    { id: 'SV-902', name: 'Priya Verma', phone: '+91 97555 44332', project: 'Royal Courtyard 3', date: '2026-09-13', time: '03:30 PM', status: 'Pending', executive: 'Rohan Mehta', cabNeeded: false },
    { id: 'SV-903', name: 'Vikramaditya Singh', phone: '+91 94250 88991', project: 'Emerald Residency 7', date: '2026-09-14', time: '10:00 AM', status: 'Confirmed', executive: 'Sneha Patel', cabNeeded: true },
    { id: 'SV-904', name: 'Kavita Chawla', phone: '+91 99811 22334', project: 'Green Valley Homes 2', date: '2026-09-15', time: '04:00 PM', status: 'Completed', executive: 'Amit Varma', cabNeeded: false },
  ]);

  // Lead Status List & Classes
  const statuses = ['New', 'Contacted', 'Qualified', 'Site Visit Scheduled', 'Converted', 'Closed'];
  const leadTypes = ['All', 'Site Visit', 'Project Enquiry', 'Brochure Request', 'Contact Form', 'Career Application'];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'New': return 'bg-sky-500/20 text-sky-400 border-sky-500/40';
      case 'Contacted': return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      case 'Qualified': return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'Site Visit Scheduled': return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
      case 'Converted': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Closed': return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    if (filterType !== 'All' && lead.type !== filterType) return false;
    if (filterStatus !== 'All' && lead.status !== filterStatus) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      const matchName = lead.name?.toLowerCase().includes(q);
      const matchEmail = lead.email?.toLowerCase().includes(q);
      const matchId = lead.id?.toLowerCase().includes(q);
      const matchPhone = lead.phone?.toLowerCase().includes(q);
      if (!matchName && !matchEmail && !matchId && !matchPhone) return false;
    }
    return true;
  });

  // Filtered Projects
  const filteredProjects = projects.filter((proj) => {
    if (projectCategoryFilter !== 'All' && proj.category !== projectCategoryFilter) return false;
    if (projectStatusFilter !== 'All' && proj.status !== projectStatusFilter) return false;
    return true;
  });

  const handleCreateLeadSubmit = async (e) => {
    e.preventDefault();
    if (!newLeadData.name || !newLeadData.phone) {
      showToast('Please enter prospect name and phone number', 'error');
      return;
    }
    await submitLead(newLeadData);
    setIsAddLeadModalOpen(false);
    setNewLeadData({ name: '', phone: '', email: '', type: 'Project Enquiry', projectName: projects[0]?.name || 'Skyline Heights 1', message: '' });
  };

  // Project CRUD Handlers
  const handleOpenAddProjectModal = () => {
    setEditingProject(null);
    setProjectForm({
      name: '',
      category: 'Premium Apartments',
      status: 'Ready to Move',
      price: '₹45 Lakh - ₹85 Lakh',
      location: 'Vijay Nagar',
      city: 'Indore',
      heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Ultra-luxury residential project with state-of-the-art modern architectural amenities and lush green views.',
      totalUnits: '120 Units',
      configurations: '2 & 3 BHK Sky Residences',
      possession: '2026'
    });
    setIsAddProjectModalOpen(true);
  };

  const handleOpenEditProjectModal = (proj) => {
    setEditingProject(proj);
    setProjectForm({
      name: proj.name || '',
      category: proj.category || 'Premium Apartments',
      status: proj.status || 'Ready to Move',
      price: proj.price || '',
      location: proj.location || '',
      city: proj.city || 'Indore',
      heroImage: proj.heroImage || '',
      shortDesc: proj.shortDesc || '',
      totalUnits: proj.specifications?.totalUnits || '120 Units',
      configurations: proj.specifications?.configurations || '2 & 3 BHK',
      possession: proj.specifications?.possession || '2026'
    });
    setIsAddProjectModalOpen(true);
  };

  const handleSaveProjectSubmit = async (e) => {
    e.preventDefault();
    if (!projectForm.name || !projectForm.location) {
      showToast('Project Name and Location are required!', 'error');
      return;
    }

    const payload = {
      ...projectForm,
      id: editingProject ? editingProject.id : `proj-${Date.now()}`,
      specifications: {
        totalUnits: projectForm.totalUnits,
        configurations: projectForm.configurations,
        possession: projectForm.possession
      }
    };

    if (editingProject) {
      await updateProject(editingProject.id, payload);
    } else {
      await addProject(payload);
    }

    setIsAddProjectModalOpen(false);
    setEditingProject(null);
  };

  const handleDeleteProjectConfirm = async (id) => {
    await deleteProject(id);
    setDeletingProjectId(null);
  };

  const handleVisitStatusChange = (id, newStatus) => {
    setMockVisits((prev) => prev.map((v) => (v.id === id ? { ...v, status: newStatus } : v)));
    showToast(`Site visit ${id} status updated to ${newStatus}`, 'info');
  };

  // Metrics Data
  const totalLeads = leads.length;
  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const convertedLeadsCount = leads.filter(l => l.status === 'Converted').length;
  const conversionRate = totalLeads > 0 ? ((convertedLeadsCount / totalLeads) * 100).toFixed(1) : '0.0';

  return (
    <div className="min-h-screen bg-background text-ink pb-24" style={{ paddingTop: '8.5rem' }}>
      <div className="container-custom">

        {/* Top Header Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-accent/35 mb-8 shadow-2xl bg-surface/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-accent text-xs font-extrabold uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span>Gurukripa Arcon — Admin Management Console</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-bold text-ink">
              Executive Portal Dashboard
            </h1>
            <p className="text-ink-secondary text-xs sm:text-sm">
              Real-time property inventory, CRM prospect leads, and executive site visit schedule.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsAddLeadModalOpen(true)}
              className="btn-gold text-xs px-4 py-2.5 flex items-center gap-2 shadow-lg"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Prospect</span>
            </button>
            <div className="bg-muted px-4 py-2 rounded-2xl border border-accent/20 text-xs font-semibold text-accent flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Active System: Live Sync</span>
            </div>
          </div>
        </div>

        {/* Layout Grid: Left Navigation Sidebar & Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation (3 cols) */}
          <aside className="lg:col-span-3 space-y-3">
            <div className="glass-panel p-4 rounded-3xl border border-accent/25 bg-surface/80 shadow-xl space-y-2 sticky top-32">
              <div className="px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-accent">
                Admin Controls
              </div>

              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-accent text-white shadow-md font-bold'
                    : 'text-ink-secondary hover:text-ink hover:bg-muted'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Overview & Analytics</span>
              </button>

              <button
                onClick={() => setActiveTab('leads')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'leads'
                    ? 'bg-accent text-white shadow-md font-bold'
                    : 'text-ink-secondary hover:text-ink hover:bg-muted'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4" />
                  <span>Lead CRM Portal</span>
                </div>
                {newLeadsCount > 0 && (
                  <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-extrabold animate-pulse">
                    {newLeadsCount} New
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'projects'
                    ? 'bg-accent text-white shadow-md font-bold'
                    : 'text-ink-secondary hover:text-ink hover:bg-muted'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4" />
                  <span>Property Inventory</span>
                </div>
                <span className="text-[10px] text-ink-muted">{projects.length} Properties</span>
              </button>

              <button
                onClick={() => setActiveTab('visits')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'visits'
                    ? 'bg-accent text-white shadow-md font-bold'
                    : 'text-ink-secondary hover:text-ink hover:bg-muted'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4" />
                  <span>Site Visits Manager</span>
                </div>
                <span className="bg-accent/20 text-accent text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {mockVisits.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('brochures')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'brochures'
                    ? 'bg-accent text-white shadow-md font-bold'
                    : 'text-ink-secondary hover:text-ink hover:bg-muted'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Brochure Requests</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'settings'
                    ? 'bg-accent text-white shadow-md font-bold'
                    : 'text-ink-secondary hover:text-ink hover:bg-muted'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>System Settings</span>
              </button>
            </div>
          </aside>

          {/* Main Content Dashboard Area (9 cols) */}
          <main className="lg:col-span-9 space-y-6">

            {/* TAB 1: OVERVIEW & ANALYTICS */}
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                
                {/* 4 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  <div className="glass-panel p-5 rounded-3xl border border-accent/30 bg-surface shadow-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-ink-muted">Total Leads</span>
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-ink">{totalLeads}</div>
                    <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Live inquiries capture active</span>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-3xl border border-accent/30 bg-surface shadow-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-ink-muted">Active Properties</span>
                      <Building className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-3xl font-bold text-ink">{projects.length}</div>
                    <div className="text-[11px] text-ink-secondary font-medium">
                      Across 8 prime locations
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-3xl border border-accent/30 bg-surface shadow-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-ink-muted">Scheduled Visits</span>
                      <Calendar className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="text-3xl font-bold text-ink">{mockVisits.length}</div>
                    <div className="text-[11px] text-indigo-300 font-medium">
                      Upcoming this week
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-3xl border border-accent/30 bg-surface shadow-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-ink-muted">Conversion Rate</span>
                      <PieChart className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-3xl font-bold text-emerald-400">{conversionRate}%</div>
                    <div className="text-[11px] text-emerald-400 font-medium">
                      {convertedLeadsCount} deals closed successfully
                    </div>
                  </div>
                </div>

                {/* Status Distribution Bars & Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Status Breakdown Bar */}
                  <div className="glass-panel p-6 rounded-3xl border border-accent/35 bg-surface shadow-xl space-y-5">
                    <h3 className="font-heading text-lg font-bold text-ink flex items-center justify-between">
                      <span>Lead Status Breakdown</span>
                      <span className="text-xs font-mono text-accent">Total: {totalLeads}</span>
                    </h3>
                    <div className="space-y-4">
                      {statuses.map((status) => {
                        const count = leads.filter(l => l.status === status).length;
                        const pct = totalLeads > 0 ? Math.round((count / totalLeads) * 100) : 0;
                        return (
                          <div key={status} className="space-y-1.5">
                            <div className="flex justify-between text-xs font-semibold">
                              <span className="text-ink-secondary">{status}</span>
                              <span className="text-ink font-mono">{count} ({pct}%)</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-accent transition-all duration-500 rounded-full"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recent Activity List */}
                  <div className="glass-panel p-6 rounded-3xl border border-accent/35 bg-surface shadow-xl space-y-5">
                    <h3 className="font-heading text-lg font-bold text-ink">Recent Lead Submissions</h3>
                    <div className="space-y-3">
                      {leads.slice(0, 5).map((lead) => (
                        <div key={lead.id} className="p-3.5 rounded-2xl bg-muted/60 border border-accent/15 flex items-center justify-between text-xs">
                          <div className="space-y-0.5">
                            <div className="font-bold text-ink flex items-center gap-2">
                              <span>{lead.name}</span>
                              <span className="text-[10px] font-mono text-accent">{lead.id}</span>
                            </div>
                            <div className="text-ink-secondary text-[11px]">{lead.projectName} • {lead.type}</div>
                          </div>
                          <span className={`px-2.5 py-1 rounded-full font-bold border ${getStatusBadgeClass(lead.status)} text-[10px]`}>
                            {lead.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAB 2: LEAD CRM MANAGEMENT */}
            {activeTab === 'leads' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                
                {/* Search & Filters */}
                <div className="glass-panel p-6 rounded-3xl border border-accent/35 bg-surface shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h2 className="font-heading text-xl font-bold text-ink">Lead CRM Records</h2>
                    <div className="text-xs text-ink-muted">Showing {filteredLeads.length} of {leads.length} leads</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="relative">
                      <Search className="w-4 h-4 text-accent absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="Search name, email, ticket..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="form-input text-xs pl-10 py-2.5"
                      />
                    </div>

                    <select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="form-select text-xs"
                    >
                      {leadTypes.map((t) => (
                        <option key={t} value={t}>Type: {t}</option>
                      ))}
                    </select>

                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="form-select text-xs"
                    >
                      <option value="All">All Statuses</option>
                      {statuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Leads Table */}
                <div className="glass-panel rounded-3xl border border-accent/35 bg-surface shadow-xl overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted text-accent font-extrabold uppercase border-b border-accent/30 tracking-wider text-[11px]">
                        <th className="p-4">ID</th>
                        <th className="p-4">Prospect</th>
                        <th className="p-4">Contact Details</th>
                        <th className="p-4">Inquiry Category</th>
                        <th className="p-4">Project</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent/15">
                      {filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="p-8 text-center text-ink-muted">
                            No lead records match your search or filter options.
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-muted/70 transition-colors">
                            <td className="p-4 font-mono font-bold text-accent">{lead.id}</td>
                            <td className="p-4 font-bold text-ink">{lead.name}</td>
                            <td className="p-4 space-y-1 text-ink-secondary">
                              <div className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-accent" />{lead.phone}</div>
                              <div className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-accent" />{lead.email}</div>
                            </td>
                            <td className="p-4">
                              <span className="badge-gold text-[10px]">{lead.type}</span>
                            </td>
                            <td className="p-4 font-medium text-ink-secondary">{lead.projectName}</td>
                            <td className="p-4">
                              <span className={`px-2.5 py-1 rounded-full font-bold border ${getStatusBadgeClass(lead.status)} text-[10px]`}>
                                {lead.status}
                              </span>
                            </td>
                            <td className="p-4 text-center space-x-2">
                              <select
                                value={lead.status}
                                onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                                className="bg-muted border border-accent/30 text-accent font-bold rounded-xl px-2.5 py-1 text-[11px] focus:outline-none cursor-pointer"
                              >
                                {statuses.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                              <button
                                onClick={() => setSelectedLeadModal(lead)}
                                className="p-1.5 rounded-lg bg-accent/15 text-accent hover:bg-accent hover:text-white transition-colors"
                                title="View Details"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

              </motion.div>
            )}

            {/* TAB 3: PROPERTY INVENTORY */}
            {activeTab === 'projects' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                
                {/* Project Filters & Add Action */}
                <div className="glass-panel p-6 rounded-3xl border border-accent/35 bg-surface shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-ink">Property Portfolio</h2>
                    <p className="text-xs text-ink-muted mt-0.5">Manage real-time luxury property cards, pricing, and live inventory.</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <select
                      value={projectCategoryFilter}
                      onChange={(e) => setProjectCategoryFilter(e.target.value)}
                      className="form-select text-xs py-2"
                    >
                      <option value="All">All Categories</option>
                      <option value="Premium Apartments">Premium Apartments</option>
                      <option value="Affordable Housing">Affordable Housing</option>
                      <option value="Luxury Villas">Luxury Villas</option>
                      <option value="Premium Township">Premium Township</option>
                      <option value="Commercial Complex">Commercial Complex</option>
                      <option value="Residential Plots">Residential Plots</option>
                    </select>

                    <select
                      value={projectStatusFilter}
                      onChange={(e) => setProjectStatusFilter(e.target.value)}
                      className="form-select text-xs py-2"
                    >
                      <option value="All">All Property Statuses</option>
                      <option value="Ready to Move">Ready to Move</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="Launching Soon">Launching Soon</option>
                    </select>

                    <button
                      onClick={handleOpenAddProjectModal}
                      className="btn-gold text-xs py-2 px-4 font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Property Card</span>
                    </button>
                  </div>
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProjects.length === 0 ? (
                    <div className="col-span-full card-panel p-12 text-center rounded-3xl space-y-4 border border-dashed border-border">
                      <Building2 className="w-12 h-12 text-accent mx-auto opacity-60" />
                      <h3 className="font-heading text-xl font-bold text-ink">No Properties Found</h3>
                      <p className="text-xs text-ink-muted">Add a new property card or adjust your filter parameters.</p>
                      <button onClick={handleOpenAddProjectModal} className="btn-gold text-xs px-5 py-2.5 font-bold">
                        <Plus className="w-4 h-4" />
                        <span>Add Property Card</span>
                      </button>
                    </div>
                  ) : (
                    filteredProjects.map((project) => (
                      <div key={project.id} className="glass-panel rounded-3xl border border-accent/35 overflow-hidden bg-surface shadow-lg flex flex-col justify-between group hover:border-accent transition-all">
                        <div>
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={project.heroImage}
                              alt={project.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-80" />

                            <span className="absolute top-3 right-3 bg-background/90 text-accent border border-accent/40 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                              {project.status}
                            </span>

                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                              <span className="badge-gold text-[10px]">{project.category}</span>
                            </div>
                          </div>

                          <div className="p-5 space-y-3">
                            <div className="space-y-1">
                              <h3 className="font-heading text-lg font-bold text-ink group-hover:text-accent transition-colors">{project.name}</h3>
                              <p className="text-ink-secondary text-xs flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                                <span>{project.location}, {project.city}</span>
                              </p>
                            </div>

                            <div className="bg-muted/70 p-3 rounded-2xl border border-accent/15 space-y-1.5 text-xs">
                              <div className="flex justify-between font-medium">
                                <span className="text-ink-muted">Total Units:</span>
                                <span className="font-bold text-ink">{project.specifications?.totalUnits || '120'}</span>
                              </div>
                              <div className="flex justify-between font-medium">
                                <span className="text-ink-muted">Configurations:</span>
                                <span className="font-bold text-ink">{project.specifications?.configurations || '2 & 3 BHK'}</span>
                              </div>
                              <div className="flex justify-between font-medium">
                                <span className="text-ink-muted">Pricing Band:</span>
                                <span className="font-extrabold text-accent">{project.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 pt-0 space-y-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedProjectModal(project)}
                              className="btn-secondary flex-1 text-xs py-2 text-center font-semibold"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View</span>
                            </button>
                            <button
                              onClick={() => handleOpenEditProjectModal(project)}
                              className="bg-accent/15 text-accent border border-accent/30 hover:bg-accent hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                              title="Edit Property"
                            >
                              <Edit className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => setDeletingProjectId(project.id)}
                              className="bg-rose-500/15 text-rose-400 border border-rose-500/30 hover:bg-rose-600 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                              title="Delete Property"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

              </motion.div>
            )}

            {/* TAB 4: SITE VISITS MANAGER */}
            {activeTab === 'visits' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                
                <div className="glass-panel p-6 rounded-3xl border border-accent/35 bg-surface shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-ink">Scheduled Property Site Visits</h2>
                    <p className="text-xs text-ink-muted">Manage client site visits and assigned relationship executives.</p>
                  </div>

                  <select
                    value={visitStatusFilter}
                    onChange={(e) => setVisitStatusFilter(e.target.value)}
                    className="form-select text-xs py-2"
                  >
                    <option value="All">All Visit Statuses</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="glass-panel rounded-3xl border border-accent/35 bg-surface shadow-xl overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted text-accent font-extrabold uppercase border-b border-accent/30 tracking-wider text-[11px]">
                        <th className="p-4">Visit ID</th>
                        <th className="p-4">Client Name</th>
                        <th className="p-4">Target Property</th>
                        <th className="p-4">Date & Time</th>
                        <th className="p-4">Pickup Vehicle</th>
                        <th className="p-4">Executive</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent/15">
                      {mockVisits
                        .filter(v => visitStatusFilter === 'All' || v.status === visitStatusFilter)
                        .map((visit) => (
                          <tr key={visit.id} className="hover:bg-muted/70 transition-colors">
                            <td className="p-4 font-mono font-bold text-accent">{visit.id}</td>
                            <td className="p-4 font-bold text-ink">{visit.name}</td>
                            <td className="p-4 font-medium text-ink-secondary">{visit.project}</td>
                            <td className="p-4 text-ink-secondary font-mono">{visit.date} ({visit.time})</td>
                            <td className="p-4">
                              {visit.cabNeeded ? (
                                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-bold">Cab Requested</span>
                              ) : (
                                <span className="text-ink-muted">Self Driving</span>
                              )}
                            </td>
                            <td className="p-4 font-semibold text-accent">{visit.executive}</td>
                            <td className="p-4">
                              <span className={`px-2.5 py-1 rounded-full font-bold border text-[10px] ${
                                visit.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                                visit.status === 'Pending' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                                'bg-gray-500/20 text-gray-300 border-gray-500/30'
                              }`}>
                                {visit.status}
                              </span>
                            </td>
                            <td className="p-4 text-center">
                              <select
                                value={visit.status}
                                onChange={(e) => handleVisitStatusChange(visit.id, e.target.value)}
                                className="bg-muted border border-accent/30 text-accent font-bold rounded-xl px-2 py-1 text-[11px] focus:outline-none cursor-pointer"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Completed">Completed</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

              </motion.div>
            )}

            {/* TAB 5: BROCHURE REQUESTS */}
            {activeTab === 'brochures' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="glass-panel p-6 rounded-3xl border border-accent/35 bg-surface shadow-xl space-y-2">
                  <h2 className="font-heading text-xl font-bold text-ink">Brochure & Floor Plan Downloads</h2>
                  <p className="text-xs text-ink-muted">Prospects who requested digital brochures and investment decks.</p>
                </div>

                <div className="glass-panel rounded-3xl border border-accent/35 bg-surface shadow-xl p-6">
                  <div className="space-y-4">
                    {[
                      { id: 'BR-101', name: 'Alok Roy', email: 'alok.roy@example.com', project: 'Skyline Heights 1', date: '2026-09-08' },
                      { id: 'BR-102', name: 'Manish Soni', email: 'm.soni@example.com', project: 'Royal Courtyard 3', date: '2026-09-07' },
                      { id: 'BR-103', name: 'Sanjay Jain', email: 'sanjay.jain@example.com', project: 'Emerald Residency 7', date: '2026-09-06' }
                    ].map((b) => (
                      <div key={b.id} className="p-4 rounded-2xl bg-muted/60 border border-accent/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                        <div className="space-y-1">
                          <div className="font-bold text-ink flex items-center gap-2">
                            <span>{b.name}</span>
                            <span className="text-accent font-mono">({b.email})</span>
                          </div>
                          <div className="text-ink-secondary">Requested Brochure for <strong>{b.project}</strong> on {b.date}</div>
                        </div>
                        <button
                          onClick={() => showToast(`Resent brochure link to ${b.email}`, 'success')}
                          className="btn-gold text-[10px] py-1.5 px-3 flex items-center gap-1.5 self-start sm:self-auto"
                        >
                          <Download className="w-3 h-3" />
                          <span>Resend Email</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 6: SETTINGS */}
            {activeTab === 'settings' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="glass-panel p-6 rounded-3xl border border-accent/35 bg-surface shadow-xl space-y-6">
                  <h2 className="font-heading text-xl font-bold text-ink">System & Data Preferences</h2>
                  
                  <div className="space-y-4 text-xs">
                    <div className="p-4 rounded-2xl bg-muted/50 border border-accent/20 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-ink">Instant Email Alerts for New Leads</div>
                        <div className="text-ink-muted">Send notification email to sales manager whenever a lead is captured.</div>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-500 cursor-pointer" />
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/50 border border-accent/20 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-ink">Auto Lead Round-Robin Assignment</div>
                        <div className="text-ink-muted">Automatically cycle incoming leads to online relationship managers.</div>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-500 cursor-pointer" />
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/50 border border-accent/20 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-ink">SMS Site Visit Reminder</div>
                        <div className="text-ink-muted">Dispatch automatic SMS to client 2 hours before site visit schedule.</div>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-500 cursor-pointer" />
                    </div>

                    {/* Data Reset Action */}
                    <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="font-bold text-rose-400 text-sm flex items-center gap-2">
                          <RotateCcw className="w-4 h-4" />
                          <span>Reset Property Portfolio to Default Seed Data</span>
                        </div>
                        <div className="text-ink-muted text-xs mt-0.5">
                          Restore initial sample luxury towers if project list is cleared or corrupted.
                        </div>
                      </div>
                      <button
                        onClick={async () => {
                          await resetProjects();
                          showToast('Property portfolio reset to default seed data!', 'info');
                        }}
                        className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shrink-0"
                      >
                        Reset Properties
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </main>
        </div>

      </div>

      {/* MODAL 1: ADD NEW LEAD */}
      <AnimatePresence>
        {isAddLeadModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-accent/40 bg-surface shadow-2xl w-full max-w-lg space-y-5"
            >
              <div className="flex items-center justify-between border-b border-accent/20 pb-4">
                <h3 className="font-heading text-lg font-bold text-ink">Log New Prospect Lead</h3>
                <button onClick={() => setIsAddLeadModalOpen(false)} className="text-ink-muted hover:text-ink">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateLeadSubmit} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-ink">Prospect Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={newLeadData.name}
                    onChange={(e) => setNewLeadData({ ...newLeadData, name: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-ink">Phone Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98260 00000"
                      value={newLeadData.phone}
                      onChange={(e) => setNewLeadData({ ...newLeadData, phone: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-ink">Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={newLeadData.email}
                      onChange={(e) => setNewLeadData({ ...newLeadData, email: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-ink">Lead Classification</label>
                    <select
                      value={newLeadData.type}
                      onChange={(e) => setNewLeadData({ ...newLeadData, type: e.target.value })}
                      className="form-select text-xs"
                    >
                      <option value="Project Enquiry">Project Enquiry</option>
                      <option value="Site Visit">Site Visit</option>
                      <option value="Brochure Request">Brochure Request</option>
                      <option value="Contact Form">Contact Form</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-ink">Associated Project</label>
                    <select
                      value={newLeadData.projectName}
                      onChange={(e) => setNewLeadData({ ...newLeadData, projectName: e.target.value })}
                      className="form-select text-xs"
                    >
                      {projects.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-ink">Inquiry Notes / Remarks</label>
                  <textarea
                    rows="3"
                    placeholder="Enter any customer preference or budget notes..."
                    value={newLeadData.message}
                    onChange={(e) => setNewLeadData({ ...newLeadData, message: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button type="button" onClick={() => setIsAddLeadModalOpen(false)} className="btn-outline-gold text-xs py-2 px-4">
                    Cancel
                  </button>
                  <button type="submit" className="btn-gold text-xs py-2 px-5">
                    Save Prospect Lead
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 2: LEAD DETAILS */}
      <AnimatePresence>
        {selectedLeadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-accent/40 bg-surface shadow-2xl w-full max-w-md space-y-5"
            >
              <div className="flex items-center justify-between border-b border-accent/20 pb-3">
                <span className="font-mono font-bold text-accent text-sm">{selectedLeadModal.id}</span>
                <button onClick={() => setSelectedLeadModal(null)} className="text-ink-muted hover:text-ink">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <h3 className="text-base font-bold font-heading text-ink">{selectedLeadModal.name}</h3>
                  <div className="text-ink-secondary">{selectedLeadModal.projectName} • {selectedLeadModal.type}</div>
                </div>

                <div className="bg-muted p-4 rounded-2xl border border-accent/20 space-y-2">
                  <div><strong>Phone:</strong> {selectedLeadModal.phone}</div>
                  <div><strong>Email:</strong> {selectedLeadModal.email}</div>
                  <div><strong>Status:</strong> {selectedLeadModal.status}</div>
                  {selectedLeadModal.preferredDate && <div><strong>Preferred Date:</strong> {selectedLeadModal.preferredDate}</div>}
                  {selectedLeadModal.notes && <div><strong>Notes:</strong> {selectedLeadModal.notes}</div>}
                </div>
              </div>

              <button onClick={() => setSelectedLeadModal(null)} className="btn-gold w-full text-xs py-2">
                Close View
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 3: PROJECT DETAILS */}
      <AnimatePresence>
        {selectedProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-6 rounded-3xl border border-accent/40 bg-surface shadow-2xl w-full max-w-lg space-y-4"
            >
              <div className="flex items-center justify-between border-b border-accent/20 pb-3">
                <h3 className="font-heading text-lg font-bold text-ink">{selectedProjectModal.name}</h3>
                <button onClick={() => setSelectedProjectModal(null)} className="text-ink-muted hover:text-ink">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <img src={selectedProjectModal.heroImage} alt="" className="w-full h-40 object-cover rounded-2xl" />
                <div><strong>Category:</strong> {selectedProjectModal.category}</div>
                <div><strong>Location:</strong> {selectedProjectModal.location}, {selectedProjectModal.city}</div>
                <div><strong>Price Range:</strong> {selectedProjectModal.price}</div>
                <div><strong>RERA Number:</strong> {selectedProjectModal.reraNumber || 'PRM/IND/2026/109'}</div>
                <div><strong>Description:</strong> {selectedProjectModal.shortDesc}</div>
              </div>

              <button onClick={() => setSelectedProjectModal(null)} className="btn-gold w-full text-xs py-2">
                Close Inventory Detail
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 4: ADD / EDIT PROPERTY CARD */}
      <AnimatePresence>
        {isAddProjectModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-accent/40 bg-surface shadow-2xl w-full max-w-2xl space-y-5 my-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-accent/20 pb-4">
                <h3 className="font-heading text-xl font-bold text-ink">
                  {editingProject ? 'Edit Property Card' : 'Add New Property Card'}
                </h3>
                <button onClick={() => setIsAddProjectModalOpen(false)} className="text-ink-muted hover:text-ink">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProjectSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-ink">Property Title / Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurukripa Grand Horizon"
                      value={projectForm.name}
                      onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-ink">Category *</label>
                    <select
                      value={projectForm.category}
                      onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                      className="form-select text-xs"
                    >
                      <option value="Premium Apartments">Premium Apartments</option>
                      <option value="Affordable Housing">Affordable Housing</option>
                      <option value="Luxury Villas">Luxury Villas</option>
                      <option value="Premium Township">Premium Township</option>
                      <option value="Commercial Complex">Commercial Complex</option>
                      <option value="Residential Plots">Residential Plots</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-ink">Development Stage *</label>
                    <select
                      value={projectForm.status}
                      onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}
                      className="form-select text-xs"
                    >
                      <option value="Ready to Move">Ready to Move</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="Launching Soon">Launching Soon</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-ink">Price Range *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ₹55 Lakh - ₹95 Lakh"
                      value={projectForm.price}
                      onChange={(e) => setProjectForm({ ...projectForm, price: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-ink">Location / Area *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Super Corridor"
                      value={projectForm.location}
                      onChange={(e) => setProjectForm({ ...projectForm, location: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-ink">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="Indore"
                      value={projectForm.city}
                      onChange={(e) => setProjectForm({ ...projectForm, city: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-ink">Hero Image URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/..."
                    value={projectForm.heroImage}
                    onChange={(e) => setProjectForm({ ...projectForm, heroImage: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-ink">Total Units</label>
                    <input
                      type="text"
                      placeholder="150 Units"
                      value={projectForm.totalUnits}
                      onChange={(e) => setProjectForm({ ...projectForm, totalUnits: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-ink">Configurations</label>
                    <input
                      type="text"
                      placeholder="2, 3 & 4 BHK"
                      value={projectForm.configurations}
                      onChange={(e) => setProjectForm({ ...projectForm, configurations: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-ink">Possession Year</label>
                    <input
                      type="text"
                      placeholder="2027"
                      value={projectForm.possession}
                      onChange={(e) => setProjectForm({ ...projectForm, possession: e.target.value })}
                      className="form-input text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-ink">Short Description</label>
                  <textarea
                    rows="3"
                    placeholder="Brief highlights about amenities, architecture, and luxury features..."
                    value={projectForm.shortDesc}
                    onChange={(e) => setProjectForm({ ...projectForm, shortDesc: e.target.value })}
                    className="form-input text-xs"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3">
                  <button type="button" onClick={() => setIsAddProjectModalOpen(false)} className="btn-outline-gold text-xs py-2 px-5">
                    Cancel
                  </button>
                  <button type="submit" className="btn-gold text-xs py-2 px-6 font-bold">
                    {editingProject ? 'Save Changes' : 'Publish Property Card'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 5: DELETE CONFIRMATION */}
      <AnimatePresence>
        {deletingProjectId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="glass-panel p-6 rounded-3xl border border-rose-500/40 bg-surface shadow-2xl w-full max-w-sm text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto">
                <Trash2 className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">Delete Property Card?</h3>
              <p className="text-xs text-ink-muted">
                Are you sure you want to remove this property card? It will immediately update all live visitor pages.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button onClick={() => setDeletingProjectId(null)} className="btn-outline-gold text-xs py-2 px-4 font-semibold">
                  Cancel
                </button>
                <button onClick={() => handleDeleteProjectConfirm(deletingProjectId)} className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2 px-5 rounded-xl transition-colors">
                  Yes, Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AdminDashboardPage;
