import React from 'react';
import MasonryGrid from '../components/MasonryGrid';
import { labImages } from '../data/lab-images';

const LabsPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-12">Labs</h1>
        <MasonryGrid images={labImages} />
      </div>
    </div>
  );
};

export default LabsPage;