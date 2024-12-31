import React from 'react';
import { motion } from 'framer-motion';

interface MasonryGridProps {
  images: { url: string; span: number }[];
}

const MasonryGrid = ({ images }: MasonryGridProps) => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="mb-4 break-inside-avoid"
        >
          <div className="relative overflow-hidden rounded-lg" style={{ 
            paddingBottom: `${image.span * 100}%`
          }}>
            <img
              src={image.url}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;