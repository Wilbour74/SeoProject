import React from 'react';
import { Helmet } from 'react-helmet';

export default function Python() {
  return (
    <section className="container mx-auto py-10 px-4" aria-labelledby="python-title">
      <Helmet>
        <title>Python | Codenawak</title>
        <meta name="description" content="Apprends le Python facilement avec Codenawak. Découvre des exemples, des explications et des astuces pour progresser." />
      </Helmet>
      <h1 id="python-title" className="text-4xl font-bold text-yellow-500 mb-6">Python avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-none">
        <h2>Introduction à Python</h2>
        <p>Python est un langage polyvalent, simple à apprendre et très utilisé en data science, web, automatisation, etc.</p>
        <h3>Exemple de code :</h3>
        <pre className="bg-gray-100 p-4 rounded"><code>{`print('Hello, world!')`}</code></pre>
        <h3>Pourquoi apprendre Python ?</h3>
        <ul>
          <li>Syntaxe claire et lisible</li>
          <li>Très utilisé en intelligence artificielle et data science</li>
          <li>Communauté très active</li>
        </ul>
      </article>
    </section>
  );
} 