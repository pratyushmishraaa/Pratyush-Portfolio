import React from "react";
import "../styling/Work.css";

import img1 from "../Images/hospital.jpg";
import img2 from "../Images/food.jpg";
import img3 from "../Images/spotify.jpg";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <h2 className="heading">My Work</h2>
        <div className="work">
          <div className="card">
            <div className="img">
              <img className="im" src={img1} alt="" />
            </div>
            <div className="text">
              <h2 className="title-1">Hospital Webpage</h2>
              <p>
                I made this site for ease of the people.Our hospital website is
                designed to be a resource for both current and potential
                patients. On our site, you will find information about our
                services, facilities, and medical staff.{" "}
              </p>
            </div>
          </div>
          <a href="/" target="_blank" className="project-btn">
            View Project
          </a>
        </div>

        <div className="work">
          <div className="card">
            <div className="img">
              <img className="im" src={img2} alt="" />
            </div>
            <div className="text">
              <h2 className="title-1">Food Ordering Site</h2>
              <p>
                {" "}
                The site typically includes detailed information about menu
                items, including ingredients, prices, and customer reviews.
                Customers can create an account to track their orders and
                receive updates on the status of their deliver.
              </p>
            </div>
          </div>
          <a href="/" target="_blank" className="project-btn">
            View Project
          </a>
        </div>

        <div className="work">
          <div className="card">
            <div className="img">
              <img className="im" src={img3} alt="" />
            </div>
            <div className="text">
              <h2 className="title-1">Spotify Clone</h2>
              <p>
                I made this site using HTML, CSS and Javascript.In this site you
                can hear your music of your choice and you can also add music in
                it and enjoy.I made this site to brush up my skills of
                javascript,css and html when i was learning javascript
              </p>
            </div>
          </div>
          <a href="/" target="_blank" className="project-btn">
            View Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;
