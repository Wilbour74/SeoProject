import React from 'react';
import { Helmet } from 'react-helmet';

export default function Php() {
  return (
    <section className="container mx-auto py-10 px-4" aria-labelledby="php-title">
      <Helmet>
        <title>PHP | Codenawak</title>
        <meta name="description" content="Apprends le PHP facilement avec Codenawak. Découvre des exemples, des explications et des astuces pour progresser." />
      </Helmet>
      <h1 id="php-title" className="text-4xl font-bold text-yellow-500 mb-6">PHP avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-none">
        <h2>Introduction à PHP</h2>
        <p>PHP est un langage de script côté serveur très utilisé pour créer des sites web dynamiques. Il est facile à apprendre et puissant pour développer des applications web.</p>
        <h3>Exemple de code :</h3>
        <pre className="bg-gray-100 p-4 rounded"><code>{`<?php\necho 'Hello, world!';\n?>`}</code></pre>
        <h3>Pourquoi apprendre PHP ?</h3>
        <ul>
          <li>Très utilisé dans le monde professionnel</li>
          <li>Facile à héberger</li>
          <li>Communauté active</li>
        </ul>
      </article>
    </section>
  );
} 