import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

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
      <DialogContent className="sm:max-w-[550px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</DialogTitle>
          <DialogDescription className="text-gray-700 dark:text-gray-300">{description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh] pr-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Tech Stack</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{techStack}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Key Features</h3>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Challenges & Solutions</h3>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
        <div className="mt-6 flex justify-end space-x-4">
          {appLink && (
            <Button asChild>
              <a href={appLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink size={18} className="mr-2" />
                Visit App
              </a>
            </Button>
          )}
          {githubLink && (
            <Button variant="outline" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
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

