import React from "react";
// import "../CSS/Header.css";
import Navbar from "../Navbar/Navbar.js";
import Element from "../Navbar/Element.js";
import { ReactComponent as Logo } from "../media/logo.svg";
import header from "../media/desktop/image-header.jpg";
import arrow from "../media/icon-arrow-down.svg";

function Header() {
  return (
    <div className="orange">
      <Navbar>
        <Logo className="Logo" />
        <div className="list">
          <Element name="About" />
          <Element name="Services" />
          <Element name="Projects" />
          <Element name="Contact" />
        </div>
      </Navbar>
      <h1 className="Into"> We Are Creatives </h1>
      <img src={arrow} className="arrow" />
    </div>
  );
}

export default Header;
