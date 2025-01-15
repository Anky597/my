'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cloud, Database, PenToolIcon as Tool, BarChart, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Skill {
  name: string
}

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C++" },
      { name: "Java" },
      { name: "Python" },
      { name: "SQL" },
    ]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS" },
      { name: "Azure" },
    ]
  },
  {
    title: "Data Science",
    icon: Database,
    skills: [
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Streamlit" },
    ]
  },
  {
    title: "Tools and Frameworks",
    icon: Tool,
    skills: [
      { name: "Machine Learning" },
      { name: "IoT" },
      { name: "Flask" },
      { name: "Git" },
      { name: "Excel" },
    ]
  },
  {
    title: "Management Skills",
    icon: BarChart,
    skills: [
      { name: "Prototyping" },
      { name: "User Research" },
      { name: "Agile Methodology" },
    ]
  }
]

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <CardTitle>{category.title}</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-700 rounded-md p-2"
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

