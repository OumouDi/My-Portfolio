import React from "react";
import "./skills.css";
import htmlCss from "../../assets/html-css.png";
import javascript from "../../assets/js.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import reactNative from "../../assets/react-native.png";
import github from "../../assets/github.png";
import postgres from "../../assets/postgres.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Key Skills</h1>
      <div className="square-container">
        <div className="square">
          <img src={htmlCss} alt="html-css" className="skills-img" />
        </div>
        <div className="square">
          <img src={javascript} alt="javascript" className="skills-img" />
        </div>
        <div className="square">
          <img src={node} alt="node" className="skills-img" />
        </div>
        <div className="square">
          <img src={react} alt="react" className="skills-img" />
        </div>
        <div className="square">
          <img src={reactNative} alt="react-native" className="skills-img" />
        </div>
        <div className="square">
          <img src={postgres} alt="postgres" className="skills-img" />
        </div>
        <div className="square">
          <img src={github} alt="github" className="skills-img" id="github" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
