import './keyskills.css';
import { FaLaptopCode } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";

import React from 'react'

const Keyskills = () => {
  return (
    <div className='keySkills'>
        <div className="key">
          <FaLaptopCode className='icon' />
            <h1>Full Stack</h1>
            <p>My skills in JavaScript, React, React Native, and Node.js enable me to create high-performance and intuitive web and mobile applications.</p>
        </div>
        <div className="key">
          <RiTeamLine className='icon' />
            <h1>Team Player</h1>
            <p>Passionate about teamwork and collaboration, I am fully invested in every project.</p>
        </div>
        <div className="key">
          <FaProjectDiagram className='icon' />
            <h1>Agile Project management</h1>
            <p>I have strong skills in agile project management, allowing me to lead projects effectively while ensuring the quality of deliverables.</p>
        </div>
    </div>
  )
}

export default Keyskills