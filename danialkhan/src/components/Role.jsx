import { motion } from 'framer-motion';

function Role({ title, company, location, period, logo }) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-text-secondary">{period}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-right">
          <p>{company}</p>
          <p className="text-text-secondary">{location}</p>
        </div>
        {logo && (
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={logo} alt={company} className="w-6 h-6 object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Role;