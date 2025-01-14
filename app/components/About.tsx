import { GraduationCap, MapPin, Mail, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ResumeModal } from './ResumeModal';

const TornadoLetter: React.FC<{ letter: string; index: number }> = ({ letter, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50, rotate: 180 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotate: 0,
        transition: { 
          type: "spring", 
          damping: 10, 
          stiffness: 100, 
          delay: index * 0.1 
        }
      }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  );
};

const About = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const name = "Aniket Nikam";
  const roles = ['Software Developer', 'Data Scientist', 'Quant Enthusiast', 'AI Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const contactInfo = [
    { icon: GraduationCap, text: 'VIT University, Vellore', link: null },
    { icon: MapPin, text: 'Vellore, Tamil Nadu, India', link: null },
    { icon: Mail, text: 'aniketnikam341@gmail.com', link: 'mailto:aniketnikam341@gmail.com' },
    { icon: Phone, text: '+91 9209067817', link: null },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
    exit: { opacity: 0, y: -50, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 max-w-3xl mx-auto animate-float"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            {name.split('').map((letter, index) => (
              letter === ' ' ? (
                <span key={index}>&nbsp;</span>
              ) : (
                <TornadoLetter key={index} letter={letter} index={index} />
              )
            ))}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-center text-gray-600 dark:text-gray-300"
          >
            <span className="mr-2">I am a</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold inline-block w-64 h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
                {item.link ? (
                  <a
                    href={item.link}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
            <motion.button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 animate-pulse-slow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="mr-2" size={20} />
              View Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default About;

