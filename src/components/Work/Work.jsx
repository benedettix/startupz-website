import React from "react";
import "./Work.scss";
import Macbook1 from "../../assets/macbook1.png";
import Feedback from "../../assets/feedback.png";
import Codekeeper from "../../assets/codekeeper.png";
import Legalsite from "../../assets/Legalsite.png";
import LeftLike from "../../assets/left-like.png";
import RightLike from "../../assets/right-like.png";

function Work() {
  return (
    <div className="work" id="work">
      <div className="container">
        <h3>Our works</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="work__card">
              <div className="work__card__wrapper">
                <h3 className="green">Tolq</h3>
                <p>
                  Tolq is the translation solution built for e-commerce. It
                  provides all pieces of the localization puzzle in one single
                  integrated solution.
                </p>
                <img src={Macbook1} alt="" />
                <button>More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="work__card">
              <div className="work__card__wrapper">
                <h3 className="light-blue">Feedback Labs</h3>
                <p>
                  Feedback Labs turns feedback into actionable insights for your
                  team.
                </p>
                <img src={Feedback} alt="" />
                <button>More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="work__card">
              <div className="work__card__wrapper">
                <h3 className="aqua-blue">Codekeeper</h3>
                <p>
                  Codekeeper is an all-in-one solution for software developers
                  and publishers to provide source code escrow as part of
                  service level and license agreements.
                </p>
                <img src={Codekeeper} alt="" />
                <button>More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="work__card">
              <div className="work__card__wrapper">
                <h3 className="purple">LegalSite</h3>
                <p>
                  Protected against legal risks, privacy compliant and always
                  up-to-date with the latest regulatory developments.
                </p>
                <img src={Legalsite} alt="" />
                <button>More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work__startup">
        <img src={LeftLike} alt="" />
        <p>
          Startups create a world that actually is better. Any problem that can
          be solved, will be solved by a startup, and that is a huge
          opportunity.
        </p>
        <img src={RightLike} alt="" />
      </div>
    </div>
  );
}

export default Work;
