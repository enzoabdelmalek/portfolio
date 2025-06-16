import React, { useEffect, useState } from 'react';
import '../styles/intro.css';

function Intro({ onFinish }) {
    const [text, setText] = useState('');
    const fullText = `Syystem's initialization...\nAccess granted`;
    const prev = '';
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length - 1) {
        setText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(typing);
        setTimeout(onFinish, 1000); // après animation, on lance le site
      }
    }, 80);

    return () => clearInterval(typing);
  }, [onFinish]);

  return (
    <div className="intro-container">
      <h1 className="typing-text">{text}</h1>
    </div>
  );
}

export default Intro;
