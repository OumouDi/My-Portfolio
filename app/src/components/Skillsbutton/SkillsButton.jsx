import React from 'react';
import './skillsButton.css';
import { FaCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const SkillsButton = () => {
  return (
    <div className='skillsButton'>
        <button ><FaCode className='icon'/>Web Developement</button>
        <button> <FaProjectDiagram className='icon'/>Agile Project Management</button>
    </div>
  )
}

export default SkillsButton