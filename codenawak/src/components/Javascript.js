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
        <p>JavaScript est le langage de programmation du web. Il permet de rendre les pages interactives et dynamiques, et s'utilise aussi bien côté client que côté serveur.</p>
        <h3 className="text-lg sm:text-xl">Exemple de code : Affichage dans la console</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`console.log('Hello, world!');`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Manipulation du DOM</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`document.getElementById('demo').innerText = 'Codenawak rocks!';`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Fonction et boucle</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`function afficherNombres() {\n  for(let i = 1; i <= 5; i++) {\n    console.log(i);\n  }\n}\nafficherNombres();`}</code></pre>
        <h3 className="text-lg sm:text-xl">Pourquoi apprendre JavaScript ?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Indispensable pour le développement web moderne</li>
          <li>Large écosystème de frameworks</li>
          <li>Utilisé côté client et côté serveur (Node.js)</li>
          <li>Permet de créer des applications interactives</li>
        </ul>
      </article>
    </section>
  );
} 