import React from "react";
import Getstarted from "../GetStarted/Getstarted";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <h1 className="heroSection__Header">
        Unlimited movies, TV shows, and more.
      </h1>
      <h3 className="heroSection__desc">Watch anywhere. Cancel anytime.</h3>
      <p className="heroSection__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Getstarted />
    </div>
  );
};

export default HeroSection;
