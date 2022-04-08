import React from "react";
import "./Skills.css";
import image from "./Images/skills.png";

const Skills = () => {
  return (
    <div className="skillsDiv" id="skillsDiv">
      <div className="wawe2"></div>

      <div className="skill-items">
        <div className="skillText">
          <h2>My Skills & Experience</h2>
          <p>
            I am self taught web developer. Currently I have experience in using
            HTML, CSS, JavaScript and React. I am very passionate about
            programming and learning new technologies.
          </p>
        </div>
        <div className="imgDiv">
          <img className="img" src={image} alt="" />
        </div>
      </div>

      <div className="wawe"></div>
    </div>
  );
};

export default Skills;
