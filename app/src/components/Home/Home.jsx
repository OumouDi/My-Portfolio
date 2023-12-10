import React, { useState, useEffect } from 'react';
import Introduce from '../Introduce/Introduce';
import SkillsButton from '../Skillsbutton/SkillsButton';
import Keyskills from '../Keyskills/Keyskills';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import About from '../About/About';
import './home.css'; 

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='home'>
      <Introduce />
      <SkillsButton />
      <Keyskills />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <div className="scroll-container">
        {showScrollButton && (
          <button className='scroll-button' onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
