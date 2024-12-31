import React from 'react';
import { motion } from 'framer-motion';

const ScrollingText = () => {
  const textItems = [
    'Frame 7 Studio',
    'Frame 7 Labs',
    'Motion Design',
    'Creative Direction',
    'Art Direction',
    

  ];

  return (
    <div className="overflow-hidden bg-white  py-16 relative z-10">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-200%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="whitespace-nowrap"
      >
        {textItems.map((text, index) => (
          <span key={index} className="text-black/100 text-8xl font-bold tracking-wider font-Roboto    mx-12">
            {text}
            <span className="mx-8">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;

{/*import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';

interface WorkItemProps {
  project: Project;
  onClick: () => void;
  isHero?: boolean;
  isWide?: boolean;
}

const WorkItem = ({ project, onClick, isHero }: WorkItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer w-full h-full relative overflow-hidden"
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      
      <div className="absolute top-0 left-0 p-6 text-left">
        <h3 className={`font-['Helvetica'] font-bold text-white mb-2 ${
          isHero ? 'text-3xl' : 'text-2xl'
        }`}>
          {project.title}
        </h3>
        <p className="font-['Helvetica'] text-white/80 text-sm tracking-wide">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkItem;*/}