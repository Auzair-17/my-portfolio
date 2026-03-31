import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setmenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="Auzair" />
      <ul className="nav-menu">
        <li onClick={() => setmenu("home")}>
          <AnchorLink className="anchor-link" href="#home">
            <p>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li onClick={() => setmenu("about")}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li onClick={() => setmenu("portfolio")}>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li onClick={() => setmenu("contact")}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me{" "}
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
