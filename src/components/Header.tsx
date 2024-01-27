import React from "react";

import logo from "../assets/shopiwatchLogo.png";

const Header: React.FC = () => {
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
