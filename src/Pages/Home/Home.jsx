// import React, { useState } from "react";
import React from "react";
import "./Home.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navigation from "../../components/Navigation/Navigation";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  // const [navLink, setNavLink] = useState(true);

  // const showSignUpBtn = () => {
  //   setNavLink(true);
  // };

  return (
    <div className="home__parent-container">
      <div className="overlay">
        {/* <Navigation
          showSignUpBtn={showSignUpBtn}
          navLink={navLink}
          
        /> */}
        <Navigation />
        <div className="hero__section">
          <HeroSection />
        </div>
      </div>
      <MovieDetails />
      <Footer />
    </div>
  );
};

export default Home;
