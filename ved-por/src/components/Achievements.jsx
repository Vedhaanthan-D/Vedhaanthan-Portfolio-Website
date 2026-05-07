import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code2, Palette, Globe, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Code2,
    title: '70+ LeetCode Problems',
    desc: 'Solved 70+ coding challenges to strengthen algorithmic problem-solving and data structure skills.',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-700',
  },
  {
    icon: Globe,
    title: 'Live Production Design',
    desc: 'Designed and delivered complete website and mobile UI for Azhizen Solutions — now live in production and serving real users.',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-700',
  },
  {
    icon: Palette,
    title: 'UI/UX Case Studies',
    desc: 'Completed multiple real-world UI/UX case studies and design prototypes showcasing end-to-end design thinking.',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-700',
  },
  {
    icon: Trophy,
    title: 'AI4Good Hackathon',
    desc: 'Attended the AI4Good Hackathon — a prestigious national-level hackathon held in Delhi, building AI-powered solutions for social good.',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="section relative overflow-hidden">
      <div className="orb w-80 h-80 bg-fuchsia-700 bottom-0 right-0 opacity-15" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4">Milestones</span>
          <h2 className="section-title gradient-text mt-3">Achievements</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map(({ icon: Icon, title, desc, iconBg, iconColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22,1,0.36,1] }}
              className="glass-dark rounded-2xl p-6 poly-card text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl ${iconBg} border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <Icon size={30} className={iconColor} />
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 glass-dark rounded-lg p-8"
        >
          <h3 className="font-bold text-white text-xl mb-6 text-center flex items-center justify-center gap-2">
            <Zap size={20} className="text-purple-400" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { skill: 'Problem Solving', emoji: '🧩' },
              { skill: 'Communication', emoji: '💬' },
              { skill: 'Team Collaboration', emoji: '🤝' },
              { skill: 'Critical Thinking', emoji: '🧠' },
              { skill: 'Creativity', emoji: '✨' },
              { skill: 'Time Management', emoji: '⏰' },
              { skill: 'Adaptability', emoji: '🔄' },
              { skill: 'Attention to Detail', emoji: '🔍' },
            ].map(({ skill, emoji }) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.08, y: -4 }}
                className="glass rounded-lg px-4 py-2.5 flex items-center gap-2 cursor-none"
              >
                <span>{emoji}</span>
                <span className="text-sm text-white/75 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
