import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';

import Project from './models/Project.js';
import Blog from './models/Blog.js';
import Career from './models/Career.js';
import Company from './models/Company.js';
import Media from './models/Media.js';

dotenv.config();

const REAL_ESTATE_IMAGES = [
  {
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600566753086-35f13ff07742?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

const INITIAL_PROJECTS = [
  {
    id: 'proj-1',
    name: 'Gurukripa Grand Residences',
    slug: 'gurukripa-grand-residences',
    location: 'Golf Course Road Corridor',
    city: 'Gurugram',
    state: 'Haryana',
    category: 'Luxury Sky Residences',
    status: 'Under Construction',
    price: '₹2.8 Cr - ₹5.4 Cr',
    pricingVisibility: 'Visible',
    heroImage: REAL_ESTATE_IMAGES[0].heroImage,
    gallery: REAL_ESTATE_IMAGES[0].gallery,
    shortDesc: 'Ultra-luxury sky apartments with private elevator foyers, double-height balcony gardens, and panoramic city skylines.',
    longDesc: 'Gurukripa Grand Residences sets an unprecedented benchmark for biophilic architecture in NCR. Engineered with IS 1893 seismic compliance, 80% open greens, and private sky decks.',
    highlights: ['Private Elevator Foyer', 'IGBC Platinum Certified', 'Temperature-Controlled Pool', 'Sub-Zero Acoustic Windows'],
    specifications: {
      projectArea: '14.5 Acres',
      towers: '4 Iconic Towers (42 Floors)',
      totalUnits: '280 Ultra-Exclusive Suites',
      configurations: '3, 4 & 5 BHK Penthouse Suites',
      possession: 'December 2027'
    },
    amenities: [
      { name: 'Sky Club & Lounge', icon: 'Sparkles', category: 'Leisure' },
      { name: 'Olympic-Size Swimming Pool', icon: 'Waves', category: 'Fitness' },
      { name: 'Private Concierge', icon: 'ShieldCheck', category: 'Service' },
      { name: 'Solar Micro-Grid', icon: 'Leaf', category: 'Eco' }
    ],
    floorPlans: [
      { planType: '3 BHK Sky Residence', area: '2,850 Sq. Ft.', price: '₹2.80 Cr' },
      { planType: '4 BHK Grand Suite', area: '3,950 Sq. Ft.', price: '₹4.10 Cr' },
      { planType: '5 BHK Duplex Penthouse', area: '5,800 Sq. Ft.', price: '₹5.40 Cr' }
    ],
    connectivity: [
      { spot: 'Rapid Metro Station', distance: '3 Mins' },
      { spot: 'Cyber City Hub', distance: '10 Mins' },
      { spot: 'IGI Airport T3', distance: '22 Mins' }
    ],
    reraNumber: 'HRERA-GGM-2024-892',
    legalDisclosure: 'Approved by DTCP Haryana. Public escrow account verified under HRERA regulations.',
    hasVirtualTour: true,
    hasVideo: true,
    brochureUrl: '#download-brochure'
  },
  {
    id: 'proj-2',
    name: 'Gurukripa Eco Enclave',
    slug: 'gurukripa-eco-enclave',
    location: 'Sector 150',
    city: 'Noida',
    state: 'Uttar Pradesh',
    category: 'Green Townships',
    status: 'Ready to Move',
    price: '₹1.15 Cr - ₹2.40 Cr',
    pricingVisibility: 'Visible',
    heroImage: REAL_ESTATE_IMAGES[1].heroImage,
    gallery: REAL_ESTATE_IMAGES[1].gallery,
    shortDesc: 'A zero-liquid discharge eco-township flanked by 12 acres of urban forest and organic wellness trail.',
    longDesc: 'Designed for families prioritizing health, air purity, and open spaces. Gurukripa Eco Enclave integrates solar roof grids, rainwater harvesting reservoirs, and low-VOC interior paints.',
    highlights: ['12-Acre Central Bio-Park', 'Zero Liquid Discharge System', 'Cricket Academy & Tennis Courts', 'EV Charging Station at Every Bay'],
    specifications: {
      projectArea: '22 Acres',
      towers: '8 Residential Towers',
      totalUnits: '640 Residences',
      configurations: '2, 3 & 4 BHK Golf Apartments',
      possession: 'Ready to Move'
    },
    amenities: [
      { name: 'Organic Farming Allotments', icon: 'Leaf', category: 'Eco' },
      { name: 'Heated Indoor Lap Pool', icon: 'Waves', category: 'Fitness' },
      { name: 'Multi-Tier Security', icon: 'ShieldCheck', category: 'Safety' }
    ],
    floorPlans: [
      { planType: '2 BHK Eco Suite', area: '1,350 Sq. Ft.', price: '₹1.15 Cr' },
      { planType: '3 BHK Park Residence', area: '1,950 Sq. Ft.', price: '₹1.75 Cr' }
    ],
    connectivity: [
      { spot: 'Noida-Greater Noida Expressway', distance: '2 Mins' },
      { spot: 'Jewar International Airport', distance: '25 Mins' }
    ],
    reraNumber: 'UPRERAPRJ78210',
    legalDisclosure: 'Completed project with full Occupancy Certificate (OC) issued by Noida Authority.',
    hasVirtualTour: true,
    hasVideo: true,
    brochureUrl: '#download-brochure'
  },
  {
    id: 'proj-3',
    name: 'Gurukripa Capital Square',
    slug: 'gurukripa-capital-square',
    location: 'Golf Course Extension Road',
    city: 'Gurugram',
    state: 'Haryana',
    category: 'Commercial Hubs',
    status: 'Under Construction',
    price: '₹85 Lakh - ₹4.50 Cr',
    pricingVisibility: 'Visible',
    heroImage: REAL_ESTATE_IMAGES[2].heroImage,
    gallery: REAL_ESTATE_IMAGES[2].gallery,
    shortDesc: 'Grade-A office spaces, high-street retail promenades, and gourmet dining pavilions in Gurugrams business center.',
    longDesc: 'A landmark commercial development built to house Fortune 500 regional offices and luxury boutique retail outlets.',
    highlights: ['Double-Glazed Facade', 'High-Speed Smart Elevators', 'Multi-Level Subterranean Parking', 'Rooftop Helipad Provision'],
    specifications: {
      projectArea: '8.2 Acres',
      towers: '2 Commercial Towers',
      totalUnits: '190 Executive Suites',
      configurations: 'Retail Outlets & Grade-A Offices',
      possession: 'Q3 2026'
    },
    amenities: [
      { name: 'Executive Business Center', icon: 'Building2', category: 'Business' },
      { name: '24/7 Power Backup', icon: 'Sparkles', category: 'Utility' }
    ],
    floorPlans: [
      { planType: 'Boutique Retail Store', area: '650 Sq. Ft.', price: '₹85 Lakh' },
      { planType: 'Grade-A Corporate Floor', area: '4,500 Sq. Ft.', price: '₹4.50 Cr' }
    ],
    connectivity: [
      { spot: 'Southern Peripheral Road (SPR)', distance: '1 Min' },
      { spot: 'DLF Cyber City', distance: '12 Mins' }
    ],
    reraNumber: 'HRERA-GGM-2024-114',
    legalDisclosure: 'RERA approved corporate commercial development.',
    hasVirtualTour: true,
    hasVideo: false,
    brochureUrl: '#download-brochure'
  }
];

const INITIAL_BLOGS = [
  {
    id: 'blog-1',
    title: 'The Evolution of Ultra-Luxury Real Estate in NCR: Trends for 2026',
    slug: 'evolution-luxury-real-estate-ncr-2026',
    category: 'Real Estate Trends',
    date: 'August 24, 2026',
    readTime: '6 min read',
    author: 'Vikram Gurukripa',
    authorRole: 'Head of Architectural Strategy',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    featured: true,
    excerpt: 'How biophilic architecture, high-efficiency smart automation, and private sky decks are redefining buyer expectations across Gurugram and Noida.',
    content: '<p>The luxury real estate landscape in NCR has undergone a fundamental shift. Modern buyers demand environments engineered for total well-being, seamless privacy, and structural longevity.</p><h3>1. Biophilic Integration</h3><p>High-end developments integrate vertical gardens and private balcony gardens into initial blueprints.</p><h3>2. Smart Home Energy Management</h3><p>Ultra-luxury homeowners prioritize automated climate systems and solar energy storage grids.</p>',
    tags: ['Luxury Living', 'Biophilic Design', 'Gurugram Properties', 'Real Estate Investment'],
    relatedProjects: ['Gurukripa Grand Residences', 'Gurukripa Eco Enclave']
  },
  {
    id: 'blog-2',
    title: 'Understanding RERA Disclosures: A Guide for High-Net-Worth Investors',
    slug: 'understanding-rera-disclosures-guide-investors',
    category: 'Legal & RERA',
    date: 'August 12, 2026',
    readTime: '8 min read',
    author: 'Adv. Meenakshi Sundaram',
    authorRole: 'Legal & Regulatory Compliance Lead',
    featuredImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    excerpt: 'A comprehensive checklist on how to verify carpet area calculations, RERA escrow accounts, and title clearance before signing property agreements.',
    content: '<p>Investing in prime real estate requires absolute regulatory transparency. RERA has transformed property acquisition in India into a secure ecosystem.</p>',
    tags: ['RERA Compliance', 'Property Law', 'Investor Safety', 'Documentation'],
    relatedProjects: ['Gurukripa Capital Square']
  },
  {
    id: 'blog-3',
    title: 'Why Golf Course Road Extension Continues to Outperform Market Benchmarks',
    slug: 'why-golf-course-road-extension-outperforms-benchmarks',
    category: 'Investment Guides',
    date: 'July 29, 2026',
    readTime: '5 min read',
    author: 'Rajesh Nair',
    authorRole: 'VP of Real Estate Advisory',
    featuredImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    featured: false,
    excerpt: 'An analysis of infrastructure corridors, commercial hub proximity, and rental yield appreciation along Gurugrams premier residential belt.',
    content: '<p>Golf Course Extension Road has established itself as the undisputed epicenter of premium housing in Gurugram, with consistent quarter-on-quarter capital value growth.</p>',
    tags: ['Location Analysis', 'Gurugram Real Estate', 'Rental Yields'],
    relatedProjects: ['Gurukripa Grand Residences']
  }
];

const INITIAL_CAREERS = [
  {
    id: 'job-1',
    title: 'Senior Structural Engineer - High-Rise Developments',
    department: 'Engineering & Construction',
    location: 'Gurugram Corporate Office',
    type: 'Full-Time',
    experience: '8 - 12 Years',
    summary: 'Lead the structural design audit, seismic engineering compliance, and quality execution of our upcoming 45-story sky residential towers.',
    responsibilities: [
      'Oversee structural design calculations, ETABS models, and foundation engineering.',
      'Coordinate with international architectural consultants and third-party safety auditors.',
      'Ensure strict compliance with IS 1893 seismic standards and IGBC green structural guidelines.',
      'Lead site inspection teams across concrete pour testing and post-tensioning slabs.'
    ],
    requirements: [
      'M.Tech in Structural Engineering from a recognized university.',
      'Minimum 8 years experience in high-rise RCC residential/commercial projects.',
      'Proficiency in ETABS, STAAD Pro, REVIT Structure, and AutoCAD.'
    ],
    qualifications: 'M.Tech / B.Tech Civil & Structural Engineering',
    skills: ['ETABS', 'Seismic Analysis', 'High-Rise RCC', 'Revit Structure', 'Quality Assurance'],
    benefits: ['Competitive Compensation', 'Performance Bonus', 'Comprehensive Health Insurance', 'On-site Transport'],
    salaryStipend: '₹ 18 - 25 LPA',
    status: 'Open'
  },
  {
    id: 'job-2',
    title: 'Luxury Real Estate Advisory Consultant',
    department: 'Sales & Client Relations',
    location: 'Golf Course Road Experience Center',
    type: 'Full-Time',
    experience: '3 - 6 Years',
    summary: 'Deliver bespoke real estate consulting to High-Net-Worth Individuals (HNWIs) and corporate investors across our luxury residential portfolio.',
    responsibilities: [
      'Conduct private property walk-throughs and virtual tour presentations for prospective buyers.',
      'Understand client investment portfolios and suggest optimal residence configurations.',
      'Maintain end-to-end client communication from initial inquiry to property registration.',
      'Collaborate with legal teams to ensure smooth documentation and RERA disclosures.'
    ],
    requirements: [
      'Bachelor Degree in any discipline (MBA preferred).',
      'Proven track record in premium/luxury real estate sales in NCR region.',
      'Exceptional communication, presentation, and negotiation skills.'
    ],
    qualifications: 'Graduate / Post Graduate',
    skills: ['HNWI Sales', 'Client Relationship', 'CRM Tools', 'Property Negotiation', 'RERA Disclosures'],
    benefits: ['Base Salary + Industry-leading Incentives', 'Executive Travel Allowance', 'Luxury Vehicle Lease Support'],
    salaryStipend: '₹ 10 - 16 LPA + Incentives',
    status: 'Open'
  },
  {
    id: 'job-3',
    title: 'Architectural Design Management Intern',
    department: 'Architecture & Design',
    location: 'Gurugram HQ',
    type: 'Internship',
    experience: '0 - 1 Year (Pursuing B.Arch)',
    summary: 'Join our design studio to work on biophilic master planning, 3D architectural rendering, and floor plan optimization.',
    responsibilities: [
      'Assist senior architects in drafting CAD layouts and BIM model updates.',
      'Create high-quality 3D renders and material mood boards for executive client reviews.',
      'Conduct site feasibility studies and biophilic landscape research.'
    ],
    requirements: [
      'Final year student or recent graduate in Bachelor of Architecture (B.Arch).',
      'Strong portfolio in SketchUp, V-Ray, Rhino, Photoshop, and AutoCAD.'
    ],
    qualifications: 'Pursuing B.Arch or Equivalent',
    skills: ['Architectural Rendering', 'SketchUp', 'Photoshop', 'AutoCAD', 'Design Research'],
    benefits: ['Monthly Stipend', 'Mentorship by Chief Architect', 'Certificate and Pre-Placement Offer Opportunity'],
    salaryStipend: 'Stipend: Rs 25,000 / month',
    status: 'Open'
  }
];

const INITIAL_COMPANY = {
  key: 'main_company_info',
  stats: [
    { label: 'Sq. Ft. Delivered', value: '3.5M+', sub: 'Across prime NCR corridors' },
    { label: 'Years of Excellence', value: '18+', sub: 'Unblemished track record' },
    { label: 'Happy Families', value: '1,450+', sub: 'Settled in benchmark homes' },
    { label: 'On-Time Delivery', value: '99.4%', sub: 'Verified construction milestones' }
  ],
  achievements: [
    { value: '18+', title: 'Legacy of trust', desc: 'A long-term commitment to thoughtful real estate across the NCR.' },
    { value: '35+', title: 'Successful projects', desc: 'Residential, township, and commercial developments shaped with care.' },
    { value: '3.5M+', title: 'Sq. ft. developed', desc: 'Considered spaces designed around families, work, and everyday life.' },
    { value: '100%', title: 'Transparent delivery', desc: 'Clear documentation and disciplined milestones from blueprint to handover.' }
  ],
  achievementImages: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85'
  ],
  coreValues: [
    { title: 'Architectural Integrity', desc: 'Uncompromising engineering standards, seismic safety compliance, and premium structural material sourcing.', icon: 'ShieldCheck' },
    { title: 'Transparent Governance', desc: 'Complete RERA compliance, zero hidden fees, and upfront title disclosures for every project.', icon: 'FileText' },
    { title: 'Biophilic Innovation', desc: 'Designing sustainable urban developments with 80% open greens, solar grids, and zero liquid discharge systems.', icon: 'Leaf' },
    { title: 'Customer First Culture', desc: 'Bespoke client hand-holding from project site visit, financing advisory, to key handover and post-possession care.', icon: 'Users' }
  ],
  testimonials: [
    { quote: 'The entire process felt clear and well managed. The team helped us compare layouts, understand the payment plan, and settle into our new home with confidence.', name: 'Aarav Mehta', detail: 'Homeowner, Gurukripa Heights' },
    { quote: 'What stood out was the attention to detail. From the first site visit to handover, every commitment was documented and delivered on time.', name: 'Neha Kapoor', detail: 'Resident, Greenview Township' },
    { quote: 'Gurukripa gave us the confidence to invest from another city. Their advisors were responsive, transparent, and genuinely focused on our priorities.', name: 'Rohan Bhatia', detail: 'Investor, Arcon Business Park' }
  ],
  leadershipTeam: [
    { name: 'Er. Shubham Mishra', role: 'Founder & Chairman', bio: 'Pioneered Gurukripa Arcon India with a vision to revolutionize urban living through timeless architectural craftsmanship.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Er. Shubham Mishra', role: 'Managing Director & CEO', bio: 'Over 22 years of structural engineering expertise guiding corporate expansion, land acquisitions, and green building innovations.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80' },
    { name: 'Er. Shubham Mishra', role: 'Chief Design Officer', bio: 'Former senior architectural consultant with global design accolades, spearheading Gurukripa luxury sky residence aesthetics.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80' }
  ],
  faqItems: [
    { q: 'How do I book a site visit with Gurukripa Arcon India?', a: 'You can book a site visit instantly through our "Book a Site Visit" page or button on any project card. We also provide executive pickup assistance upon request.' },
    { q: 'Are all Gurukripa projects registered under RERA?', a: 'Yes. Every indexable project has full regulatory approval and RERA registration. RERA registration numbers are prominently displayed on project detail views.' },
    { q: 'Can I customize floor plans or apartment finishes before possession?', a: 'For early-stage residential bookings, our interior design team offers bespoke option packages for flooring and automated lighting modules.' },
    { q: 'What is the process for international investors / NRIs?', a: 'We offer a seamless digital purchase ecosystem for NRI investors, including virtual 360 degree walkthroughs, video consultations, legal documentation assistance, and RBI-compliant remittance guidance.' }
  ]
};

const INITIAL_MEDIA = [
  { id: 'media-1', title: 'Unveiling Gurukripa Grand Residences Signature Tower', category: 'Project Images', type: 'image', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', caption: 'Architectural lighting installation at Gurukripa Grand Residences main entrance plaza.', date: 'August 2026' },
  { id: 'media-2', title: 'Gurukripa Wins Excellence in Sustainable Architecture 2026', category: 'Events', type: 'image', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80', caption: 'Leadership team accepting the National Real Estate Conclave Award in New Delhi.', date: 'July 2026' },
  { id: 'media-3', title: 'Walkthrough Tour: Gurukripa Eco Enclave Forest Corridor', category: 'Videos', type: 'video', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Experience the 12-acre biophilic forest trail and rainwater harvest reservoirs.', date: 'June 2026' },
  { id: 'media-4', title: 'Annual Engineers and Architects Foundation Conclave', category: 'Company Activities', type: 'image', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', caption: 'Over 150 structural engineers gathered to review earthquake-resistant seismic advancements.', date: 'May 2026' },
  { id: 'media-5', title: 'Press Release: Strategic Expansion into High-Street Commercial Development', category: 'News & Press', type: 'image', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', caption: 'Official announcement of Gurukripa Capital Square commercial enclave.', date: 'April 2026' }
];

const seedData = async () => {
  try {
    await connectDB();
    console.log('Seeding MongoDB Atlas collections...\n');

    // 1. Projects - use replaceOne to avoid $set + nested schema 'type' conflict
    for (const proj of INITIAL_PROJECTS) {
      await Project.replaceOne({ id: proj.id }, proj, { upsert: true });
    }
    console.log(`✓ Projects seeded: ${INITIAL_PROJECTS.length}`);

    // 2. Blogs
    for (const blog of INITIAL_BLOGS) {
      await Blog.replaceOne({ id: blog.id }, blog, { upsert: true });
    }
    console.log(`✓ Blogs seeded: ${INITIAL_BLOGS.length}`);

    // 3. Careers
    for (const car of INITIAL_CAREERS) {
      await Career.replaceOne({ id: car.id }, car, { upsert: true });
    }
    console.log(`✓ Careers seeded: ${INITIAL_CAREERS.length}`);

    // 4. Company Info
    await Company.replaceOne({ key: 'main_company_info' }, INITIAL_COMPANY, { upsert: true });
    console.log('✓ Company info seeded');

    // 5. Media items
    for (const med of INITIAL_MEDIA) {
      await Media.replaceOne({ id: med.id }, med, { upsert: true });
    }
    console.log(`✓ Media items seeded: ${INITIAL_MEDIA.length}`);

    console.log('\n🌟 MongoDB Atlas Seeding Completed Successfully!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error Seeding Data to MongoDB Atlas:', error.message);
    process.exit(1);
  }
};

seedData();
