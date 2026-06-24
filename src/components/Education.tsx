import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'BSc in Computer Science & Engineering',
    institution: 'Southeast University',
    period: '2022 - Present',
    details: ['CGPA: 3.95', 'Completed: 134/150 Credits'],
    icon: GraduationCap,
    color: 'from-primary-500 to-blue-500',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: "Shaheed Bir Uttam Lt Anwar Girls' College",
    period: '2019 - 2021',
    details: ['GPA: 5.00'],
    icon: School,
    color: 'from-secondary-500 to-purple-500',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: "Shaheed Bir Uttam Lt Anwar Girls' College",
    period: '2017 - 2019',
    details: ['GPA: 4.94'],
    icon: BookOpen,
    color: 'from-green-500 to-teal-500',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 sm:py-28 bg-gray-50 dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education <span className="text-primary-500">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey of continuous learning and academic excellence.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 flex justify-center">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg z-10`}
                  >
                    <edu.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 flex-1 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-3 py-1 text-sm rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
