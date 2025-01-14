'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Code Tracker', href: 'code-tracker' },
    { name: 'Contact', href: 'contact' },
  ]

  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  const headerRef = useRef<HTMLElement>(null)
  const [rays, setRays] = useState<{ angle: number; duration: number }[]>([])

  useEffect(() => {
    const createRays = () => {
      const newRays = Array.from({ length: 5 }, () => ({
        angle: Math.random() * 60 - 30,
        duration: Math.random() * 3 + 2,
      }))
      setRays(newRays)
    }

    createRays()
    const interval = setInterval(createRays, 5000)

    return () => clearInterval(interval)
  }, [])

  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }
    }
  }

  return (
    <motion.header 
      ref={headerRef}
      className={`fixed w-full z-10 transition-all duration-300 ray-tracing-container ${
        scrolled ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      {rays.map((ray, index) => (
        <div
          key={index}
          className="ray"
          style={{
            height: '200%',
            width: '1px',
            transform: `rotate(${ray.angle}deg)`,
            animation: `shimmer ${ray.duration}s linear infinite`,
            left: `${(index / rays.length) * 100}%`,
          }}
        />
      ))}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            AN
          </motion.span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={navItemVariants}
              custom={index}
            >
              <button 
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </motion.button>
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-800 py-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 w-full text-left"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

