import { React, useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header-container">
      <div className="burger-icon" onClick={toggleNav}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav ${isNavOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link activeClass="active"> Home </Link>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>


      <div className="social-media">
        <a
          href="https://github.com/OumouDi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/oumou-diakhaby-9a7941199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
