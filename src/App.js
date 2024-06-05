// src/App.js
import React from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import Objective from './components/Objective';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Hobbies from './components/Hobbies'; // Import the Hobbies component
import Footer from './components/Footer';
import './index.css';
import 'animate.css';

function App() {
  return (
    <div className="font-sans bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen p-4">
      <div className="container mx-auto max-w-4xl">
        <Header />
        <Photo />
        <Objective />
        <Education />
        <Skills />
        <Languages />
        <Hobbies /> {/* Add the Hobbies component */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
