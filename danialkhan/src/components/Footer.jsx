import { FiLink } from 'react-icons/fi';

function Footer() {  
  return (
    <>
      {/* Footer */}
      <footer className="fixed bottom-0 w-full p-4 flex justify-between items-center">
        <FiLink className="text-text-secondary" />
        <span className="text-text-secondary text-sm">v1.0</span>
      </footer>
    </>
  );
}

export default Footer;