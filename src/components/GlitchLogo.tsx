import React from 'react';
import { Link } from 'react-router-dom';
import './GlitchLogo.css';

const GlitchLogo = () => {
  return (
    <Link to="/" className="glitch-wrapper text-3xl md:text-4xl">
      <span className="glitch" data-text="frame7labs">frame7labs</span>
    </Link>
  );
};

export default GlitchLogo;