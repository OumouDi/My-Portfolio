import React from 'react';
import Introduce from '../Introduce/Introduce';
import SkillsButton from '../Skillsbutton/SkillsButton';
import Keyskills from '../Keyskills/Keyskills';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div className='home'>
      <Introduce />
      <SkillsButton />
      <Keyskills />
      <Projects />
    </div>
  )
}

export default Home