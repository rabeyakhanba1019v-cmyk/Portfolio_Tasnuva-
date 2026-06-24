import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Target } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { icon: BookOpen, label: 'Credits Completed', value: '134/150' },
  { icon: Award, label: 'CGPA', value: '3.95' },
  { icon: GraduationCap, label: 'University', value: 'Southeast University' },
  { icon: Target, label: 'Focus', value: 'AI & Software Dev' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Computer Science & Engineering Student
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am a passionate Computer Science student pursuing my BSc in Computer Science & Engineering at Southeast University. With a strong foundation in programming, data structures, and algorithms, I am actively exploring the intersection of software development and artificial intelligence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My career objective is to build a successful career in software development and AI, creating intelligent solutions that address real-world challenges. I thrive on learning new technologies and applying them to build impactful applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently, I have completed 134 out of 150 credits with a CGPA of 3.95, consistently striving for academic excellence alongside hands-on project development.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
