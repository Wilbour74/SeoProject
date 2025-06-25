import React from 'react';
import { Helmet } from 'react-helmet';

export default function ReactPage() {
  return (
    <section className="container mx-auto py-8 px-2 sm:px-4 flex flex-col items-center text-center animate-fade-in min-h-[80vh]" aria-labelledby="react-title">
      <Helmet>
        <title>React | Codenawak</title>
        <meta name="description" content="Apprends React facilement avec Codenawak. Découvre des exemples, des explications, des astuces et des ressources pour progresser avec React." />
      </Helmet>
      <h1 id="react-title" className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6 animate-bounce">React avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-full w-full mx-auto text-left animate-fade-in-up px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-600">Introduction à React</h2>
        <p>React est une bibliothèque JavaScript pour construire des interfaces utilisateur interactives et modernes. Elle permet de créer des applications web dynamiques et performantes.</p>
        <h3 className="text-lg sm:text-xl">Exemple de code : Composant fonctionnel</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`function Hello() {\n  return <h1>Hello, world!</h1>;\n}`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Utilisation du state</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`import { useState } from 'react';\n\nfunction Compteur() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Compteur : {count}</p>\n      <button onClick={() => setCount(count + 1)}>Incrémenter</button>\n    </div>\n  );\n}`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Props</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`function Bonjour({ nom }) {\n  return <p>Bonjour {nom} !</p>;\n}`}</code></pre>
        <h3 className="text-lg sm:text-xl">Pourquoi apprendre React ?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Très utilisé pour les applications web modernes</li>
          <li>Composants réutilisables</li>
          <li>Large écosystème</li>
          <li>Facile à apprendre pour les développeurs JavaScript</li>
        </ul>
      </article>
    </section>
  );
} 