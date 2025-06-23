import React from 'react';
import { Helmet } from 'react-helmet';

export default function ReactPage() {
  return (
    <section className="container mx-auto py-10 px-4" aria-labelledby="react-title">
      <Helmet>
        <title>React | Codenawak</title>
        <meta name="description" content="Apprends React facilement avec Codenawak. Découvre des exemples, des explications et des astuces pour progresser." />
      </Helmet>
      <h1 id="react-title" className="text-4xl font-bold text-yellow-500 mb-6">React avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-none">
        <h2>Introduction à React</h2>
        <p>React est une bibliothèque JavaScript pour construire des interfaces utilisateur interactives et modernes.</p>
        <h3>Exemple de code :</h3>
        <pre className="bg-gray-100 p-4 rounded"><code>{`function Hello() {\n  return <h1>Hello, world!</h1>;\n}`}</code></pre>
        <h3>Pourquoi apprendre React ?</h3>
        <ul>
          <li>Très utilisé pour les applications web modernes</li>
          <li>Composants réutilisables</li>
          <li>Large écosystème</li>
        </ul>
      </article>
    </section>
  );
} 