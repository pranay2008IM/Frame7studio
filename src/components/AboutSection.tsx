import React from 'react';
import { motion } from 'framer-motion';
import ScrollingText from './ScrollingText';

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-black mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We are Frames
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl text-black/80 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/*At Frame7Studio, we blur the lines between art, technology, and storytelling. With a relentless passion for design, our agency specializes in creating cutting-edge 3D visuals, animations, and immersive experiences that captivate and inspire. We collaborate with global brands, visionary creators, and forward-thinking startups to bring ideas to life in ways that transcend the ordinary.*/}
          At Frame7Studio ,we specialize in crafting high-end 3D graphics that bring products to life. We cover the entire pipeline—from initial concepting to final production—ensuring a seamless process that transforms ideas into stunning visual narratives.
        </motion.p>
      </div>
      <ScrollingText />
    </div>
  );
};

export default AboutSection;