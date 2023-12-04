import React from 'react';
import Introduce from '../Introduce/Introduce';
import SkillsButton from '../Skillsbutton/SkillsButton';
import Keyskills from '../Keyskills/Keyskills';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div className='home'>
      <Introduce />
      <SkillsButton />
      <Keyskills />
      <Projects />
      <Skills />
    </div>
  )
}

export default Home