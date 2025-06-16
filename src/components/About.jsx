import React from 'react'
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2 data-aos="fade-right">About Me</h2>
      <p data-aos="fade-left">
        Hello! I'm <span className='span'>Enzo Abdelmalek</span>, a final-year engineering student 
        specialized in <span className='one'>embedded systems</span>, <span className='two'>AI</span>, <span className='three'>data</span>, and <span className='four'>cybersecurity</span>.
      </p>
      <p data-aos="fade-right">
        I love working on innovative tech from smart robotics to AI-enhanced satellite systems. 
        I’m passionate about building things that matter and continuously learning new skills.
      </p>
    </section>
  );
}

export default About;
