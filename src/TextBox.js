import React from "react";
import Typed from "typed.js";
import { useEffect } from "react";
import "./TextBox.css";

const TextBox = ({ text }) => {
  useEffect(() => {
    // Options for the Typed object
    const options = {
      strings: ["Rok Gergorec", "Front End Developer"],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true,
    };

    // New Typed instance
    const typed = new Typed("#typed", options);

    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <div className="textDiv">
      <h1 className="big">
        Hi, I'm <span id="typed"></span>
      </h1>
      <p id="text">
        I build <span>websites</span>. I can <br></br> also <span>teach</span>{" "}
        you to build a<br></br> <span>website</span>.
      </p>
    </div>
  );
};

export default TextBox;
