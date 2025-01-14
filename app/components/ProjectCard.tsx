'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Info } from 'lucide-react'
import { ProjectModal } from './ProjectModal'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string
  appLink?: string
  githubLink?: string
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>
  longDescription: string
  features: string[]
  challenges: string[]
  category: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  appLink,
  githubLink,
  logo: Logo,
  longDescription,
  features,
  challenges,
  category
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <Card className="h-full flex flex-col bg-opacity-90 hover:bg-opacity-100 transition duration-300">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
                <Logo className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-black dark:text-white">{title}</CardTitle>
                <Badge variant="secondary" className="mt-1">
                  {category}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-black dark:text-white">{description}</CardDescription>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <strong>Tech Stack:</strong> {techStack}
            </p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex space-x-2">
              {appLink && (
                <Button variant="outline" size="icon" asChild>
                  <a href={appLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                  </a>
                </Button>
              )}
              {githubLink && (
                <Button variant="outline" size="icon" asChild>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                </Button>
              )}
            </div>
            <Button onClick={() => setIsModalOpen(true)}>
              <Info size={18} className="mr-2" />
              More Info
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={longDescription}
        techStack={techStack}
        features={features}
        challenges={challenges}
        appLink={appLink}
        githubLink={githubLink}
      />
    </>
  )
}