import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/gallery', label: t('gallery') },
    { path: '/links', label: t('links') },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-light text-gray-900 hover:text-indigo-600 transition-colors">
            Ole Helledie
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === item.path
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center space-x-1"
            >
              <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇩🇰'}</span>
              <span className="text-xs">{language === 'en' ? 'EN' : 'DA'}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center space-x-1"
            >
              <span className="text-sm">{language === 'en' ? '🇺🇸' : '🇩🇰'}</span>
            </Button>
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="sm"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-indigo-600 hover:bg-gray-50 rounded-md ${
                    location.pathname === item.path
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;