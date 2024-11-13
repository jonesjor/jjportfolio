// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: "Boondocks Matching Pairs Game",
    image: "/project1.jpg.png",
    details: "With the matching pairs game, I decided to fully customize the entire layout. Before the game even starts, I implemented an animation in which the cards reveal the images quickly before flipping back upside down. From there, the player can begin testing their memory. I decided to use my favorite cartoon, The Boondocks, as my theme. "
  },
  {
    id: 2,
    title: "Classic Snake Game ",
    image: "/project2.png",
    details: "This project is one of the more complex games that I have worked. My Snake Game showcases my skills is HTML, CSS, and PHP. This is the first game I have ever coded in Python and was extremely fun to make. While learning a new language was challenging, the rewarding feeling from produce such a classic game was amazing. "
  },
  {
    id: 3,
    title: "Rock Paper Scissors! Game",
    image: "/project3.png",
    details: "This project was one of the more simpler projects that I worked on. This is a simple yet vibrant RPS Game that I created using VSC. The languages showcased for this project were primarily HTML, CSS, and JS. When coding for this game, I decided to create a colorful background to make the interface more appealing. I also choose a bubble font to make the game look more playful. In order to play the game, the user simply picks between the three choices, and the game tells you whether or not the CPU chooses the same one as you by indicating a draw, win, or loss.  "
  },
];

const ProjectDetail = () => {
  const { id } = useParams(); // Get project ID from URL
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <section className="project-detail section">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <p>{project.details}</p>
    </section>
  );
};

export default ProjectDetail;
