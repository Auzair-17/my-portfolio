import React from "react";
import "./Hero.css";
import profileImage from "../../assets/profilePhoto.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero container">
      <img src={profileImage} alt="Auzair's Image" />
      <h1>
        <span>I'm Auzair,</span> a Frontend ReactJS Web Developer
      </h1>
      <p>
        I am a Computer Science graduate and a Frontend Web Developer from
        Kandahar, Afghanistan
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
