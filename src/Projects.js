import React from "react";
import "./Projects.css";
import AutoSlider from "./Images/auto-slider.jpg";
import BgChanger from "./Images/bg-changer.jpg";
import Travelly from "./Images/Travelly.jpg";

const Projects = () => {
  return (
    <div className="projects-Div" id="projects-Div">
      <h1>My Projects</h1>
      <div className="grid-container">
        <div className="grid-item">
          <a href="https://roki-it.github.io/travelly/#locations">
            <img src={Travelly} alt="" />
          </a>
        </div>
        <div className="grid-item">
          <a href="https://roki-it.github.io/auto-slider/">
            <img src={AutoSlider} alt="" />
          </a>
        </div>
        <div className="grid-item">
          <a href="https://roki-it.github.io/bg-changer/">
            <img src={BgChanger} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
