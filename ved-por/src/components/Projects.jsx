import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChevronRight,
  Clapperboard,
  Compass,
  Shield,
  Globe,
  Music,
  LayoutDashboard,
  Sparkles,
} from 'lucide-react';

const projects = [
  {
    title: 'Netflix Clone',
    subtitle: 'React + Firebase + TMDB API',
    category: 'Development',
    icon: Clapperboard,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-700',
    tags: ['React', 'Firebase', 'TMDB API', 'Authentication'],
    github: 'https://github.com/Vedhaanthan-D/OTT-Platform',
    description: 'Built a responsive streaming platform using React and modular components. Integrated Firebase Authentication for secure login and user management. Connected TMDB API to fetch real-time movie and TV show data.',
    points: ['Firebase Auth for secure login', 'TMDB API for live movie data', 'Modular React architecture'],
  },
  {
    title: 'V_Treasure Hunt',
    subtitle: 'GTA V Roleplay Script — FiveM',
    category: 'Development',
    icon: Compass,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    tags: ['Lua', 'FiveM', 'GTA V', 'Game Dev'],
    github: 'https://github.com/Vedhaanthan-D/V_treasurehunt',
    description: 'A FiveM-compatible treasure-hunt script built in Lua with client/server separation and localization support. Features dynamic in-game events, commands, and a small utility bridge for framework integration. Packaged for easy deployment into any FiveM server.',
    points: ['Client/server Lua architecture', 'Dynamic in-game events & commands', 'Easy server deployment'],
  },
  {
    title: 'Smart Tourist Safety System',
    subtitle: 'AI, Geo-Fencing & Digital ID',
    category: 'AI/Full-Stack',
    icon: Shield,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    tags: ['React', 'Node.js', 'AI', 'Geo-Fencing', 'SOS'],
    description: 'Developed an AI-powered tourist safety system using React (frontend) and Node.js (backend) for real-time monitoring and alerts. Designed features for emergency response including SOS triggering, location tracking, and risk zone detection.',
    points: ['Real-time SOS & location tracking', 'AI-powered risk zone detection', 'React + Node.js full-stack'],
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'UI/UX Design & Development',
    category: 'UI/UX Design',
    icon: Globe,
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-700',
    tags: ['Figma', 'HTML', 'CSS', 'Responsive'],
    github: 'https://www.behance.net/vedhaanthan-d',
    description: 'Designed and developed a responsive portfolio website to showcase UI/UX projects. Implemented consistent typography, color systems, and reusable components. Optimized layouts for mobile, tablet, and desktop devices.',
    points: ['Responsive multi-device layouts', 'Design system with typography & colors', 'Reusable component library'],
  },
  {
    title: 'Mobile Music App UI',
    subtitle: 'Ad-Free Experience — Case Study',
    category: 'UI/UX Design',
    icon: Music,
    iconBg: 'bg-fuchsia-100',
    iconColor: 'text-fuchsia-700',
    tags: ['Figma', 'User Research', 'Prototyping', 'UX Design'],
    github: 'https://www.behance.net/vedhaanthan-d',
    description: 'Designed an ad-free music streaming app focused on seamless and distraction-free listening. Created complete user flows, wireframes, and high-fidelity screens in Figma. Conducted user research and improved overall usability through iterative testing.',
    points: ['Complete user flows & wireframes', 'High-fidelity screens in Figma', 'Iterative usability testing'],
  },
  {
    title: 'E-commerce Admin Dashboard',
    subtitle: 'Light & Dark Theme UI',
    category: 'UI/UX Design',
    icon: LayoutDashboard,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
    tags: ['Figma', 'Dashboard', 'Data Viz', 'Theme Toggle'],
    github: 'https://www.behance.net/vedhaanthan-d',
    description: 'Designed a modern admin dashboard with analytics, order tracking, and sales insights. Implemented light/dark theme toggle for improved user preference and accessibility. Created clean data visualization using charts, tables, and status indicators.',
    points: ['Analytics & order tracking dashboard', 'Light/dark theme toggle', 'Charts, tables & status indicators'],
  },
  {
    title: 'Premium Cosmetic Website',
    subtitle: 'Video Prototype',
    category: 'UI/UX Design',
    icon: Sparkles,
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
    tags: ['Figma', 'Video Prototype', 'Luxury UI', 'Animation'],
    github: 'https://www.behance.net/vedhaanthan-d',
    description: 'Designed a luxury-themed e-commerce interface with immersive visuals and minimal aesthetics. Built interactive product showcases and smooth scrolling experiences. Developed responsive layouts and video-based prototypes for better engagement.',
    points: ['Luxury e-commerce interface', 'Interactive product showcases', 'Video-based prototypes'],
  },
];

const categories = ['All', 'Development', 'AI/Full-Stack', 'UI/UX Design'];


export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const handleProjectClick = project => {
    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="section relative overflow-hidden bg-grid">
      <div className="orb w-96 h-96 bg-purple-700 top-0 left-1/3 opacity-10" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4">Portfolio</span>
          <h2 className="section-title gradient-text mt-3">Featured Projects</h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            A curated selection of design and development projects showcasing my range of skills.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-none ${
                filter === cat ? 'gradient-purple text-white shadow-lg' : 'glass text-white/60 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="glass-dark rounded-2xl p-6 poly-card cursor-none group relative overflow-hidden"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="animate-shimmer absolute inset-0 rounded-2xl" />
                  </div>

                  <div className={`w-14 h-14 rounded-2xl ${project.iconBg} border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={22} className={project.iconColor} />
                  </div>

                  <div className="tag mb-2 text-xs">{project.category}</div>
                  <h3 className="font-bold text-white text-lg mb-1">{project.title}</h3>
                  <p className="text-purple-400 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-white/55 text-sm line-clamp-2 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map(t => <span key={t} className="tag text-xs">{t}</span>)}
                  </div>

                  <div className="flex items-center gap-1.5 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Open Project <ChevronRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
