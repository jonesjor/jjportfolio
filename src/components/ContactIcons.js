// src/components/ContactIcons.js
import React from 'react';
import './Portfolio.css'; // Create a separate CSS file for styling

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" title="Email">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" title="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="tel:+1234567890" title="Phone">
        <i className="fas fa-phone-alt"></i>
      </a>
    </div>
  );
};

export default ContactIcons;
