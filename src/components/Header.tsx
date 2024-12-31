import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-white/10 backdrop-blur-md border-b border-black/10 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            <Logo />
            
            <div className="hidden md:flex items-center space-x-16">
              {['work', 'labs', 'info'].map((item) => (
                <Link 
                  key={item}
                  to={`/${item}`} 
                  className={`text-lg tracking-wide transition-colors duration-300 ${
                    location.pathname === `/${item}`
                      ? 'text-black font-medium'
                      : 'text-black/70 hover:text-black'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
            
            <button 
              className="md:hidden text-black/70 hover:text-black transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;