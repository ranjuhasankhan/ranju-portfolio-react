'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function GithubStats() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 relative bg-gradient-to-b from-dark to-dark-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            variants={itemVariants}
          >
            GitHub Statistics
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        {/* GitHub Stats Images */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* GitHub Stats */}
          <motion.div
            className="glass p-6 rounded-lg border border-primary/20"
            variants={itemVariants}
            whileHover={{ borderColor: '#667eea' }}
          >
            <p className="text-gray-400 text-center mb-4">GitHub Profile Statistics</p>
            <motion.img
              src="https://github-readme-stats.vercel.app/api?username=ranjuhasankhan&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="w-full rounded-lg"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* GitHub Streak */}
          <motion.div
            className="glass p-6 rounded-lg border border-primary/20"
            variants={itemVariants}
            whileHover={{ borderColor: '#667eea' }}
          >
            <p className="text-gray-400 text-center mb-4">Contribution Streak</p>
            <motion.img
              src="https://streak-stats.demolab.com?user=ranjuhasankhan&theme=radical"
              alt="GitHub Streak"
              className="w-full rounded-lg"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div
            className="glass p-6 rounded-lg border border-primary/20"
            variants={itemVariants}
            whileHover={{ borderColor: '#667eea' }}
          >
            <p className="text-gray-400 text-center mb-4">Top Languages</p>
            <motion.img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ranjuhasankhan&layout=compact&theme=radical"
              alt="Top Languages"
              className="w-full rounded-lg"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
