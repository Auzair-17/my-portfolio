import React from "react";
import "./Footer.css";
import AuzairLogo from "../../assets/AuzairLogo.png";
import userIcon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={AuzairLogo} alt="" />
          <p>
            I am a Computer Science graduate and a Frontend Web Developer from
            Kandahar, Afghanistan.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" />
            <input type="email" name="" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2026 Auzair. All rights reseved
        </p>
        <div className="footer-bottom-right">
          <p>Terms of services</p>
          <p>Privacy policy</p>
          <p>Contact me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
