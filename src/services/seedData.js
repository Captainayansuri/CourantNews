export const INITIAL_CATEGORIES = [
  { id: 'all', name: 'Home', slug: 'home', icon: 'Home' },
  { id: 'world', name: 'World', slug: 'world', icon: 'Globe' },
  { id: 'national', name: 'National', slug: 'national', icon: 'Flag' },
  { id: 'business', name: 'Business', slug: 'business', icon: 'Briefcase' },
  { id: 'technology', name: 'Technology', slug: 'technology', icon: 'Cpu' },
  { id: 'entertainment', name: 'Entertainment', slug: 'entertainment', icon: 'Film' },
  { id: 'sports', name: 'Sports', slug: 'sports', icon: 'Trophy' },
  { id: 'science', name: 'Science', slug: 'science', icon: 'Atom' },
  { id: 'health', name: 'Health', slug: 'health', icon: 'HeartPulse' },
  { id: 'opinion', name: 'Opinion', slug: 'opinion', icon: 'MessageSquare' },
];

export const INITIAL_ARTICLES = [
  {
    id: 'art-1',
    title: 'Quantum Advantage Milestone: Autonomous AI Micro-Processors Pass Commercial Viability Threshold',
    slug: 'quantum-advantage-milestone-ai-microchips',
    excerpt: 'Engineers achieve stable 1,024-qubit error correction at room temperature, paving the way for instantaneous climate modeling and real-time medical simulation.',
    body: `<p>In a historic leap for computational physics, a international research consortium has announced the deployment of the world's first room-temperature, error-corrected quantum micro-processor operating reliably above 1,000 logical qubits.</p>
    <p>The breakthrough, detailed in today's benchmark paper, eliminates the expensive liquid-helium cooling infrastructure that previously restricted quantum hardware to specialized laboratory basements. Utilizing topological diamond nitrogen-vacancy centers, the chip maintains quantum coherence for over 45 minutes under ambient conditions.</p>
    <blockquote class="story-blockquote">"We have moved beyond theoretical proof-of-concept into the industrial era of quantum processing. Problems that once required ten thousand supercomputing years can now be resolved in seconds."</blockquote>
    <p>Industries spanning grid energy optimization, pharmaceutical enzyme design, and aerodynamic modeling are expected to adopt the technology within the next fiscal quarter.</p>
    <h3>Key Takeaways & Market Impact</h3>
    <ul>
      <li><strong>Energy Consumption:</strong> Reduces data center power draw by an estimated 74% per algorithmic workload.</li>
      <li><strong>Cryptography Transition:</strong> Accelerates the global mandate for post-quantum cryptographic standards.</li>
      <li><strong>Commercial Availability:</strong> Cloud access endpoints opening to registered research partners next month.</li>
    </ul>`,
    hero_image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cleanroom technician holding the newly validated 1,024-qubit room-temperature quantum processor wafer.',
    category: 'technology',
    tags: ['Quantum Computing', 'AI Hardware', 'Semiconductors', 'Breakthrough'],
    status: 'published',
    published_at: '2026-07-23T08:30:00Z',
    updated_at: '2026-07-23T09:15:00Z',
    byline: 'Dr. Elena Vance, Senior Technology Correspondent',
    reading_time: '4 min read',
    featured_flag: true,
    breaking_flag: true,
    editors_pick_flag: true,
    view_count: 4820,
    related_article_ids: ['art-3', 'art-7']
  },
  {
    id: 'art-2',
    title: 'Global Energy Summit Accord Signed: 40 Nations Commit to Next-Gen Fusion Power Grid Integration',
    slug: 'global-energy-summit-fusion-accord',
    excerpt: 'World leaders assemble in Geneva to sign historic treaty establishing unified safety standards and cross-border clean grid interconnects by 2030.',
    body: `<p>Delegates from 40 nations concluded three days of intense negotiations today by signing the Geneva Clean Energy Integration Accord. The agreement sets mandatory targets for merging magnetic-confinement fusion reactors into national transmission grids over the coming decade.</p>
    <p>The summit follows consecutive net-energy-gain records achieved across multiple private and public tokamak installations over the past 18 months.</p>
    <blockquote class="story-blockquote">"This treaty guarantees that clean, boundless energy generation will be shared equitably across borders, preventing regional energy monopolies."</blockquote>
    <p>Financing mechanisms approved during the plenary session include a $120 billion multilateral infrastructure fund tailored for developing nations seeking grid modernization.</p>`,
    hero_image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Interior of the international magnetic fusion reactor torus during plasma containment testing.',
    category: 'world',
    tags: ['Fusion Energy', 'Clean Energy', 'Global Summit', 'Climate Action'],
    status: 'published',
    published_at: '2026-07-23T07:15:00Z',
    updated_at: '2026-07-23T07:15:00Z',
    byline: 'Marcus Vance, Diplomatic Bureau Chief',
    reading_time: '5 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: true,
    view_count: 3105,
    related_article_ids: ['art-1']
  },
  {
    id: 'art-3',
    title: 'Federal Reserve Announces Digital Settlement Architecture Trial for Commercial Banks',
    slug: 'fed-digital-settlement-trial-banks',
    excerpt: 'Central bank initiates pilot program with major financial institutions for instantaneous 24/7 wholesale interbank liquidity settlement.',
    body: `<p>The Federal Reserve System today revealed plans for a pilot wholesale settlement network designed to modernize interbank clearing. Dubbed <em>FedNet Settlement</em>, the system promises zero-latency transactions between member institutions regardless of time zone or weekend market closures.</p>
    <p>Unlike consumer-facing digital currencies, FedNet targets enterprise liquidity management, overnight treasury repurchases, and automated cross-border currency conversion.</p>
    <p>Financial analysts project the infrastructure could save domestic banking operations upwards of $18 billion annually in collateral friction costs.</p>`,
    hero_image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Trading floor displays monitoring real-time liquidity flow metrics during market opening hours.',
    category: 'business',
    tags: ['Banking', 'Federal Reserve', 'Fintech', 'Markets'],
    status: 'published',
    published_at: '2026-07-23T06:00:00Z',
    updated_at: '2026-07-23T06:00:00Z',
    byline: 'Sarah Jenkins, Financial Analyst',
    reading_time: '3 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: true,
    view_count: 2410,
    related_article_ids: ['art-1', 'art-6']
  },
  {
    id: 'art-4',
    title: 'James Webb Space Telescope Captures Atmospheric Water Vapor and Carbon Signatures on Earth-Sized Exoplanet',
    slug: 'jwst-water-vapor-carbon-exoplanet-discovery',
    excerpt: 'Spectroscopic analysis of LHS 475 b reveals dense clouds, water isotopes, and steady atmospheric pressure 41 light-years away.',
    body: `<p>Astrophysicists analyzing transmission spectroscopy data from the James Webb Space Telescope have confirmed the definitive detection of atmospheric water vapor and carbon dioxide on a rocky exoplanet in the habitable zone of a nearby red dwarf star.</p>
    <p>The candidate world, located 41 light-years from Earth, possesses a surface gravity roughly 92% of Earth's and maintains equilibrium temperatures conducive to liquid surface ocean stability.</p>
    <p>Further high-resolution observations scheduled for next spring will search for organic bio-signature traces including methane and nitrous oxide.</p>`,
    hero_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    caption: 'Artist rendering of planetary transit spectroscopy across red dwarf star stellar emissions.',
    category: 'science',
    tags: ['Astronomy', 'JWST', 'Exoplanets', 'NASA'],
    status: 'published',
    published_at: '2026-07-23T05:30:00Z',
    updated_at: '2026-07-23T05:30:00Z',
    byline: 'Prof. David Thorne, Space Science Editor',
    reading_time: '4 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: true,
    view_count: 3890,
    related_article_ids: ['art-1']
  },
  {
    id: 'art-5',
    title: 'Universal mRNA Vaccine Candidate Enters Phase 3 Trials with 98% Efficacy Across Seasonal Strains',
    slug: 'universal-mrna-vaccine-phase-3-trials',
    excerpt: 'Clinical trial results demonstrate broad neutralization against influenza, RSV, and coronaviruses with a single annual booster.',
    body: `<p>A multi-antigen universal vaccine candidate developed using AI-designed lipid nanoparticles has shown exceptional protection across diverse viral strains in clinical trials involving over 25,000 participants.</p>
    <p>The trial data published in the <em>Journal of Immunology & Medicine</em> confirms durable antibody response lasting over 18 months without significant decay.</p>
    <p>Public health authorities anticipate potential fast-track regulatory clearance by late autumn prior to the winter respiratory season.</p>`,
    hero_image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    caption: 'Laboratory researcher preparing high-purity nanoparticle formulations in sterile cleanroom environment.',
    category: 'health',
    tags: ['Medicine', 'Vaccines', 'Public Health', 'Biotech'],
    status: 'published',
    published_at: '2026-07-23T04:45:00Z',
    updated_at: '2026-07-23T04:45:00Z',
    byline: 'Dr. Aris Thorne, Health & Medical Writer',
    reading_time: '4 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: false,
    view_count: 1950,
    related_article_ids: ['art-4']
  },
  {
    id: 'art-6',
    title: 'National Infrastructure Modernization Bill Passes Senate with Bipartisan 84-16 Vote',
    slug: 'national-infrastructure-modernization-bill-passes',
    excerpt: '$450 billion package guarantees high-speed fiber internet, electric vehicle corridor corridors, and resilient flood defense systems nationwide.',
    body: `<p>In a rare display of legislative consensus, the U.S. Senate passed landmark legislation today authorizing $450 billion over six years toward critical transport, communications, and power infrastructure upgrades.</p>
    <p>Key allocations include $85 billion for rural broadband connectivity, $110 billion for high-speed intercity rail networks, and $60 billion for coastal storm surge barrier construction.</p>
    <p>The bill now moves to the White House for executive signature expected later this week.</p>`,
    hero_image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Civil engineering crew supervising bridge structural reinforcement works during highway overhaul.',
    category: 'national',
    tags: ['Congress', 'Infrastructure', 'Policy', 'Transportation'],
    status: 'published',
    published_at: '2026-07-23T03:20:00Z',
    updated_at: '2026-07-23T03:20:00Z',
    byline: 'Rachel Adams, Capitol Hill Reporter',
    reading_time: '3 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: false,
    view_count: 1640,
    related_article_ids: ['art-3']
  },
  {
    id: 'art-7',
    title: 'World Athletics Cup: 18-Year-Old Prodigy Breaks 100m Sprint World Record in Zurich',
    slug: 'world-athletics-cup-100m-world-record',
    excerpt: 'Sensational 9.54-second sprint stuns capacity crowd as new generation of track stars redefines human limits.',
    body: `<p>Zurich witnessed history tonight as 18-year-old sprinter Kaelen Croft shattered the long-standing 100-meter world record, crossing the finish line in a staggering 9.54 seconds under clear skies at Letzigrund Stadium.</p>
    <p>Croft's reaction time off the blocks was recorded at 0.108 seconds, followed by an unprecedented peak stride velocity exceeding 44.2 km/h through the 70-meter mark.</p>
    <blockquote class="story-blockquote">"I felt complete rhythm from the second my foot hit the block. I wasn't running against the clock; I was just flowing with the track."</blockquote>`,
    hero_image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    caption: 'Croft celebrating past the finish line illuminated by stadium floodlights and spectator cameras.',
    category: 'sports',
    tags: ['Track & Field', 'World Record', 'Olympics', 'Sports'],
    status: 'published',
    published_at: '2026-07-22T21:10:00Z',
    updated_at: '2026-07-22T21:10:00Z',
    byline: 'Julian Sterling, Sports Bureau Editor',
    reading_time: '3 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: true,
    view_count: 5210,
    related_article_ids: []
  },
  {
    id: 'art-8',
    title: 'Indie Sci-Fi Film "Chronos Shift" Sweeps Venice International Film Festival Awards',
    slug: 'indie-scifi-chronos-shift-venice-film-festival',
    excerpt: 'Shot on vintage 70mm film with practical effects, director Maya Lin’s temporal thriller takes home the Golden Lion and Best Screenplay.',
    body: `<p>The 83rd Venice International Film Festival concluded with a historic triumph for independent cinema, as Maya Lin's cerebral sci-fi drama <em>Chronos Shift</em> secured four major honors including the coveted Golden Lion for Best Picture.</p>
    <p>Critics praised the film’s atmospheric practical set designs, tactile cinematography, and haunting score composed by ambient pioneer Nils Frahm.</p>
    <p>A global theatrical release is scheduled across 2,400 IMAX screens starting early October.</p>`,
    hero_image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    caption: 'Director Maya Lin addressing the press conference with cast members following the award ceremony.',
    category: 'entertainment',
    tags: ['Cinema', 'Film Festival', 'Venice', 'Culture'],
    status: 'published',
    published_at: '2026-07-22T19:40:00Z',
    updated_at: '2026-07-22T19:40:00Z',
    byline: 'Claire Fontaine, Arts & Culture Critic',
    reading_time: '4 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: false,
    view_count: 1420,
    related_article_ids: []
  },
  {
    id: 'art-9',
    title: 'Opinion: The Case for Architectural Calm in the Era of Hyper-Connected Interfaces',
    slug: 'opinion-case-for-architectural-calm-interfaces',
    excerpt: 'Why digital design must return to whitespace, intentional typography, and respectful information density.',
    body: `<p>We live in an epoch of visual noise. Notifications shimmer like neon billboards, feed algorithms optimize for micro-agitation, and interface real estate is routinely carved up by persistent banners designed to capture fleeting attention spans.</p>
    <p>Yet, when we look back at the origins of editorial typography—from the layout of classic broadsheet newspapers to modern minimalist architecture—we discover that clarity is not born from addition, but from deliberate subtraction.</p>
    <blockquote class="story-blockquote">"Whitespace is not empty space; it is the structural breath that allows ideas to resonate."</blockquote>
    <p>As software engineers and digital journalists, our responsibility is to build software that respects human cognitive bandwidth. By establishing crisp visual hierarchy, neutral color palettes, and clear modular clusters, we restore dignity to the act of reading news online.</p>`,
    hero_image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    caption: 'Minimalist workspace with clean printed press layout and neutral daylight illumination.',
    category: 'opinion',
    tags: ['Design', 'UX Architecture', 'Typography', 'Opinion'],
    status: 'published',
    published_at: '2026-07-22T14:15:00Z',
    updated_at: '2026-07-22T14:15:00Z',
    byline: 'Julian Vance, Contributing Columnist',
    reading_time: '5 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: true,
    view_count: 2890,
    related_article_ids: ['art-1']
  }
];

export const INITIAL_MEDIA_ASSETS = [
  { id: 'm1', name: 'Quantum Chip Cleanroom', url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80', category: 'technology' },
  { id: 'm2', name: 'Fusion Tokamak Interior', url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80', category: 'world' },
  { id: 'm3', name: 'Financial Trading Desk', url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80', category: 'business' },
  { id: 'm4', name: 'JWST Space Nebula', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', category: 'science' },
  { id: 'm5', name: 'Medical Lab Research', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80', category: 'health' },
  { id: 'm6', name: 'Highway Infrastructure', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80', category: 'national' },
  { id: 'm7', name: 'Track Stadium Sprint', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80', category: 'sports' },
  { id: 'm8', name: 'Cinema Director & Set', url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80', category: 'entertainment' },
  { id: 'm9', name: 'Minimal Editorial Desk', url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80', category: 'opinion' }
];
