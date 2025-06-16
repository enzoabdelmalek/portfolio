import React from 'react'
import "../styles/navbar.css";


function Navbar() {
  return (
    <div className="navbar">
    <ul className="navbar-left">
        <li>Enzo Abdelmalek</li>
    </ul>
    <ul className="navbar-right">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#mode">Mode</a></li>
        <li><a href="#language">Language</a></li>
    </ul>
    </div>
  )
}

export default Navbar