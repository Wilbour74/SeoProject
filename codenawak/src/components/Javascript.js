import React from 'react';
import { Helmet } from 'react-helmet';

export default function Javascript() {
  return (
    <section className="container mx-auto py-10 px-4" aria-labelledby="js-title">
      <Helmet>
        <title>JavaScript | Codenawak</title>
        <meta name="description" content="Apprends le JavaScript facilement avec Codenawak. Découvre des exemples, des explications et des astuces pour progresser." />
      </Helmet>
      <h1 id="js-title" className="text-4xl font-bold text-yellow-500 mb-6">JavaScript avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-none">
        <h2>Introduction à JavaScript</h2>
        <p>JavaScript est le langage de programmation du web. Il permet de rendre les pages interactives et dynamiques.</p>
        <h3>Exemple de code :</h3>
        <pre className="bg-gray-100 p-4 rounded"><code>{`console.log('Hello, world!');`}</code></pre>
        <h3>Pourquoi apprendre JavaScript ?</h3>
        <ul>
          <li>Indispensable pour le développement web moderne</li>
          <li>Large écosystème de frameworks</li>
          <li>Utilisé côté client et côté serveur (Node.js)</li>
        </ul>
      </article>
    </section>
  );
} 