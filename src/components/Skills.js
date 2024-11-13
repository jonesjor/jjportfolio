// src/components/Skills.js
import React from 'react';
import './Portfolio.css';

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "CSS", "SQL", "UNIX/LINUX"];

  return (
    <section id="skills" className="section">
      <h2>Language Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
