import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  onClick?: () => void;
}

const AnimatedImage = ({ src, alt, title, description, onClick }: AnimatedImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className="relative aspect-video group overflow-hidden rounded-lg cursor-pointer"
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          {description && <p className="text-white/80">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedImage;