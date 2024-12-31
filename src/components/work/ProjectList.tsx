import React from 'react';
import ProjectGrid from '../ProjectGrid';
import { Project } from '../../types';

interface ProjectListProps {
  projects: Project[];
  category: string;
  onProjectClick: (index: number) => void;
}

const ProjectList = ({ projects, category, onProjectClick }: ProjectListProps) => {
  const filteredProjects = category === 'All' 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <div className="opacity-0 animate-fade-up">
      <ProjectGrid 
        projects={filteredProjects} 
        onProjectClick={onProjectClick} 
      />
    </div>
  );
};

export default ProjectList;