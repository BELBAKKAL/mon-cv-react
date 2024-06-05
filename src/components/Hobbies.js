// src/components/Hobbies.js
import React from 'react';
import { FaPlane, FaFutbol, FaMusic, FaRunning } from 'react-icons/fa';

const Hobbies = () => {
  return (
    <section className="p-8 bg-white shadow-lg rounded-lg mt-8 animate__animated animate__fadeInUp">
      <h2 className="text-3xl font-bold text-indigo-600">Loisirs</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-4">
          <FaPlane className="text-2xl text-indigo-600" />
          <span className="text-lg font-semibold text-gray-700">Voyage</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaRunning className="text-2xl text-indigo-600" />
          <span className="text-lg font-semibold text-gray-700">Sport</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaMusic className="text-2xl text-indigo-600" />
          <span className="text-lg font-semibold text-gray-700">Écouter de la musique</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaFutbol className="text-2xl text-indigo-600" />
          <span className="text-lg font-semibold text-gray-700">Jouer au foot</span>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
