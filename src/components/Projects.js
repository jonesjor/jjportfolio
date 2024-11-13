// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Boondocks Matching Pairs",
      description: "Match each Boondocks character to win the game!",
      image: "./project1.jpg.png",
      link: "https://yourproject1link.com"
    },
    {
      id: 2,
      title: "Snake Game",
      description: "The classic Snake Game. Avoid bombs and get powerups to grow!",
      image: "./project2.png",
      link: "https://yourproject2link.com"
    },
    {
      id: 3,
      title: "Rock Paper Scissor",
      description: "Play against a CPU in RPS!",
      image: "./project3.png",
      link: "https://yourproject3link.com"
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <Link 
            key={project.id}
            to={`/project/${project.id}`} // Dynamic link based on project ID
            className="project-card-link"
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;