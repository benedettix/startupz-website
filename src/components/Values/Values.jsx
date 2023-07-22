import React from "react";
import "./Values.scss";
import Light from "../../assets/light.svg";
function Values() {
  return (
    <div className="values">
      <div className="container">
        <div className="row values__head">
          <div className="col-8">
            <h2>Our core values</h2>
          </div>
          <div className="col-4">
            <img src={Light} alt="" />
          </div>
        </div>
        <div className="row values__cards">
          <div className="col-7 values__cards__card">
            <h4>01. Innovation</h4>
            <div className="line"></div>
            <p>
              Startupz operates where entrepreneurship<br></br> and technology
              intersect. We design solutions<br></br> and turn them into
              businesses models.
            </p>
          </div>
          <div className="col-5 values__cards__card">
            <h4>02. People</h4>
            <div className="line"></div>
            <p>
              Talent is what enable us<br></br> to create great<br></br>{" "}
              companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
