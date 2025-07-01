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
        <p>PHP (Hypertext Preprocessor) est un langage de script open source, principalement utilisé pour le développement web côté serveur. Grâce à sa simplicité, sa flexibilité et sa compatibilité avec de nombreux systèmes d'exploitation et serveurs web, PHP est devenu l'un des langages les plus populaires pour créer des sites dynamiques, des applications web, des blogs, des boutiques en ligne et des systèmes de gestion de contenu (CMS) comme WordPress, Drupal ou Joomla.</p>
        <h3 className="text-lg sm:text-xl">Histoire et évolution de PHP</h3>
        <p>Créé en 1994 par Rasmus Lerdorf, PHP a évolué pour devenir un langage robuste, orienté objet, avec une vaste communauté. Aujourd'hui, PHP 8 offre des performances accrues, de nouvelles fonctionnalités et une sécurité renforcée.</p>
        <h3 className="text-lg sm:text-xl">Exemple de code : Affichage simple</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`<?php\necho 'Hello, world!';\n?>`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Boucle et variables</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`<?php\n$fruits = ['pomme', 'banane', 'orange'];\nforeach ($fruits as $fruit) {\n  echo $fruit . '<br>';\n}\n?>`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Formulaire et traitement</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`<form method=\"post\">\n  <input type=\"text\" name=\"nom\">\n  <button type=\"submit\">Envoyer</button>\n</form>\n<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n  echo 'Bonjour ' . htmlspecialchars($_POST['nom']);\n}\n?>`}</code></pre>
        <h3 className="text-lg sm:text-xl">Cas d'usage de PHP</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Développement de sites web dynamiques et interactifs</li>
          <li>Création d'API RESTful pour applications mobiles ou web</li>
          <li>Gestion de bases de données (MySQL, PostgreSQL, SQLite, etc.)</li>
          <li>Automatisation de tâches serveur</li>
          <li>Développement de CMS et de blogs</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Frameworks populaires en PHP</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Laravel : framework moderne, élégant et sécurisé</li>
          <li>Symfony : framework robuste pour applications complexes</li>
          <li>CodeIgniter, CakePHP, Zend Framework</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Pourquoi apprendre PHP ?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Très utilisé dans le monde professionnel</li>
          <li>Facile à héberger et à déployer</li>
          <li>Communauté active et ressources abondantes</li>
          <li>Idéal pour débuter dans le développement web</li>
          <li>Compatible avec de nombreux frameworks et CMS</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Ressources pour aller plus loin</h3>
        <ul className="list-disc list-inside ml-4">
          <li><a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">Documentation officielle PHP</a></li>
          <li><a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">Laravel</a></li>
          <li><a href="https://symfony.com/" target="_blank" rel="noopener noreferrer">Symfony</a></li>
          <li><a href="https://www.w3schools.com/php/" target="_blank" rel="noopener noreferrer">Tutoriels PHP W3Schools</a></li>
        </ul>
      </article>
    </section>
  );
} 