import { useState, useEffect } from 'react';
import { FiCommand } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

function Toolbar() {
  const { theme, toggleTheme, font, toggleFont } = useTheme();
  const [time, setTime] = useState('');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 bg-gray-800/20 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-700/30"
      >
        <div className="flex items-center justify-center space-x-4 text-text-secondary text-sm">
          <span className="flex items-center">
            <FiCommand className="inline-block mr-1" /> + K
          </span>
          <span className="text-gray-600">|</span>
          <button 
            onClick={toggleFont}
            className="hover:text-text-primary transition-colors"
          >
            T
          </button>
          <span className="text-gray-600">|</span>
          <button 
            onClick={toggleTheme}
            className="hover:text-text-primary transition-colors"
          >
            ☀
          </button>
          <span className="text-gray-600">|</span>
          <span>{time}</span>
          <span>12°C</span>
          <span>40 / 110</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Toolbar;