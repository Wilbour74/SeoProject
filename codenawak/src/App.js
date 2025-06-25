import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Php from './components/Php';
import Javascript from './components/Javascript';
import Python from './components/Python';
import ReactPage from './components/ReactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-yellow-50 to-gray-200">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/php" element={<Php />} />
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/python" element={<Python />} />
            <Route path="/react" element={<ReactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
