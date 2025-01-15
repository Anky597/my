'use client'

import { useState } from 'react'
import { Send, MapPin, Mail, Phone, Github, Linkedin, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Anky597", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/nikamaniket/", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/Lucifer-25", label: "LeetCode" }
  ]
      

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="animate-float"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400" />
                <span>Nashik, Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400" />
                <a href="mailto:aniketnikam341@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">aniketnikam341@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400" />
                <a href="tel:+919209067817" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">+91 9209067817</a>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Connect with Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Location</h4>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120073.05619274392!2d73.71152159726561!3d20.01110700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba0fbe5ad7f%3A0xc214bf9e4e39e570!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1652913014201!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nashik, Maharashtra on Google Maps"
                ></iframe>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 animate-pulse-slow"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                variants={inputVariants}
                whileFocus="focus"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                variants={inputVariants}
                whileFocus="focus"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                variants={inputVariants}
                whileFocus="focus"
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out flex items-center justify-center animate-shimmer"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

