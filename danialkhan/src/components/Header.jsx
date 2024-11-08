import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-32"
    >
      <div className="mb-8">
        <span className="text-text-secondary text-sm">Profile</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Hi, I am Danial.</h1>
      <p className="text-text-secondary text-lg">
        I am a software engineer and a creative based in Toronto, Canada.
      </p>
    </motion.div>
  );
}

export default Header;