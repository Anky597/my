import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface WebsitePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  url: string
  title: string
}

export const WebsitePreviewModal: React.FC<WebsitePreviewModalProps> = ({ 
  isOpen, 
  onClose, 
  url,
  title 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 w-full max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            <div className="w-full h-[70vh]">
              <iframe
                src={url}
                className="w-full h-full rounded-lg border-2 border-gray-200 dark:border-gray-700"
                allow="autoplay"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

