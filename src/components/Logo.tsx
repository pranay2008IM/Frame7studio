{/*import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="block w-12 h-12 relative group">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full text-white transition-transform duration-300 group-hover:scale-110"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path
          d="M20 20 L80 20 L80 30 L70 30 L70 40 L60 40 L60 50 L50 50 L50 60 L40 60 L40 70 L30 70 L30 80 L20 80 Z"
          fill="currentColor"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.svg>
    </Link>
  );
};

export default Logo;*/}
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logos1 from '../logo/logos1.png';

const Logo = () => {
  return (
    <Link to="/" className="block w-12 h-12 relative group bg-white/1">
      <motion.img
        src={logos1}
        alt="Logo"
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-150"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </Link>
  );
};

export default Logo;