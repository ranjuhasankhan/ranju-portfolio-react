'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
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
      transition: { duration: 0.8 },
    },
  }

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Passion for Peace' },
  ]

  return (
    <section id="about" className="py-20 relative">
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
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left side - Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Developer, International Speaker, and dedicated advocate for establishing world peace. I specialize in building modern, scalable, and user-friendly web applications using the MERN stack.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I'm skilled at designing responsive interfaces, managing server-side logic, and integrating powerful database solutions that bring ideas to life.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-primary">🌱</span>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Currently Learning</h3>
                  <p className="text-gray-400">Full-Stack Development, UI/UX Design, and innovative ways to promote World Peace</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl text-primary">🤝</span>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Open to Collaboration</h3>
                  <p className="text-gray-400">Web Development Projects and Peace-driven Initiatives</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl text-primary">🌍</span>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Vision</h3>
                  <p className="text-gray-400">Innovation and empathy can work together to build a peaceful, sustainable future</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-lg text-center hover:border-primary/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
