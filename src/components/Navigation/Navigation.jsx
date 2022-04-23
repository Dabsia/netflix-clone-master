import React from "react";
import "./Navigation.css";
import logo from "../../Assets/netflixLogo.png";
import SecondaryBtn from "../../UI/SecondaryBtn/SecondaryBtn";
import { Link } from "react-router-dom";

// const Navigation = ({ navLink, showSignUpBtn }) => {
const Navigation = () => {
  // showSignUpBtn(navLink);

  return (
    <nav className="navBar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      {/* {navLink ? <SecondaryBtn /> : null} */}
      <SecondaryBtn />
    </nav>
  );
};

export default Navigation;
