import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Database, GitBranch, Terminal, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'Python', 'C++'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Core Skills',
    icon: Terminal,
    skills: [
      'Data Structures & Algorithms',
      'Problem Solving',
      'OOP',
      'SQL',
      'Git & Version Control',
    ],
    color: 'from-primary-500 to-purple-500',
  },
  {
    title: 'AI & Data',
    icon: Brain,
    skills: ['Machine Learning', 'Deep Learning', 'Data Analysis'],
    color: 'from-secondary-500 to-pink-500',
  },
  {
    title: 'Web & Tools',
    icon: Database,
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Supabase'],
    color: 'from-green-500 to-teal-500',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 sm:py-28 bg-gray-50 dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A blend of technical expertise and problem-solving abilities honed through academic projects and hands-on experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
