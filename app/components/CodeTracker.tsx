'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'
import { WebsitePreviewModal } from './WebsitePreviewModal'

const CodeTracker = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<{
    url: string;
    title: string;
  } | null>(null)

  const platforms = [
    {
      title: "Codolio Profile",
      description: "Track your progress across multiple coding platforms",
      url: "https://codolio.com/profile/uNhoxM57",
      icon: Code,
      color: "black"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'black':
        return 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200'
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
    }
  }

  return (
    <section id="code-tracker" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
              Code Tracker
            </h2>
            {platforms.map((platform, index) => {
              const Icon = platform.icon
              return (
                <motion.div
                  key={platform.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-lg transition-colors duration-200"
                  onClick={() => setSelectedPlatform({
                    url: platform.url,
                    title: platform.title
                  })}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`p-2 rounded-full ${getColorClasses(platform.color)}`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold ml-3 text-gray-900 dark:text-gray-200">{platform.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {platform.description}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <ExternalLink size={16} className="mr-2" />
                    <motion.span
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm"
                    >
                      View Profile
                    </motion.span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
      {selectedPlatform && (
        <WebsitePreviewModal
          isOpen={!!selectedPlatform}
          onClose={() => setSelectedPlatform(null)}
          url={selectedPlatform.url}
          title={selectedPlatform.title}
        />
      )}
    </section>
  )
}

export default CodeTracker

