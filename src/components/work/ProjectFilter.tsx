import React from 'react';

type Category = 'All' | 'Web Design' | 'Branding' | 'Development' | 'Innovation' | 'Technology' | 'UX/UI';

interface ProjectFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: Category[] = ['All', 'Web Design', 'Branding', 'Development', 'Innovation', 'Technology', 'UX/UI'];

const ProjectFilter = ({ activeCategory, onCategoryChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category
              ? 'bg-white text-black'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;