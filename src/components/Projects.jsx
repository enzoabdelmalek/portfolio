import projects from '../constants/projects.js';
import React from 'react';
import '../styles/projects.css';

function Projects() {

      

    return (
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" data-aos="zoom-in-up">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;