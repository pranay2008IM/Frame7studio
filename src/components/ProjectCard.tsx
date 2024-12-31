import React from 'react';
import { Project } from '../types';

const ProjectCard = ({ image, title, category }: Project) => {
  return (
    <div className="relative w-full h-full overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold mb-2 text-white">
            {title}
          </h3>
          <p className="text-lg text-white/80">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;