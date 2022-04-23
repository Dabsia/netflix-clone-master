import React from "react";
import "./GetStarted.css";

const Getstarted = () => {
  return (
    <div className="formContainer">
      <form>
        <input
          className="emailInput"
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
        />
        <button className="submitBtn" type="submit">
          Get Started <i class="ri-arrow-right-s-line arrow__line"></i>
        </button>
      </form>
    </div>
  );
};

export default Getstarted;
