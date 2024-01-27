import React from "react";

// image import for logo
import logo from "../assets/shopiwatchLogo.png";

const Header = () => {
  return (
    <nav className="header">
      <a className="shopiwatch" href="https://heykwa.me/">
        <img src={logo} alt="shopiwatch logo" className="shopiwatchLogo" />
        <h1 className="siteLogo">shopiwatch</h1>
      </a>
    </nav>
  );
};

export default Header;
