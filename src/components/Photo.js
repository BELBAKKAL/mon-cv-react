// src/components/Photo.js
import React from 'react';
import 'animate.css';

const Photo = () => {
  return (
    <div className="flex justify-center mt-8 animate__animated animate__zoomIn">
      <img src="/logo-ecole.jpg" alt="Nom Prénom" className="rounded-full w-40 h-40 border-4 border-indigo-600 shadow-lg transform transition duration-500 hover:scale-110" />
    </div>
  );
};

export default Photo;
