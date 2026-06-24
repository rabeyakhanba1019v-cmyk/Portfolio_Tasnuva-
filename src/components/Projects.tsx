import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code2, Brain, Train, BookOpen, Users, Film } from 'lucide-react';

const projects = [
  {
    title: 'Nutriloop Smart Planner',
    description:
      'AI-powered diet and leftover food management system that generates smart meal plans based on health data and food availability.',
    tech: ['React', 'Tailwind CSS', 'Cloud Technologies'],
    github: 'https://github.com/rabeyakhanba1019v-cmyk/Nutriloop-smart-planner-main',
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Smart Rail',
    description:
      'Secure railway ticket resale platform with escrow payments, trust scores, and real-time chat.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/rabeyakhanba1019v-cmyk/Smart-rail',
    icon: Train,
    color: 'from-primary-500 to-blue-500',
  },
  {
    title: 'Smart Study Planner System',
    description:
      'C++ application that creates optimized study schedules using Dynamic Programming, Greedy, and Job Sequencing algorithms.',
    tech: ['C++', 'File Handling', 'DSA'],
    github: 'https://github.com/rabeyakhanba1019v-cmyk/Smart-Study-Planner-System',
    icon: BookOpen,
    color: 'from-secondary-500 to-purple-500',
  },
  {
    title: 'Student Management System',
    description:
      'Java console application for managing student records, authentication, course advising, and file-based storage.',
    tech: ['Java', 'OOP', 'File Handling'],
    github: 'https://github.com/rabeyakhanba1019v-cmyk/student-managment-system-',
    icon: Users,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Movie Ticket Management System',
    description:
      'JavaFX and MySQL based desktop application for movie booking and cinema management.',
    tech: ['JavaFX', 'MySQL'],
    github: 'https://github.com/rabeyakhanba1019v-cmyk/Movie-Ticket-Management-system-',
    icon: Film,
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills, problem-solving abilities, and passion for building impactful applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group/github"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover/github:text-primary-500" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
