import {React, useEffect,useState} from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

const Header = () => {


  return (
    <div className="header-container">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="social-media">
        <Link to="https://github.com/OumouDi/"><BsGithub  className="social-icon"/></Link>
        <Link to="https://www.linkedin.com/in/oumou-diakhaby-9a7941199/"><SiLinkedin className="social-icon" /></Link>
        </div>
    </div>
  );
};

export default Header;
