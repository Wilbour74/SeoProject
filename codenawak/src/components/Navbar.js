import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6" aria-label="Navigation principale">
        <Link to="/" className="text-3xl font-bold tracking-tight text-yellow-400">Codenawak</Link>
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/php" className="hover:text-yellow-400 transition">PHP</Link></li>
          <li><Link to="/javascript" className="hover:text-yellow-400 transition">JavaScript</Link></li>
          <li><Link to="/python" className="hover:text-yellow-400 transition">Python</Link></li>
          <li><Link to="/react" className="hover:text-yellow-400 transition">React</Link></li>
        </ul>
      </nav>
    </header>
  );
} 