import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="container mx-auto py-16 px-4 text-center" aria-labelledby="home-title">
      <Helmet>
        <title>Codenawak - Apprends à coder simplement</title>
        <meta name="description" content="Codenawak, la plateforme pour apprendre à coder facilement : PHP, JavaScript et plus. Découvre des rubriques, des exemples et des conseils pour progresser." />
      </Helmet>
      <h1 id="home-title" className="text-5xl font-extrabold text-yellow-500 mb-4">Bienvenue sur <span className="text-gray-900">Codenawak</span></h1>
      <p className="text-xl mb-8">La plateforme pour apprendre à coder simplement, étape par étape.</p>
      <nav aria-label="Rubriques principales" className="mb-12">
        <ul className="flex flex-col md:flex-row justify-center gap-6 text-lg">
          <li><Link to="/php" className="px-6 py-3 bg-yellow-400 text-gray-900 rounded shadow hover:bg-yellow-300 font-semibold transition">Découvrir PHP</Link></li>
          <li><Link to="/javascript" className="px-6 py-3 bg-yellow-400 text-gray-900 rounded shadow hover:bg-yellow-300 font-semibold transition">Découvrir JavaScript</Link></li>
        </ul>
      </nav>
      <footer className="mt-16 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Codenawak. Tous droits réservés.
      </footer>
    </section>
  );
}
