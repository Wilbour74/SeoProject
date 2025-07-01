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
        <p>React est une bibliothèque JavaScript open source développée par Facebook, utilisée pour créer des interfaces utilisateur interactives, dynamiques et performantes. Grâce à son approche basée sur les composants, React facilite la création d'applications web modernes, évolutives et maintenables. React est largement utilisé dans le développement front-end, le développement d'applications mobiles (React Native), le développement d'applications SPA (Single Page Application) et le développement d'interfaces réactives.</p>
        <h3 className="text-lg sm:text-xl">Histoire et évolution de React</h3>
        <p>Lancée en 2013, React a révolutionné la façon de concevoir les interfaces web grâce au Virtual DOM, à la gestion du state et à la réutilisabilité des composants. Aujourd'hui, React est au cœur de nombreux sites et applications majeurs (Facebook, Instagram, Airbnb, Netflix, etc.).</p>
        <h3 className="text-lg sm:text-xl">Exemple de code : Composant fonctionnel</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`function Hello() {\n  return <h1>Hello, world!</h1>;\n}`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Utilisation du state</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`import { useState } from 'react';\n\nfunction Compteur() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Compteur : {count}</p>\n      <button onClick={() => setCount(count + 1)}>Incrémenter</button>\n    </div>\n  );\n}`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Props</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`function Bonjour({ nom }) {\n  return <p>Bonjour {nom} !</p>;\n}`}</code></pre>
        <h3 className="text-lg sm:text-xl">Cas d'usage de React</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Développement d'applications web interactives et dynamiques</li>
          <li>Création de Single Page Applications (SPA)</li>
          <li>Développement d'applications mobiles avec React Native</li>
          <li>Intégration avec des API REST ou GraphQL</li>
          <li>Création de dashboards, d'outils internes, de sites e-commerce</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Écosystème et outils React</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Next.js : framework pour le rendu côté serveur (SSR) et le static site generation (SSG)</li>
          <li>Redux, Zustand, Recoil : gestion avancée du state</li>
          <li>React Router : navigation et routage</li>
          <li>Material-UI, Chakra UI : bibliothèques de composants UI</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Pourquoi apprendre React ?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Très utilisé pour les applications web modernes</li>
          <li>Composants réutilisables et architecture modulaire</li>
          <li>Large écosystème et communauté active</li>
          <li>Facile à apprendre pour les développeurs JavaScript</li>
          <li>Nombreuses opportunités professionnelles</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Ressources pour aller plus loin</h3>
        <ul className="list-disc list-inside ml-4">
          <li><a href="https://fr.react.dev/" target="_blank" rel="noopener noreferrer">Documentation officielle React</a></li>
          <li><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></li>
          <li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a></li>
          <li><a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">React Router</a></li>
        </ul>
      </article>
    </section>
  );
} 