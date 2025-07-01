import React from 'react';
import { Helmet } from 'react-helmet';

export default function Python() {
  return (
    <section className="container mx-auto py-8 px-2 sm:px-4 flex flex-col items-center text-center animate-fade-in min-h-[80vh]" aria-labelledby="python-title">
      <Helmet>
        <title>Python | Codenawak</title>
        <meta name="description" content="Apprends le Python facilement avec Codenawak. Découvre des exemples, des explications, des astuces et des ressources pour progresser en Python." />
      </Helmet>
      <h1 id="python-title" className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6 animate-bounce">Python avec <span className="text-gray-900">Codenawak</span></h1>
      <article className="prose max-w-full w-full mx-auto text-left animate-fade-in-up px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-600">Introduction à Python</h2>
        <p>Python est un langage de programmation polyvalent, open source, apprécié pour sa syntaxe claire et sa facilité d'apprentissage. Il est utilisé dans de nombreux domaines : développement web, data science, intelligence artificielle, automatisation, scripting, analyse de données, machine learning, deep learning, cybersécurité, finance, etc. Python est compatible avec de nombreux systèmes d'exploitation et dispose d'une vaste bibliothèque standard.</p>
        <h3 className="text-lg sm:text-xl">Histoire et évolution de Python</h3>
        <p>Créé en 1991 par Guido van Rossum, Python a connu une croissance exponentielle grâce à sa simplicité et à la puissance de ses bibliothèques. Python 3, la version actuelle, est recommandée pour tous les nouveaux projets.</p>
        <h3 className="text-lg sm:text-xl">Exemple de code : Affichage simple</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`print('Hello, world!')`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Boucle et liste</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`fruits = ['pomme', 'banane', 'orange']\nfor fruit in fruits:\n    print(fruit)`}</code></pre>
        <h3 className="text-lg sm:text-xl">Exemple de code : Fonction</h3>
        <pre className="bg-gray-100 p-3 sm:p-4 rounded mb-4 text-xs sm:text-sm overflow-x-auto"><code>{`def saluer(nom):\n    print(f'Bonjour {nom}')\nsaluer('Codenawak')`}</code></pre>
        <h3 className="text-lg sm:text-xl">Cas d'usage de Python</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Analyse et visualisation de données (Pandas, Matplotlib, Seaborn)</li>
          <li>Développement web (Django, Flask, FastAPI)</li>
          <li>Automatisation de tâches et scripting</li>
          <li>Intelligence artificielle et machine learning (scikit-learn, TensorFlow, PyTorch)</li>
          <li>Cybersécurité et tests d'intrusion</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Frameworks et bibliothèques populaires</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Django : framework web complet et sécurisé</li>
          <li>Flask : micro-framework léger pour le web</li>
          <li>Pandas, NumPy, Matplotlib : data science et analyse de données</li>
          <li>TensorFlow, PyTorch : intelligence artificielle et deep learning</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Pourquoi apprendre Python ?</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Syntaxe claire et lisible, idéale pour débuter</li>
          <li>Très utilisé en intelligence artificielle, data science et automatisation</li>
          <li>Communauté très active et ressources abondantes</li>
          <li>Polyvalent et adapté à tous les niveaux</li>
          <li>Nombreux débouchés professionnels</li>
        </ul>
        <h3 className="text-lg sm:text-xl">Ressources pour aller plus loin</h3>
        <ul className="list-disc list-inside ml-4">
          <li><a href="https://docs.python.org/fr/3/" target="_blank" rel="noopener noreferrer">Documentation officielle Python</a></li>
          <li><a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a></li>
          <li><a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">Flask</a></li>
          <li><a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">Pandas</a></li>
          <li><a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">scikit-learn</a></li>
        </ul>
      </article>
    </section>
  );
} 