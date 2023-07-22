import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <div className="home-navbar">
      <div className="container">
        <div className="row">
          <div className="col-3 home-navbar__leftside">
            <img src={Logo} alt="" />
          </div>
          <div className="col-9 home-navbar__rightside">
            <ul>
              <li>Startups</li>
              <li>Contact</li>
            </ul>
            <button>Work with us!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
