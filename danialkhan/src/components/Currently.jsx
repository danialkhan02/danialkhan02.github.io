import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Role from './Role';

function Currently() {
  const [isExpanded, setIsExpanded] = useState(false);

  const currentRole = {
    title: "Software Engineer",
    company: "Rocscience",
    location: "Toronto",
    period: "May 2023 - Present",
    logo: "/logos/rocscience.jpg"
  };

  const previousRoles = [
    {
      title: "Software Developer Intern",
      company: "Rocscience",
      location: "Toronto",
      period: "May 2022 - August 2022",
      logo: "/logos/rocscience.jpg"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-text-secondary text-sm mb-4">CURRENTLY</h2>
      <div className="space-y-8">
        <Role {...currentRole} />

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-text-secondary hover:text-text-primary transition-colors"
        >
          <motion.span
            animate={{ rotate: isExpanded ? 90 : 0 }}
            className="mr-2 inline-block"
          >
            ›
          </motion.span>
          Previous roles
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-8 overflow-hidden"
            >
              {previousRoles.map((role, index) => (
                <Role key={index} {...role} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Currently;