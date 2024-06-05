// src/components/Skills.js
import React from 'react';
import 'animate.css';

const Skills = () => {
  return (
    <section className="p-8 bg-white shadow-lg rounded-lg mt-8 animate__animated animate__fadeInUp">
      <h2 className="text-3xl font-bold text-indigo-600">Compétences Techniques</h2>
      <ul className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
        <li>PYTHON</li>
        <li>C++</li>
        <li>Microsoft Tools</li>
        <li>VMware Vsphere (ESXI)</li>
        <li>Proteus professional 8</li>
      </ul>
    </section>
  );
};

export default Skills;
