import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Code2, Database, Users, Brain, Briefcase } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.22,1,0.36,1] } })
};

const stats = [
  { label: 'Internships', value: '3+', icon: Briefcase },
  { label: 'Projects', value: '7+', icon: Code2 },
  { label: 'CGPA', value: '8.8', icon: Brain },
  { label: 'LeetCode', value: '50+', icon: Users },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="orb w-80 h-80 bg-purple-800 top-0 right-0 opacity-20" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
          className="text-center mb-16"
        >
          <span className="tag mb-4">About Me</span>
          <h2 className="section-title gradient-text mt-3">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="space-y-6">
            {[
              { delay: 1, text: "I'm Vedhaanthan D, a UI/UX Designer and B.Tech AI & Data Science student based in Erode, Tamil Nadu. I blend design thinking with technical skills to craft digital experiences that are both beautiful and functional." },
              { delay: 2, text: "With 3 internship experiences at leading companies — Azhizen Solutions, Zidio Development, and Cybernaut Edu Tech — I've worked on real-world projects including doctor appointment systems, task management apps, and mobile UI redesigns." },
              { delay: 3, text: "My approach combines systematic UX research (user personas, competitor analysis, usability testing) with pixel-perfect visual design in Figma, resulting in interfaces that delight users and drive business goals." },
            ].map(({ delay, text }) => (
              <motion.p
                key={delay}
                variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={delay}
                className="text-white/65 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            {/* Tags */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={4}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['Figma', 'React', 'HTML/CSS', 'JavaScript', 'MySQL', 'Adobe Photoshop', 'User Research', 'Prototyping'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={i + 2}
                className="glass-dark rounded-2xl p-6 poly-card text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                <div className="text-sm text-white/50">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
