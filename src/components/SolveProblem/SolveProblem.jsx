import React from "react";
import "./SolveProblem.scss";
import LeftLike from "../../assets/left-like.png";
import RightLike from "../../assets/right-like.png";
import Ben from "../../assets/Ben.png";
function SolveProblem() {
  return (
    <div className="solve-problem position-relative">
      <div className="container ">
        <div className="solve-problem__wrapper">
          <img src={LeftLike} alt="" />
          <p>We love solving problems!</p>
          <img src={RightLike} alt="" />
        </div>
        <img src={Ben} alt="" className="solve-problem__ben" />
        <div className="solve-problem__comment">
          Hi! I am Ben, your virtual assistant. How can I make your day better?
        </div>
        <div className="solve-problem__close">X</div>
      </div>
    </div>
  );
}

export default SolveProblem;
