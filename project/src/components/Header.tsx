import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Music4, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Music4 className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Wander Music
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['home', 'artists', 'releases', 'blog', 'shop', 'contacts'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/10"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30 text-gray-800 dark:text-gray-200 backdrop-blur-sm transition-all duration-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-6 py-2 rounded-full bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30 text-purple-600 dark:text-purple-400 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              {i18n.language === 'ru' ? 'EN' : 'RU'}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;