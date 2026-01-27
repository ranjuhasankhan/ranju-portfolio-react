'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ranjuhasankhan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ranju-hasan-khan-5482952ba', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://www.facebook.com/hasanranjukhan', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="border-t border-primary/20 bg-dark-light/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* About */}
          <motion.div whileHover={{ y: -5 }} className="smooth-transition">
            <h3 className="text-lg font-bold text-primary mb-4">About</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer passionate about creating beautiful and functional web applications while advocating for world peace.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ y: -5 }} className="smooth-transition">
            <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div whileHover={{ y: -5 }} className="smooth-transition">
            <h3 className="text-lg font-bold text-primary mb-4">Tech Stack</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>MERN Stack</li>
              <li>Next.js & React</li>
              <li>Tailwind CSS</li>
              <li>Firebase & Vercel</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-8 py-8 border-t border-b border-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-2xl text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="text-center text-gray-400 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Ranju Hasan Khan. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-2">
            Crafted with <FaHeart className="text-red-500" /> for a peaceful world
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
