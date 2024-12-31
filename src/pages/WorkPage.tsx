import React, { useState } from 'react';
import VideoModal from '../components/VideoModal';
import { projects } from '../data/projects';
import WorkGrid from '../components/work/WorkGrid';

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-8 md:mb-12">
          Work
        </h1>
        
        <WorkGrid 
          projects={projects}
          onProjectClick={setSelectedProject}
        />
      </div>
      
      {selectedProject !== null && (
        <VideoModal 
          project={projects[selectedProject]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default WorkPage;