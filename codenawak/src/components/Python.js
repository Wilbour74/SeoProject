import React from 'react';
import { Helmet } from 'react-helmet';

export default function Python() {
  return (
    <section className="container mx-auto py-8 px-2 sm:px-4 flex flex-col items-center text-center animate-fade-in min-h-[80vh]" aria-labelledby="python-title">
      <Helmet>
        <title>Python | Codenawak</title>
        <meta name="description" content="Apprends le Python facilement avec Codenawak. Découvre des exemples, des explications, des astuces et des ressources pour progresser en Python." />
      </Helmet>
      <h1 id="python-title" className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6 animate-bounce">Python avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-full w-full mx-auto text-left animate-fade-in-up px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-600">Introduction à Python</h2>
        <p>Python est un langage polyvalent, simple à apprendre et très utilisé en data science, web, automatisation, intelligence artificielle, etc.</p>
        <h3 className="text-lg sm:text-xl">Exemple de code : Affichage simple</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`print('Hello, world!')`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Boucle et liste</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`fruits = ['pomme', 'banane', 'orange']\nfor fruit in fruits:\n    print(fruit)`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Fonction</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`def saluer(nom):\n    print(f'Bonjour {nom}')\nsaluer('Codenawak')`}</code></pre>
        <h3 className="text-lg sm:text-xl">Pourquoi apprendre Python ?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Syntaxe claire et lisible</li>
          <li>Très utilisé en intelligence artificielle et data science</li>
          <li>Communauté très active</li>
          <li>Idéal pour débuter en programmation</li>
        </ul>
      </article>
    </section>
  );
} 