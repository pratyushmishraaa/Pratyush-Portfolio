import React from "react";
import "../styling/Navbar.css";

import resume from "../components/resume_pratyush_oned.pdf";

const Navbar = () => {
  return (
    <>
      <div className="hero">
        <h1>
          I am <span className="change_content"></span>
        
        </h1>
    
        <a className="know" href={resume} target="_blank">
          <i class="fas fa-long-arrow-alt-right"></i>&nbsp;&nbsp;Download CV{" "}
        </a>

        <div className="navlinks">

          <a href="https://github.com/pratyushmishraaa" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pratyush-mishraa/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          
          <a href="https://twitter.com/Pratyush_287" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>

        <div className="bottom-links">
          <i className="fa-solid fa-house">
            &nbsp;&nbsp;&nbsp;<span>Home</span>
          </i>
          <i className="fa-solid fa-code">
            &nbsp;&nbsp;&nbsp;<span>Work</span>
          </i>
          <i className="fa-solid fa-user-secret">
            &nbsp;&nbsp;&nbsp;<span>Me</span>
          </i>
          <i className="fa-solid fa-phone">
            &nbsp;&nbsp;&nbsp;<span>Contact</span>
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
