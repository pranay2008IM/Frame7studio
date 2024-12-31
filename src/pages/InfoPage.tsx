import React from 'react';
import AnimatedService from '../components/services/AnimatedService';

const services = [
  'Creative Direction',
  'Art Direction',
  'Design & Animation',
  'Visual Research',
  'Editing',
  'Branding',
  'New Media'
];

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <section>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Who we are</h1>
            <p className="text-xl text-black-300 Roboto">
              Frame7studio is a cutting-edge design agency specializing in creative direction 
              and innovative digital experiences. We blend artistry with technology to 
              create meaningful and impactful solutions for brands that want to make 
              a difference in the digital world.
            </p>
            <p  className="text-xl text-black-300 Roboto">We specialize in creating immersive visuals that explain,
               launch, and elevate products. Whether it’s 
               telling a compelling brand story or demonstrating the features of an innovative product
                we ensure every pixel serves a purpose.</p>
          </section>
          
          <section className="mt-8 md:mt-0">
            <h2 className="text-xl font-bold text-black mb-8">Services</h2>
            <div className="space-y-1">
              {services.map((service, index) => (
                <AnimatedService key={service} title={service} index={index} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;