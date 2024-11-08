import { FiCommand, FiType, FiSun } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button className="text-text-secondary"><FiCommand /> + K</button>
        <button className="text-text-secondary"><FiType /></button>
        <button className="text-text-secondary"><FiSun /></button>
      </div>
      <div className="text-text-secondary">
        11:22 • 12°C • 40/110
      </div>
    </nav>
  );
}

export default Navbar;