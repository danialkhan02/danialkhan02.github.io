import { motion } from 'framer-motion';

function RecentWork() {
  const works = ['CampusSwap', 'Codei', 'RSLog'];
  
  return (
    <section>
      <h2 className="text-text-secondary text-sm mb-4">RECENT WORK</h2>
      <div className="space-y-4">
        {works.map((work) => (
          <motion.div 
            key={work}
            className="flex justify-between items-center hover:bg-gray-900 p-2 rounded cursor-pointer"
            whileHover={{ x: 10 }}
          >
            <h3 className="font-bold">{work}</h3>
            <span>→</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default RecentWork;