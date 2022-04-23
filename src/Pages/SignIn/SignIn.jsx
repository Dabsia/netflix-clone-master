import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./SignIn.css";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import SignInFooter from "../../components/SignInFooter/SignInFooter";

const SignIn = () => {
  return (
    <div className="signIn__wrapper">
      <div className="overlay_div">
        <div className="nav">
          <Navigation />
        </div>

        <div className="signIn__container">
          <div className="signIn__Content">
            <div className="signin__box">
              <h1 className="title">Sign In</h1>
              <Form />
              <div className="facebook">
                <i className="ri-facebook-box-fill facebook__icon"></i>{" "}
                <label className="facebook_login" htmlFor="">
                  Login with Facebook
                </label>
              </div>
              <div className="new">
                <h3 className="new__to__netflix">New to Netflix</h3>
                <Link className="backHome" to="/">
                  Sign up now
                </Link>
              </div>
              <p className="lastStatement">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot <span className="learnMore">Learn more</span> .
              </p>
            </div>
          </div>
        </div>
        <SignInFooter />
      </div>
    </div>
  );
};

export default SignIn;
