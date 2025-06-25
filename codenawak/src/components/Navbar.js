import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="bg-gray-900 text-white shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 relative" aria-label="Navigation principale">
        <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tight text-yellow-400">Codenawak</Link>
        <button className="sm:hidden flex items-center px-3 py-2 border rounded text-yellow-400 border-yellow-400" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        <ul className={`flex-col sm:flex-row flex ${open ? 'flex' : 'hidden'} sm:flex space-y-4 sm:space-y-0 sm:space-x-6 text-base sm:text-lg absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent z-20 p-4 sm:p-0 transition-all`}>
          <li><Link to="/php" className="hover:text-yellow-400 transition block py-2 sm:py-0">PHP</Link></li>
          <li><Link to="/javascript" className="hover:text-yellow-400 transition block py-2 sm:py-0">JavaScript</Link></li>
          <li><Link to="/python" className="hover:text-yellow-400 transition block py-2 sm:py-0">Python</Link></li>
          <li><Link to="/react" className="hover:text-yellow-400 transition block py-2 sm:py-0">React</Link></li>
        </ul>
      </nav>
    </header>
  );
} 