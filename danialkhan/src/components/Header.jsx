import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <img 
        src="/avatar.jpg" 
        alt="Profile" 
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">Hi, I am Danial.</h1>
      <p className="text-text-secondary">
        I am a software engineer and creative based in Toronto, Canada.
      </p>
    </motion.div>
  );
}

export default Header;