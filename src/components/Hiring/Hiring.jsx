import React from "react";
import "./Hiring.scss";
import HiringLeft from "../../assets/hiring-left.png";
import HiringRight from "../../assets/hiring-right.png";
function Hiring() {
  return (
    <div className="hiring">
      <div className="container">
        <img src={HiringLeft} className="left" alt="" />
        <img src={HiringRight} className="right" alt="" />
        <div className="hiring__wrapper">
          <h3>We are hiring!</h3>
          <p>
            We're always looking for talented people to join and help build our
            startups. Check out our current openings
          </p>
          <button>See current openings</button>
        </div>
      </div>
    </div>
  );
}

export default Hiring;
