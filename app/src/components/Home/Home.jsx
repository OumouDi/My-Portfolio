import React from 'react';
import Introduce from '../Introduce/Introduce';
import SkillsButton from '../Skillsbutton/SkillsButton';
import Keyskills from '../Keyskills/Keyskills';

const Home = () => {
  return (
    <div className='home'>
      <Introduce />
      <SkillsButton />
      <Keyskills />
    </div>
  )
}

export default Home