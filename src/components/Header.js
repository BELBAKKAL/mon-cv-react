// src/components/Header.js
import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 flex items-center justify-between rounded-lg shadow-xl animate__animated animate__fadeInDown">
      <div>
        <h1 className="text-5xl font-extrabold">BELBAKKAL Youssef</h1>
        <p className="text-lg mt-4">Âge : 22ans</p>
        <p className="text-lg mt-2">Tél : +212660-639687</p>
        <p className="text-lg mt-2">
          <a href="mailto:Youssefbelbakkal485@gmail.com" className="text-white hover:text-gray-300">
            <FaEnvelope className="inline-block mr-2" />
            Youssefbelbakkal485@gmail.com
          </a>
        </p>
        <div className="mt-4 flex justify-start space-x-4">
          <a href="https://www.linkedin.com/in/nomprenom" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://www.facebook.com/nomprenom" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaFacebook className="text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

