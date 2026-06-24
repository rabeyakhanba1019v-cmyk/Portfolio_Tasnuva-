import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              RKT
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 mb-6"
          >
            <a
              href="https://github.com/rabeyakhanba1019v-cmyk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-110 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/rabeyakhantasnuva/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-110 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500" />
            </a>
            <a
              href="mailto:rabeyakhanba1019v@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-110 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1"
          >
            © {new Date().getFullYear()} Rabeya Khan Tasnuva. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for excellence
          </motion.p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
