import React, { useState } from 'react';
import { useLead } from '../context/LeadContext';
import { PROJECTS } from '../data/projectsData';
import { Search, MapPin, Grid, Map, Calendar, ArrowRight, SlidersHorizontal, Check } from 'lucide-react';

const ProjectsPage = () => {
  const { setActiveProjectModal, openSiteVisitForProject } = useLead();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'

  const locationOptions = ['All', ...new Set(PROJECTS.map((project) => project.city).filter(Boolean))];
  const categoryOptions = ['All', ...new Set(PROJECTS.map((project) => project.category).filter(Boolean))];
  const statusOptions = ['All', ...new Set(PROJECTS.map((project) => project.status).filter(Boolean))];

  const filteredProjects = PROJECTS.filter((project) => {
    if (searchTerm && !project.name.toLowerCase().includes(searchTerm.toLowerCase()) && !project.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    if (selectedLocation !== 'All') {
      const selectedLocationValue = selectedLocation.toLowerCase();
      const matchesCity = project.city.toLowerCase().includes(selectedLocationValue);
      const matchesLocation = project.location.toLowerCase().includes(selectedLocationValue);

      if (!matchesCity && !matchesLocation) {
        return false;
      }
    }

    if (selectedCategory !== 'All' && project.category !== selectedCategory) {
      return false;
    }
    if (selectedStatus !== 'All' && project.status !== selectedStatus) {
      return false;
    }
    return true;
  });

  return (
    <div className="page-inner">
      
      {/* Projects Hero */}
      <section className="container-custom space-y-4">
        <span className="badge-gold">Central Project Discovery Platform</span>
        <h1 className="font-heading text-4xl sm:text-6xl font-bold text-ink">
          Benchmark <span className="text-gold-gradient">Real Estate Projects</span>
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
          Filter through our verified ultra-luxury residential towers, biophilic townscapes, and Grade-A executive commercial developments across NCR.
        </p>
      </section>

      {/* Filter & View Switcher Bar */}
      <section className="container-custom">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-accent/40 space-y-8 shadow-2xl bg-surface/85 backdrop-blur-2xl">
          
          {/* Search Input & View Toggles */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="relative w-full lg:w-96">
              <Search className="w-5 h-5 text-accent absolute left-4 top-4" />
              <input
                type="text"
                placeholder="Search project name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input text-sm pl-12 py-3.5"
              />
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
              <span className="text-sm text-ink-muted">
                Showing <strong className="text-accent font-bold">{filteredProjects.length}</strong> Projects
              </span>

              {/* View Switcher */}
              <div className="bg-muted p-1.5 rounded-2xl border border-accent/35 flex items-center gap-1.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    viewMode === 'grid' ? 'bg-accent text-[var(--text-inverse)] shadow-md' : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span>Grid</span>
                </button>

                <button
                  onClick={() => setViewMode('map')}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    viewMode === 'map' ? 'bg-accent text-[var(--text-inverse)] shadow-md' : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  <Map className="w-4 h-4" />
                  <span>Interactive Map</span>
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Filters (Location, Approved Category, Status) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-accent/25 pt-6">
            <div className="form-group mb-0">
              <label className="form-label">Location / Corridor</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="form-select"
              >
                {locationOptions.map((location) => (
                  <option key={location} value={location}>
                    {location === 'All' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group mb-0">
              <label className="form-label">Approved Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-select"
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Approved Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group mb-0">
              <label className="form-label">Development Stage</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="form-select"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status === 'All' ? 'All Stages' : status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main View: Grid vs Interactive Map */}
      <section className="container-custom">
        {viewMode === 'map' ? (
          /* Interactive Simulated Map Pin View */
          <div className="bg-surface rounded-3xl border border-accent/35 p-8 min-h-[550px] relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#A67C52_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative z-10 flex items-center justify-between bg-muted/90 p-5 rounded-2xl border border-accent/30 backdrop-blur-md">
              <div className="text-sm text-ink font-bold flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Gurukripa NCR Interactive GIS Map Overview</span>
              </div>
              <span className="badge-gold">Real-Time Location Pins</span>
            </div>

            {/* Map Pins Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setActiveProjectModal(p)}
                  className="bg-muted p-6 rounded-2xl border border-accent/40 hover:border-accent cursor-pointer space-y-3 shadow-xl hover:scale-105 transition-all"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-accent font-bold">📍 {p.city}</span>
                    <span className="badge-status status-ready text-[10px]">{p.status}</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-ink">{p.name}</h4>
                  <div className="text-xs text-ink-muted">{p.location}</div>
                  <div className="text-sm font-extrabold text-accent pt-1">{p.price}</div>
                </div>
              ))}
            </div>

            <div className="relative z-10 text-center text-xs text-ink-muted">
              Click any project pin above to load full RERA disclosures, floor plans, and site visit booking.
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-24 bg-surface rounded-3xl border border-accent/25 space-y-4">
                <Search className="w-12 h-12 text-accent mx-auto" />
                <h3 className="font-heading text-3xl font-bold text-ink">No Projects Found</h3>
                <p className="text-sm text-ink-muted">Try resetting your filter parameters to view all available listings.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLocation('All');
                    setSelectedCategory('All');
                    setSelectedStatus('All');
                  }}
                  className="btn-gold text-xs px-6 py-3 font-bold"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div key={project.id} className="glass-card overflow-hidden flex flex-col group border border-accent/20 hover:border-accent/60 bg-surface">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-90" />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="badge-gold text-xs">{project.category}</span>
                      <span className={`badge-status ${
                        project.status === 'Ready to Move' ? 'status-ready' : 'status-ongoing'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-ink font-semibold">
                      <div className="flex items-center gap-1.5 bg-muted/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-accent/30">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span>{project.location}, {project.city}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-bold text-ink group-hover:text-accent transition-colors leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-sm text-ink-secondary leading-relaxed line-clamp-2">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div className="border-t border-accent/20 pt-5 space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="text-xs uppercase text-ink-muted font-bold tracking-wider">Price Band</div>
                        <div className="text-base font-extrabold text-accent">{project.price}</div>
                      </div>

                      <div className="flex items-center gap-3 pt-1">
                        <button
                          onClick={() => setActiveProjectModal(project)}
                          className="btn-secondary flex-1 text-xs py-3 font-semibold"
                        >
                          <span>View Details</span>
                        </button>

                        <button
                          onClick={() => openSiteVisitForProject(project)}
                          className="btn-gold flex-1 text-xs py-3 font-bold"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book Visit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>

    </div>
  );
};

export default ProjectsPage;
