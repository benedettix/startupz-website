import React from "react";
import "./EmailUs.scss";
import Rocket from "../../assets/rocket.png";
function EmailUs() {
  return (
    <div className="email-us position-relative">
      <img src={Rocket} alt="" />
      <div className="container">
        <h3>
          Are you ready<br></br> to board this rocket ship?
        </h3>
        <p>Share your excitement with us.</p>
        <div className="email-us__form">
          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email*" />
          <textarea
            placeholder="Message*"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Shoot us a message</button>
        </div>
      </div>
    </div>
  );
}

export default EmailUs;
