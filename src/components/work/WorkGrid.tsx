import React from 'react';
import { Project } from '../../types';
import WorkItem from './WorkItem';

interface WorkGridProps {
  projects: Project[];
  onProjectClick: (index: number) => void;
}

const WorkGrid = ({ projects, onProjectClick }: WorkGridProps) => {
  if (!projects.length) return null;

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-12">
      {/* Hero project - full width */}
      <div className="h-[400px] md:h-[80vh] lg:h-[90vh]">
        <WorkItem 
          project={projects[0]}
          onClick={() => onProjectClick(0)}
          isHero
        />
      </div>

      {/* Two equal width projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
        {projects.slice(1, 3).map((project, index) => (
          <div key={index} className="h-[400px] md:h-[60vh] lg:h-[70vh]">
            <WorkItem 
              project={project}
              onClick={() => onProjectClick(index + 1)}
            />
          </div>
        ))}
      </div>

      {/* Asymmetric layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
        <div className="h-[400px] md:h-[70vh] lg:h-[80vh] md:col-span-2">
          {projects[3] && (
            <WorkItem 
              project={projects[3]}
              onClick={() => onProjectClick(3)}
              isWide
            />
          )}
        </div>
        <div className="h-[400px] md:h-[70vh] lg:h-[80vh]">
          {projects[4] && (
            <WorkItem 
              project={projects[4]}
              onClick={() => onProjectClick(4)}
            />
          )}
        </div>
      </div>

      {/* Remaining projects in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
        {projects.slice(5).map((project, index) => (
          <div key={index} className="h-[400px] md:h-[50vh] lg:h-[60vh]">
            <WorkItem 
              project={project}
              onClick={() => onProjectClick(index + 5)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkGrid;