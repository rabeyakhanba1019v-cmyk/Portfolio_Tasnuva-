import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Globe, Cpu, FileSpreadsheet, FileText } from 'lucide-react';

const certifications = [
  {
    title: 'IMUN Internship',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI in Wireless Networks',
    icon: Cpu,
    color: 'from-primary-500 to-purple-500',
  },
  {
    title: 'IELTS Listening Preparatory Training',
    icon: Award,
    color: 'from-secondary-500 to-pink-500',
  },
  {
    title: 'Essentials of MS Excel',
    icon: FileSpreadsheet,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'LaTeX Unlocked Research Writing Workshop',
    icon: FileText,
    color: 'from-orange-500 to-red-500',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & <span className="text-primary-500">Training</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning through professional certifications and workshops.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg flex-shrink-0`}
              >
                <cert.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
