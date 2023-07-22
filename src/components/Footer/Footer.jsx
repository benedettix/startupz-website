import React from "react";
import "./Footer.scss";
import Logo from "../../assets/Logo.svg";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-4 footer__logo">
            <img src={Logo} alt="" />
            <p>
              © 2020 Startupz.<br></br> All rights reserved.{" "}
            </p>
          </div>
          <div className="col-3 footer__center">
            <h3>Companies</h3>
            <ul>
              <li>Tolq</li>
              <li>LegalSite</li>
              <li>Codekeeper</li>
              <li>Feedback Labs</li>
            </ul>
          </div>
          <div className="col-3 footer__center">
            <h3>Contact</h3>
            <span>
              World Trade Center - The Hague <br></br> Prinses Margrietplantsoen
              33<br></br> 2595 AM The Hague<br></br> The Netherlands
            </span>
            <ul>
              <li>Send us an email</li>
            </ul>
          </div>
          <div className="col-2 footer__center">
            <h3>Follow us</h3>
            <ul>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
              <li>
                <AiFillInstagram size={20} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
