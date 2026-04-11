import React from "react";
import "./Contact.css";
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    alert(result + " sending message");
  };

  return (
    <div id="contact" className="contact container">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={themePattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want want me to work on.
            You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="" />
              <p>auzair09270@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" />
              <p>+93 78 478 4423</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>KDR, Afghanistan</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
