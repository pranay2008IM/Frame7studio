import React from 'react';
import { Service } from '../../types';

const ServiceCard = ({ icon: Icon, title, description }: Service) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition">
      <Icon className="w-12 h-12 text-blue-400 mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;