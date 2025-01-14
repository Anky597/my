'use client'

import { useState, useEffect } from 'react'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDarkMode(savedTheme === 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <html lang="en" className={`scroll-smooth ${isDarkMode ? 'dark' : ''}`}>
      <body className={`${poppins.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <div className="background-effects">
          <div className="light-beam light-beam-1"></div>
          <div className="light-beam light-beam-2"></div>
          <div className="light-beam light-beam-3"></div>
          <div className="glass-reflection"></div>

          {/* Improved Optical Tube Effects */}
          <div className="optical-tube optical-tube-1">
            <div className="light-streak"></div>
            <div className="light-streak delay-1"></div>
          </div>
          <div className="optical-tube optical-tube-2">
            <div className="light-streak"></div>
            <div className="light-streak delay-2"></div>
          </div>
          <div className="optical-tube optical-tube-3">
            <div className="light-streak"></div>
            <div className="light-streak delay-3"></div>
          </div>
        </div>
        <div className="relative z-10">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}

