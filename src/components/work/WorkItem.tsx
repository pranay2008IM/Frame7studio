import React from 'react';
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
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 white "
      />
      
      <div className="absolute top-0 left-0 p-6 text-left">
        <h3 className={`font-bold text-white Roboto ${
          isHero ? 'text-4xl' : 'text-3xl'
        }`}>
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default WorkItem;