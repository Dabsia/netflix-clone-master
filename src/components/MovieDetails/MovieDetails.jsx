import React from "react";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.png";
import Accordion from "../Accordion/Accordion";
import Getstarted from "../GetStarted/Getstarted";
import "./MovieDetails.css";

const MovieDetails = () => {
  return (
    <div className="MovieDetails">
      <div className="box1">
        <div className="innerBox__holder">
          <h1 className="MovieDetails__desc">Enjoy on your TV.</h1>
          <h3 className="MovieDetails__text">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <img src={image1} alt="TV" />
        {/* Second Item */}
      </div>
      <div className="box2">
        <img src={image2} alt="TV" />
        <div className="innerBox__holder">
          <h1 className="MovieDetails__desc ">
            Download your shows to watch offline.
          </h1>
          <h3 className="MovieDetails__text">
            Save your favorites easily and always have something to watch.
          </h3>
        </div>
      </div>
      {/* 3red box */}
      <div className="box3">
        <div className="innerBox__item3">
          <h1 className="MovieDetails__desc ">Watch everywhere.</h1>
          <h3 className="MovieDetails__text">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
      </div>

      {/* 4th box */}
      <div className="box4">
        <img src={image3} alt="TV" />
        <div className="innerBox__holder">
          <h1 className="MovieDetails__desc ">Create profiles for kids.</h1>
          <h3 className="MovieDetails__text">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h3>
        </div>
      </div>
      {/* Accordion */}
      <div className="box5">
        <h1 className="faq">Frequently Asked Questions</h1>
        <Accordion />
        <p className="sub">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="gettystarted">
          <Getstarted />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
