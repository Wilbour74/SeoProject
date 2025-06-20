import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>CodeNawak – Tutoriels pour apprendre à coder</title>
        <meta
          name="description"
          content="CodeNawak propose des tutoriels pratiques pour apprendre la programmation (JavaScript, Python, React, etc.) pas à pas."
        />
      </Helmet>

      <h1>Bienvenue sur CodeNawak</h1>
    </>
  );
}

export default App;
