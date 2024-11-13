// src/components/Education.js
import React from 'react';
import './Portfolio.css';

const Education = () => {
  const education = [
    { institution: "Kean University", degree: "B.Sc. in Information Technology and Cybersecurity", year: "2020-2025" }
  ];

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="education-cards">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

