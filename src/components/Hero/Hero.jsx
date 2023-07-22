import React from "react";
import "./Hero.scss";
import HeroImg from "../../assets/hero-img.png";
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-7 hero__leftside">
            <h2>
              We Create <br></br>Startups.
            </h2>
            <p>
              We are startup studio that develops and launches new companies.
            </p>
            <a href="#work">See our works</a>
          </div>
          <div className="col-5 hero__rightside">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
