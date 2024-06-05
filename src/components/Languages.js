// src/components/Languages.js
import React from 'react';
import 'animate.css';

const Languages = () => {
  return (
    <section className="p-8 bg-white shadow-lg rounded-lg mt-8 animate__animated animate__fadeInUp">
      <h2 className="text-3xl font-bold text-indigo-600">Compétences Linguistiques</h2>
      <div className="mt-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">ARABE - Natif</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-indigo-600 h-full w-full"></div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">FRANCAIS- Courant</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-indigo-600 h-full w-4/5"></div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">ANGLAIS - Intermédiaire</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-indigo-600 h-full w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
