
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack MERN e-commerce solution with payment integration, user authentication, and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Peace Initiative App',
      description:
        'Community platform promoting global peace awareness through educational content, forum discussions, and volunteer coordination.',
      tags: ['Next.js', 'Firebase', 'Tailwind'],
      gradient: 'from-pink-500 to-red-500',
    },
    {
      title: 'Task Management System',
      description:
        'Collaborative task management application with real-time updates, team features, and advanced analytics dashboard.',
      tags: ['React', 'Express', 'WebSocket'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Social Network',
      description:
        'Interactive social platform with real-time notifications, media sharing, profiles, and intelligent friend recommendations.',
      tags: ['MERN', 'JWT Auth', 'AWS S3'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Blog Platform',
      description:
        'Modern blogging platform with markdown support, SEO optimization, comment system, and content management dashboard.',
      tags: ['Next.js', 'MDX', 'Vercel'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Real-time weather application with location-based forecasts, interactive maps, and historical weather data visualization.',
      tags: ['React', 'API Integration', 'Charts.js'],
      gradient: 'from-teal-500 to-pink-500',
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
    <section id="projects" className="py-20 relative">
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
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group glass rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <motion.div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
