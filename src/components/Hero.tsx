import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-50 via-white to-primary-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-900/20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile placeholder */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    RKT
                  </span>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-dark-900"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Rabeya Khan Tasnuva
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
        >
          CSE Student | AI Enthusiast | Software Developer
        </motion.p>

        {/* Introduction */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-10"
        >
          Passionate Computer Science student focused on Software Development, Artificial Intelligence, and Problem Solving. I enjoy building impactful applications that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={() => handleScroll('projects')}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View Projects
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="px-8 py-3 rounded-full border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-600 hover:text-white dark:hover:text-white transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/rabeyakhanba1019v-cmyk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/rabeyakhantasnuva/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-600" />
          </a>
          <a
            href="mailto:rabeyakhanba1019v@gmail.com"
            className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-600" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => handleScroll('about')}
          >
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
