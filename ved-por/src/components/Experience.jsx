import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const internships = [
  {
    company: 'Azhizen Solutions Pvt Ltd',
    role: 'UI/UX Designer Intern',
    period: 'Feb 2025 – May 2025',
    location: 'Tiruchengode',
    type: 'On-site',
    color: 'from-purple-600 to-fuchsia-500',
    emoji: '🏢',
    points: [
      'Designed responsive web and mobile interfaces maintaining consistent brand identity',
      'Created media pages and complete admin/user dashboards for a Doctor Appointment Booking system',
      'Improved navigation and usability through modern UI patterns and structured layouts',
    ],
  },
  {
    company: 'Zidio Development',
    role: 'UI/UX Intern',
    period: 'Jan 2025 – Feb 2025',
    location: 'Remote',
    type: 'Remote',
    color: 'from-violet-600 to-purple-500',
    emoji: '💻',
    points: [
      'Designed dashboard, notification, and help modules for a task management web application',
      'Conducted competitor research, created user personas, and developed wireframes in Figma',
      'Built interactive prototypes and iterated designs based on usability feedback',
    ],
  },
  {
    company: 'Cybernaut Edu Tech LLP',
    role: 'UI/UX Intern',
    period: 'Sep 2024 – Feb 2025',
    location: 'Remote',
    type: 'Remote',
    color: 'from-fuchsia-600 to-pink-500',
    emoji: '🎓',
    points: [
      'Designed end-to-end mobile app UI including user flows, wireframes, and high-fidelity prototypes',
      'Redesigned company homepage to improve accessibility, layout clarity, and visual hierarchy',
      'Developed a personal portfolio website to showcase projects and design systems',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="orb w-72 h-72 bg-purple-700 top-1/2 right-0 opacity-15" />

      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Work History</span>
          <h2 className="section-title gradient-text mt-3">Internship Experience</h2>
        </motion.div>

        {/* Education chips first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-dark rounded-2xl p-6 mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 gradient-purple rounded-xl flex items-center justify-center text-lg">🎓</div>
            <h3 className="font-semibold text-white text-lg">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <div className="text-purple-400 font-semibold text-sm mb-1">B.Tech – AI & Data Science</div>
              <div className="text-white/80 text-sm">K S Rangasamy College of Technology, Tiruchengode</div>
              <div className="text-white/50 text-xs mt-1">2023 – Present | CGPA: 8.8</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-purple-400 font-semibold text-sm mb-1">Higher Secondary (12th)</div>
              <div className="text-white/80 text-sm">Rathana Matric Higher Secondary School</div>
              <div className="text-white/50 text-xs mt-1">2022 – 2023 | Tamil Nadu State Board | 85.3%</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" />
          <div className="space-y-8 pl-10">
            {internships.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.18, duration: 0.6, ease: [0.22,1,0.36,1] }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-4 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-sm shadow-lg`}
                  style={{ marginLeft: '0px' }}>
                  {item.emoji}
                </div>

                <div className="glass-dark rounded-2xl p-6 poly-card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{item.company}</h3>
                      <div className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.role}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-white/50">
                        <Calendar size={11} />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/50">
                        <MapPin size={11} />
                        {item.location}
                      </div>
                      <span className="tag text-xs">{item.type}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-white/65 text-sm">
                        <CheckCircle2 size={14} className="text-purple-400 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
