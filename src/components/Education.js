// src/components/Education.js
import React from 'react';
import 'animate.css';

const Education = () => {
  return (
    <section className="p-8 bg-white shadow-lg rounded-lg mt-8 animate__animated animate__fadeInRight">
      <h2 className="text-3xl font-bold text-indigo-600">Formation et Diplômes</h2>
      <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
        <li>BAC option Pc - mention Très bien (2020-2021)</li>
        <li>CPGE MEKNES - Option : MP (2021-2023)</li>
        <li>EMI - filière : Génie Electrique (Option : Réseaux Télécommunications)</li>
      </ul>
    </section>
  );
};

export default Education;
