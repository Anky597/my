'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { SocialNetworkLogo, LoanApprovalLogo, SmartAgricultureLogo } from './ProjectLogos'
import { Button } from "@/components/ui/button"

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: "Social Network Analysis Tool",
      description: "Interactive Streamlit-based web application for social network analysis, reducing data analysis time by 40%.",
      longDescription: "Engineered and deployed an interactive Streamlit-based web application for social network analysis. This tool significantly reduced data analysis time by 40% and implemented multiple clustering algorithms, achieving 82% segmentation accuracy with Mean Shift.",
      techStack: "Python, scikit-learn, Pandas, Matplotlib, Seaborn, Streamlit",
      appLink: "https://resumeproject1-btztnegmmngpeve225zmet.streamlit.app/",
      githubLink: "https://github.com/Anky597/social_network_analysis",
      logo: SocialNetworkLogo,
      features: [
        "Interactive data visualization",
        "Multiple clustering algorithms",
        "Real-time network analysis",
        "Customizable parameters"
      ],
      challenges: [
        "Optimizing performance for large datasets",
        "Implementing intuitive UI for complex network structures",
        "Integrating multiple clustering algorithms seamlessly"
      ],
      category: "data-science"
    },
    {
      title: "Interpretation of ML model using XAI",
      description: "Understanding of ML model decision making process with the help of SHAP and LIME",
      longDescription: "Engineered a machine learning-based loan approval system using Python, Scikit-learn, and Flask. The system achieved 83.7% accuracy with Logistic Regression and integrated LIME and SHAP for model explainability, providing transparent decision-making processes.",
      techStack: "Python, Matplotlib, Scikit-learn, Flask, SHAP, LIME",
      appLink: "https://medium.com/@aniketnikam341/decoding-ai-unveiling-black-boxes-with-shap-lime-for-transparent-decisions-b1407b09887b",
      githubLink: "https://github.com/Anky597/loan-prediction",
      logo: LoanApprovalLogo,
      features: [
        "High accuracy loan approval predictions",
        "Model explainability using LIME and SHAP",
        "User-friendly web interface",
        "Secure data handling and processing"
      ],
      challenges: [
        "Balancing model accuracy with interpretability",
        "Implementing fair and unbiased decision-making algorithms",
        "Ensuring data privacy and security in financial applications"
      ],
      category: "machine-learning"
    },
    {
      title: "Smart Agriculture with Generative AI",
      description: "Automated irrigation system with IoT sensors and ESP32, reducing water usage by 20%. Integrated Gemini LLM for plant disease detection.",
      longDescription: "Developed an automated irrigation system integrating IoT sensors with ESP32, reducing water usage by 20%. The system leverages the Gemini LLM model for plant disease detection, achieving 87% accuracy in identifying and diagnosing plant health issues.",
      techStack: "C, Gemini API, Python, Gradio, Blynk IoT Cloud, Hugging Face",
      appLink: "https://huggingface.co/spaces/Ankys/example",
      githubLink: "https://github.com/Anky597/AGRO-IOT",
      logo: SmartAgricultureLogo,
      features: [
        "Automated irrigation based on soil moisture and weather conditions",
        "Plant disease detection using Gemini LLM",
        "Real-time monitoring and control via mobile app",
        "Integration with weather APIs for predictive watering"
      ],
      challenges: [
        "Optimizing power consumption for long-term field deployment",
        "Improving accuracy of plant disease detection in various lighting conditions",
        "Ensuring reliable communication between IoT devices and cloud services"
      ],
      category: "iot"
    }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
          >
            All
          </Button>
          <Button
            onClick={() => setFilter('data-science')}
            variant={filter === 'data-science' ? 'default' : 'outline'}
          >
            Data Science
          </Button>
          <Button
            onClick={() => setFilter('machine-learning')}
            variant={filter === 'machine-learning' ? 'default' : 'outline'}
          >
            Machine Learning
          </Button>
          <Button
            onClick={() => setFilter('iot')}
            variant={filter === 'iot' ? 'default' : 'outline'}
          >
            IoT
          </Button>
        </div>
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects

