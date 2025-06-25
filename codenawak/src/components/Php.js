import React from 'react';
import { Helmet } from 'react-helmet';

export default function Php() {
  return (
    <section className="container mx-auto py-8 px-2 sm:px-4 flex flex-col items-center text-center animate-fade-in min-h-[80vh]" aria-labelledby="php-title">
      <Helmet>
        <title>PHP | Codenawak</title>
        <meta name="description" content="Apprends le PHP facilement avec Codenawak. Découvre des exemples, des explications, des astuces et des ressources pour progresser en PHP." />
      </Helmet>
      <h1 id="php-title" className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6 animate-bounce">PHP avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-full w-full mx-auto text-left animate-fade-in-up px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-600">Introduction à PHP</h2>
        <p>PHP est un langage de script côté serveur très utilisé pour créer des sites web dynamiques. Il est facile à apprendre et puissant pour développer des applications web.</p>
        <h3 className="text-lg sm:text-xl">Exemple de code : Affichage simple</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`<?php\necho 'Hello, world!';\n?>`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Boucle et variables</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`<?php\n$fruits = ['pomme', 'banane', 'orange'];\nforeach ($fruits as $fruit) {\n  echo $fruit . '<br>';\n}\n?>`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Formulaire et traitement</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`<form method=\"post\">\n  <input type=\"text\" name=\"nom\">\n  <button type=\"submit\">Envoyer</button>\n</form>\n<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n  echo 'Bonjour ' . htmlspecialchars($_POST['nom']);\n}\n?>`}</code></pre>
        <h3 className="text-lg sm:text-xl">Pourquoi apprendre PHP ?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Très utilisé dans le monde professionnel</li>
          <li>Facile à héberger</li>
          <li>Communauté active</li>
          <li>Idéal pour débuter dans le développement web</li>
        </ul>
      </article>
    </section>
  );
} 