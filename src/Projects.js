// Projects.js
import React from 'react';
import './Projects.css'; // Import your Projects-specific CSS file

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project-card">
        <img
          src="project-image.jpg" // Replace with your project image URL
          alt="Project"
          className="project-image"
        />
        <h2 className="project-title">Project Title</h2>
        <p className="project-description">
          This is a brief description of the project. You can provide details
          about the technologies used and the purpose of the project.
        </p>
        <a href="#" className="project-link">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Projects;
