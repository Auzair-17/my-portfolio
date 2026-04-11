import React from "react";
import "./About.css";
import themePattern from "../../assets/theme_pattern.svg";
import profileImage from "../../assets/my-image.jpg";

const About = () => {
  return (
    <div id="about" className="about container">
      <div className="about-title">
        <h1>About me</h1>
        <img src={themePattern} />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profileImage} alt="Auzair's Image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Computer Science graduate and a Frontend Web Developer who
              is passionate about creating responsive and interactive web pages.
              I specialize in modern technologies like HTML, CSS, TailwindCSS,
              JavaScript, React, Git and Github.
            </p>
            <p>
              My focus is on creating clean and maintainable code and learn new
              tools and technologies to improve my skills and deliver high
              quality digital products.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>TailwindCSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
