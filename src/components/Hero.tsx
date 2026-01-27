'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradient spheres */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side - Text */}
        <motion.div variants={itemVariants} className="text-center lg:text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I'm Ranju Hasan Khan
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-primary mb-6 font-semibold"
            variants={itemVariants}
          >
            Full-Stack Developer | International Speaker | Peace Advocate 🕊️
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Building scalable web applications and promoting world peace through technology, empathy, and global collaboration.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold text-center hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center lg:justify-start mt-8"
            variants={itemVariants}
          >
            {[
              { icon: FaGithub, href: 'https://github.com/ranjuhasankhan' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ranju-hasan-khan-5482952ba' },
              { icon: FaFacebook, href: 'https://www.facebook.com/hasanranjukhan' },
              { icon: FaTwitter, href: 'https://twitter.com' },
              { icon: FaEnvelope, href: 'mailto:ranjuhsankhan@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Animated circle */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="w-80 h-80 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-80 shadow-2xl relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
            <motion.div
              className="absolute inset-8 rounded-full border-2 border-accent/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
