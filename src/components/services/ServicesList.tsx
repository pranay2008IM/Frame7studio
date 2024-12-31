import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const ServicesList = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;