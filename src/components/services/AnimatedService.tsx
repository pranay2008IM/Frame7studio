import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedServiceProps {
  title: string;
  index: number;
}

const AnimatedService = ({ title, index }: AnimatedServiceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <motion.h3 
        className="text-2xl md:text-3xl font-light text-black/60 hover:text-black transition-colors duration-300 py-4 border-b border-white/10"
        whileHover={{ x: 20 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default AnimatedService;