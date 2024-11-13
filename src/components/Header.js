// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; // Make sure to adjust the path if needed

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="home-button">
        Home
      </Link>
      <div className="header-content">
        <img src="/profile-pic.jpg.jpg" alt="Profile" className="profile-pic" />
        <h1>Jordyn Jones</h1>
        <nav>
        <Link to="#aboutme">About Me</Link>
        <Link to="#workinghistory">Working History</Link>
        <Link to="#skills">Skills</Link>
        <Link to="#projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

