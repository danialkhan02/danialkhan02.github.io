import { useState, useEffect } from 'react';
import { FiCommand } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useWeather } from '../helpers/useWeather';

function Toolbar() {
  const { theme, toggleTheme, font, toggleFont } = useTheme();
  const [time, setTime] = useState('');
  const weather = useWeather();
  
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
        className={`mt-4 backdrop-blur-sm rounded-full px-6 py-2 border ${
          theme === 'dark' 
            ? 'bg-gray-800/20 border-gray-700/30' 
            : 'bg-white/80 border-gray-200'
        }`}
      >
        <div className="flex items-center justify-center space-x-4 text-text-secondary text-sm">
          <span className="flex items-center">
            <FiCommand className="inline-block mr-1" /> + K
          </span>
          <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-300'}>|</span>
          <button 
            onClick={toggleFont}
            className="hover:text-text-primary transition-colors"
          >
            Aa
          </button>
          <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-300'}>|</span>
          <button 
            onClick={toggleTheme}
            className="hover:text-text-primary transition-colors"
          >
            ☀
          </button>
          <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-300'}>|</span>
          <span>{time}</span>
          <span title={weather.city}>
            {weather.temp ? `${weather.temp}°C` : '12°C'}
          </span>
          <span>40 / 110</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Toolbar;