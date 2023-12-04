import React from 'react';
import './projects.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectData from './projectData';
import { Link } from 'react-router-dom';
import { BsGithub } from "react-icons/bs";
import { Link as ScrollLink } from 'react-scroll';


const Projects = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="project" className='projects'>
      <h1>My latest projects</h1>
      <Slider {...settings} className='slider'>
        {projectData.map((project) => (
          <div key={project.id} className="project-slide">
            <p>{project.description}</p>
            <div className='projectImg'>
            <Link to={project.link} target="_blank" rel="noopener noreferrer"> 
              <img src={project.img1} alt="project-desk" className='projectImg-desc'/>
              {/* <Link to="https://github.com/OumouDi/" target="_blank" rel="noopener noreferrer"><BsGithub  className="social-icon"/></Link> */}
            </Link>
             <Link to={project.link} target="_blank" rel="noopener noreferrer"><img src={project.img2} alt="project-mobile" className='projectImg-mobile' /></Link>
    
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
