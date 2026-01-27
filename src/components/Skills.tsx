'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const skillsData = [
    {
      category: '💻 Languages',
      skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python'],
    },
    {
      category: '🎨 Frontend',
      skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: '⚙️ Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'GraphQL'],
    },
    {
      category: '☁️ Deployment',
      skills: ['Firebase', 'Vercel', 'AWS', 'Docker', 'CI/CD'],
    },
    {
      category: '🪶 Design Tools',
      skills: ['Figma', 'Adobe XD', 'Canva', 'Photoshop'],
    },
    {
      category: '🧰 Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Webpack'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 relative bg-gradient-to-b from-dark-light/50 to-dark">
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
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillsData.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="glass p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: '#667eea' }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-sm font-medium hover:from-primary/40 hover:to-secondary/40 transition-all cursor-default"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Progress */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-primary">MERN Stack Expertise</h3>
            <div className="space-y-4">
              {[
                { tech: 'MongoDB', level: 85 },
                { tech: 'Express.js', level: 90 },
                { tech: 'React', level: 95 },
                { tech: 'Node.js', level: 90 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{item.tech}</span>
                    <span className="text-primary font-semibold">{item.level}%</span>
                  </div>
                  <motion.div
                    className="w-full bg-gray-700 rounded-full h-2"
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.1 + 0.2 }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Additional Proficiencies</h3>
            <div className="space-y-4">
              {[
                { tech: 'Frontend Development', level: 93 },
                { tech: 'Backend Development', level: 88 },
                { tech: 'UI/UX Design', level: 80 },
                { tech: 'Problem Solving', level: 96 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{item.tech}</span>
                    <span className="text-primary font-semibold">{item.level}%</span>
                  </div>
                  <motion.div
                    className="w-full bg-gray-700 rounded-full h-2"
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-accent to-secondary h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.1 + 0.2 }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
