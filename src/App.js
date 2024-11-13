// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import WorkingHistory from './components/WorkingHistory';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactIcons from './components/ContactIcons';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Render the new sections here */}
        <AboutMe />             {/* Add the About Me section */}
        <WorkingHistory />      {/* Add the Working History section */}
        <Skills /> {    }
        <ContactIcons />
        
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;


