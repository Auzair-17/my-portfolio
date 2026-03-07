import React from "react";
import "./Hero.css";
import profileImage from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImage} alt="Auzair's Image" />
      <h1>
        <span>I'm Alex Bennett,</span> frontend developer based in USA.
      </h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
