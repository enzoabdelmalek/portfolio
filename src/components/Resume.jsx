import React from 'react';
import '../styles/resume.css';

function Resume() {
  return (
    <section id="resume" className="download-cv-section">
      <h2 data-aos = "zoom-in">Download My CV</h2>
      <p data-aos = "zoom-in" data-aos-delay = "0.2s">You can download my CV in PDF format below.</p>
      <a
        href="/assets/Resume_Enzo_Abdelmalek_EN.pdf"
        download="Enzo_Abdelmalek_CV.pdf"
        className="btn"
      >
        📄 Download CV
      </a>
    </section>
  );
}

export default Resume;
