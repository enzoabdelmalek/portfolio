import React, { useEffect, useRef } from "react";
import "../styles/skills.css";
import skills from "../constants/skills.js";

function Skills() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId;
    const speed = 0.4; // vitesse du scroll

    const animateScroll = () => {
      carousel.scrollLeft += speed;

      // reset si on atteint la fin
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 data-aos="zoom-in-down">My Skills</h2>
      <div className="carousel" data-aos="zoom-in-up" ref={carouselRef}>
        {skills.map((skill, index) => (
          <div key={index + skill.category} className="card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
