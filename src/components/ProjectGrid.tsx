import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick?: (index: number) => void;
}

const ProjectGrid = ({ projects, onProjectClick }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`project-card opacity-0 cursor-pointer ${getGridSpan(index)}`}
          onClick={() => onProjectClick?.(index)}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

const getGridSpan = (index: number): string => {
  const patterns = [
    'md:col-span-8 md:row-span-2', // Large
    'md:col-span-4 md:row-span-1', // Small
    'md:col-span-4 md:row-span-2', // Tall
    'md:col-span-6 md:row-span-1', // Medium
    'md:col-span-6 md:row-span-2', // Medium tall
  ];
  
  return patterns[index % patterns.length];
};

export default ProjectGrid;