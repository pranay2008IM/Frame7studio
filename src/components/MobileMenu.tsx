import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div 
      className={`fixed inset-0 bg-white transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-black">
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex flex-col items-center space-y-8 mt-20">
        <Link 
          to="/work" 
          className="text-black text-2xl hover:text-gray-300 transition"
          onClick={onClose}
        >
          Work
        </Link>
        <Link 
          to="/labs" 
          className="text-black text-2xl hover:text-gray-300 transition"
          onClick={onClose}
        >
          Labs
        </Link>
        <Link 
          to="/info" 
          className="text-black text-2xl hover:text-gray-300 transition"
          onClick={onClose}
        >
          Info
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;