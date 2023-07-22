import React from "react";
import "./WhoWeAre.scss";
import QuestionMark from "../../assets/who-we-are-questionmark.png";
function WhoWeAre() {
  return (
    <div className="who-we-are">
      <div className="container">
        <div className="row who-we-are__head">
          <div className="col-8">
            <h2>Who we are</h2>
            <p>
              We create products that have innovation and technology at their
              core. We value working with talented people that understand the
              possibilities of today.
            </p>
          </div>
          <div className="col-4">
            <img src={QuestionMark} alt="" />
          </div>
        </div>
        <div className="row who-we-are__cards">
          <div className="col-4 who-we-are__cards__card">
            <h4>01</h4>
            <div className="line"></div>
            <p>We develop innovative products, systems and services</p>
          </div>
          <div className="col-4 who-we-are__cards__card">
            <h4>02</h4>
            <div className="line"></div>
            <p>Next we build teams to scale them into companies</p>
          </div>
          <div className="col-4 who-we-are__cards__card">
            <h4>03</h4>
            <div className="line"></div>
            <p>Each startup solving one problem at a time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
