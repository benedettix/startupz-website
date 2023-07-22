import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import WhoWeAre from "../../components/WhoWerAre/WhoWeAre";
import SolveProblem from "../../components/SolveProblem/SolveProblem";
import Values from "../../components/Values/Values";
import Work from "../../components/Work/Work";
import Hiring from "../../components/Hiring/Hiring";
import EmailUs from "../../components/EmailUs/EmailUs";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <SolveProblem />
      <Values />
      <Work />
      <Hiring />
      <EmailUs />
      <Footer />
    </div>
  );
}

export default Home;
