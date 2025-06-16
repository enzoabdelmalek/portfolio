import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Intro from './components/Intro.jsx'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // ← force le scroll tout en haut au premier chargement
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
    {showIntro ? (
      <Intro onFinish={() => setShowIntro(false)} />
    ) : (
    <>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact/>
        <Resume/>
      </main>
    </>
  )
}
</>
  );
}

export default App
