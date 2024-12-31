import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <a href="mailto:hello@frame7labs.com" className="text-white/70 hover:text-white transition-colors">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>hello@frame7labs.com</span>
              </div>
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Location</h3>
            <p className="text-white/70">
              Hyderabad<br />
              India     
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Social</h3>
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          © {currentYear} frame7labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;