import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const classToggle = () => {
    const line1 = document.querySelector(".line1");
    const menuItems = document.querySelector(".menu-items");
    line1.classList.toggle("active");
    menuItems.classList.toggle("active");
    setToggle(!toggle);
  };

  return (
    <div className="menu">
      <nav className="menu-items">
        <a className="menu-link" href="#skillsDiv" onClick={classToggle}>
          Skills
        </a>
        <a className="menu-link" href="#projects-Div" onClick={classToggle}>
          Projects
        </a>
        <a
          className="menu-link"
          href="#contact-container"
          onClick={classToggle}
        >
          Contact
        </a>
      </nav>
      <div className="responsive" onClick={classToggle}>
        <p>menu</p>
        <div>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
