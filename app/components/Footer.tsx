import { Github, Linkedin, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Anky597" },
    { icon: Linkedin, href: "https://linkedin.com/in/nikamaniket/" },
    { icon: Code, href: "https://leetcode.com/u/Lucifer-25/" }
  ]

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
          >
            © 2024 Aniket Nikam. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

