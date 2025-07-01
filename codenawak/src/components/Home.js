import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="container mx-auto py-10 px-2 sm:px-4 flex flex-col items-center text-center animate-fade-in min-h-[80vh]" aria-labelledby="home-title">
      <Helmet>
        <title>Codenawak - Apprends à coder simplement</title>
        <meta name="description" content="Codenawak, la plateforme pour apprendre à coder facilement : PHP, JavaScript, Python, React et plus. Découvre des rubriques, des exemples, des conseils et des ressources pour progresser." />
      </Helmet>
      <h1 id="home-title" className="text-5xl font-extrabold text-yellow-500 mb-4 drop-shadow-lg animate-bounce">Bienvenue sur <span className="text-gray-900">Codenawak</span></h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-200">La plateforme pour apprendre à coder simplement, étape par étape. Explore nos rubriques pour découvrir des tutoriels, des exemples de code, des astuces et des ressources pour progresser dans le développement web et la programmation.</p>
      <section className="mb-12 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-yellow-600">Notre pédagogie</h2>
        <p className="max-w-xl mx-auto">Codenawak propose une approche progressive, adaptée à tous les niveaux, du débutant à l'expert. Nos contenus sont pensés pour être accessibles, interactifs et concrets, avec des explications claires, des exemples pratiques et des exercices pour s'entraîner.</p>
      </section>
      <section className="mb-12 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-yellow-600">Bénéfices de la plateforme</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-xl">
          <li>Accès gratuit à des ressources de qualité</li>
          <li>Progression à ton rythme, où que tu sois</li>
          <li>Exemples concrets et projets pratiques</li>
          <li>Support de la communauté et entraide</li>
          <li>Découverte des dernières technologies web</li>
        </ul>
      </section>
      <nav aria-label="Rubriques principales" className="mb-12 w-full flex justify-center">
        <ul className="flex flex-col items-center gap-4 w-full max-w-xs">
          <li className="w-full"><Link to="/php" className="block w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded shadow hover:bg-yellow-300 font-semibold transition duration-300 transform hover:scale-105 text-center text-base sm:text-lg md:text-xl">Découvrir PHP</Link></li>
          <li className="w-full"><Link to="/javascript" className="block w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded shadow hover:bg-yellow-300 font-semibold transition duration-300 transform hover:scale-105 text-center text-base sm:text-lg md:text-xl">Découvrir JavaScript</Link></li>
          <li className="w-full"><Link to="/python" className="block w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded shadow hover:bg-yellow-300 font-semibold transition duration-300 transform hover:scale-105 text-center text-base sm:text-lg md:text-xl">Découvrir Python</Link></li>
          <li className="w-full"><Link to="/react" className="block w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded shadow hover:bg-yellow-300 font-semibold transition duration-300 transform hover:scale-105 text-center text-base sm:text-lg md:text-xl">Découvrir React</Link></li>
        </ul>
      </nav>
      <div className="max-w-3xl w-full mx-auto space-y-8 animate-fade-in delay-300">
        <section>
          <h2 className="text-3xl font-bold mb-2 text-yellow-600">Pourquoi apprendre à coder avec Codenawak ?</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-xl">
            <li>Des tutoriels clairs et progressifs pour tous les niveaux</li>
            <li>Des exemples de code concrets et expliqués</li>
            <li>Des astuces pour progresser rapidement</li>
            <li>Des ressources pour aller plus loin (livres, sites, vidéos)</li>
            <li>Une communauté d'entraide et de partage</li>
          </ul>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-2 text-yellow-600">Nos rubriques phares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <article className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">PHP</h3>
              <p>Découvre les bases du développement web côté serveur, la gestion de formulaires, la connexion à une base de données, et bien plus !</p>
            </article>
            <article className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">JavaScript</h3>
              <p>Apprends à rendre tes pages web interactives, manipuler le DOM, utiliser les API, et créer des applications dynamiques.</p>
            </article>
            <article className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Python</h3>
              <p>Initie-toi à la programmation avec un langage simple et puissant, utilisé en data science, intelligence artificielle, automatisation, etc.</p>
            </article>
            <article className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">React</h3>
              <p>Maîtrise la création d'interfaces modernes et réactives avec la bibliothèque JavaScript la plus populaire du moment.</p>
            </article>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-2 text-yellow-600">Ressources gratuites</h2>
          <p>Accède à une sélection de ressources gratuites pour t'aider à progresser : livres, sites, vidéos, exercices interactifs, et plus encore !</p>
          <ul className="list-disc list-inside text-left mx-auto max-w-xl mt-2">
            <li><a href="https://www.freecodecamp.org/fr/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a> : Cours interactifs et projets web</li>
            <li><a href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer">OpenClassrooms</a> : Tutoriels et parcours diplômants</li>
            <li><a href="https://www.codecademy.com/fr" target="_blank" rel="noopener noreferrer">Codecademy</a> : Exercices pratiques en ligne</li>
            <li><a href="https://developer.mozilla.org/fr/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> : Documentation de référence</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
