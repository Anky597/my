import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  techStack: string
  features: string[]
  challenges: string[]
  appLink?: string
  githubLink?: string
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  techStack,
  features,
  challenges,
  appLink,
  githubLink,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-black dark:text-gray-100">
            {title}
          </DialogTitle>
          <DialogDescription className="text-black dark:text-gray-200">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium col-span-4 text-black dark:text-gray-100">
              Tech Stack:
            </span>
            <span className="col-span-4 text-black dark:text-gray-200">
              {techStack}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium col-span-4 text-black dark:text-gray-100">
              Key Features:
            </span>
            <ul className="list-disc list-inside col-span-4 text-black dark:text-gray-200">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium col-span-4 text-black dark:text-gray-100">
              Challenges & Solutions:
            </span>
            <ul className="list-disc list-inside col-span-4 text-black dark:text-gray-200">
              {challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          {appLink && (
            <Button asChild>
              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black dark:text-gray-100"
              >
                <ExternalLink size={18} className="mr-2" />
                Visit App
              </a>
            </Button>
          )}
          {githubLink && (
            <Button variant="outline" asChild>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black dark:text-gray-100"
              >
                <Github size={18} className="mr-2" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}