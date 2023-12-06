import React from 'react';
import Introduce from '../Introduce/Introduce';
import SkillsButton from '../Skillsbutton/SkillsButton';
import Keyskills from '../Keyskills/Keyskills';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {


  return (
    
    <div className='home'>
      <Introduce />
      <SkillsButton  />
      <Keyskills/>
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default Home