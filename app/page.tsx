'use client'

import { motion } from 'framer-motion'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CodeTracker from './components/CodeTracker'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <motion.section {...fadeInUp} id="about">
        <About />
      </motion.section>
      <motion.section {...fadeInUp} id="skills">
        <Skills />
      </motion.section>
      <motion.section {...fadeInUp} id="code-tracker" className="relative z-10">
        <CodeTracker />
      </motion.section>
      <motion.section {...fadeInUp} id="projects">
        <Projects />
      </motion.section>
      <motion.section {...fadeInUp} id="contact">
        <Contact />
      </motion.section>
    </motion.div>
  )
}

