import React from 'react';
import { Helmet } from 'react-helmet';

export default function Javascript() {
  return (
    <section className="container mx-auto py-8 px-2 sm:px-4 flex flex-col items-center text-center animate-fade-in min-h-[80vh]" aria-labelledby="js-title">
      <Helmet>
        <title>JavaScript | Codenawak</title>
        <meta name="description" content="Apprends le JavaScript facilement avec Codenawak. Découvre des exemples, des explications, des astuces et des ressources pour progresser en JavaScript." />
      </Helmet>
      <h1 id="js-title" className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6 animate-bounce">JavaScript avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-full w-full mx-auto text-left animate-fade-in-up px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-600">Introduction à JavaScript</h2>
        <p>JavaScript est le langage de programmation incontournable du web. Il permet de rendre les pages web interactives, dynamiques et réactives. JavaScript s'utilise aussi bien côté client (navigateur) que côté serveur (Node.js). Il est à la base de nombreux frameworks et bibliothèques modernes (React, Angular, Vue.js, Svelte, etc.) et permet de créer des applications web, mobiles, des jeux, des API, des scripts d'automatisation, etc.</p>
        <h3 className="text-lg sm:text-xl">Histoire et évolution de JavaScript</h3>
        <p>Créé en 1995 par Brendan Eich, JavaScript a évolué pour devenir un langage puissant, orienté objet, fonctionnel et asynchrone. Avec l'arrivée d'ECMAScript 6 (ES6) et des versions ultérieures, JavaScript a gagné en expressivité et en performance.</p>
        <h3 className="text-lg sm:text-xl">Exemple de code : Affichage dans la console</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`console.log('Hello, world!');`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Manipulation du DOM</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`document.getElementById('demo').innerText = 'Codenawak rocks!';`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Fonction et boucle</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`function afficherNombres() {\n  for(let i = 1; i <= 5; i++) {\n    console.log(i);\n  }\n}\nafficherNombres();`}</code></pre>
        <h3 className="text-lg sm:text-xl">Cas d'usage de JavaScript</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Développement d'applications web interactives</li>
          <li>Création de Single Page Applications (SPA)</li>
          <li>Développement côté serveur avec Node.js</li>
          <li>Automatisation de tâches et scripting</li>
          <li>Développement de jeux, d'API, d'extensions de navigateur</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Frameworks et bibliothèques populaires</h3>
        <ul className="list-disc list-inside ml-4">
          <li>React, Angular, Vue.js, Svelte : frameworks front-end</li>
          <li>Node.js, Express : développement back-end</li>
          <li>jQuery, D3.js, Three.js : manipulation du DOM, data visualisation, 3D</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Pourquoi apprendre JavaScript ?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Indispensable pour le développement web moderne</li>
          <li>Large écosystème de frameworks et bibliothèques</li>
          <li>Utilisé côté client et côté serveur (Node.js)</li>
          <li>Permet de créer des applications interactives et performantes</li>
          <li>Nombreuses opportunités professionnelles</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Ressources pour aller plus loin</h3>
        <ul className="list-disc list-inside ml-4">
          <li><a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">Documentation JavaScript MDN</a></li>
          <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
          <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a></li>
          <li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a></li>
          <li><a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular</a></li>
        </ul>
      </article>
    </section>
  );
} 