import React from "react";
import "./SecondaryBtn.css";
import { useNavigate } from "react-router-dom";

const SecondaryBtn = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/sign-in");
  };
  return (
    <button className="secondaryBtn" onClick={redirect}>
      Sign In
    </button>
  );
};

export default SecondaryBtn;
