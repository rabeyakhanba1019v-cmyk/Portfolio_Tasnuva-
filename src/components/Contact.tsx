import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, Linkedin, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+8801779000150',
    href: 'tel:+8801779000150',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'rabeyakhanba1019v@gmail.com',
    href: 'mailto:rabeyakhanba1019v@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rabeyakhantasnuva',
    href: 'https://www.linkedin.com/in/rabeyakhantasnuva/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-50 dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out for internship opportunities, project collaborations, or just to say hello. I'm actively looking for software engineering and AI/ML internship positions.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="text-gray-900 dark:text-white font-medium group-hover:text-primary-500 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
