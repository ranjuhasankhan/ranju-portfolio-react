'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log(formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

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

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ranjuhsankhan@gmail.com',
      link: 'mailto:ranjuhsankhan@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Ready to work globally',
    },
    {
      icon: FaPhone,
      label: 'Availability',
      value: 'Open for freelance & full-time',
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
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
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            variants={itemVariants}
          >
            Let's collaborate and create something amazing together!
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="glass p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all flex items-center gap-4"
                whileHover={{ y: -5 }}
              >
                <info.icon className="text-3xl text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">{info.label}</h3>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Support Section */}
            <motion.div
              className="glass p-6 rounded-lg border border-primary/20 mt-8"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Support My Work</h3>
              <p className="text-gray-300 mb-4">If you find my work valuable, consider supporting me</p>
              <motion.a
                href="https://www.buymeacoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ☕ Buy Me a Coffee
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass p-8 rounded-lg border border-primary/20 space-y-6"
            variants={itemVariants}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-dark-light/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-dark-light/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-dark-light/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-dark-light/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                placeholder="Your message"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>

            {isSubmitted && (
              <motion.div
                className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
