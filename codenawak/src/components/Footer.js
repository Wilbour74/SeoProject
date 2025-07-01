import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-900 text-gray-200 text-center rounded-t-xl animate-fade-in-up mt-auto" aria-label="Pied de page">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-4 px-4 sm:px-8">
        <div className="mb-4 md:mb-0 flex-1 min-w-[180px] text-center md:text-left">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Codenawak</h2>
          <p className="text-sm">La plateforme pour apprendre à coder simplement et efficacement.</p>
          <p className="text-xs mt-2">&copy; {new Date().getFullYear()} Codenawak. Tous droits réservés.</p>
        </div>
        <nav aria-label="Liens utiles" className="mb-4 md:mb-0 flex-1 min-w-[180px]">
          <ul className="flex flex-col sm:flex-row justify-center md:justify-start gap-2 sm:gap-4 text-sm">
            <li><Link to="/php" className="hover:text-yellow-400 transition">PHP</Link></li>
            <li><Link to="/javascript" className="hover:text-yellow-400 transition">JavaScript</Link></li>
            <li><Link to="/python" className="hover:text-yellow-400 transition">Python</Link></li>
            <li><Link to="/react" className="hover:text-yellow-400 transition">React</Link></li>
          </ul>
        </nav>
        <div className="text-xs text-gray-400 flex-1 min-w-[180px] flex flex-col items-center md:items-end">
          <div>
            <a href="https://github.com/Wilbour74/SeoProject" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">GitHub</a> |
          </div>
        </div>
      </div>
    </footer>
  );
} 