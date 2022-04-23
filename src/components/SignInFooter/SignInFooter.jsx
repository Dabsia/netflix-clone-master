import React from "react";
import { Link } from "react-router-dom";

const SignInFooter = () => {
  return (
    <div className="signInfooter">
      <div className="footer__wrapper">
        <Link to="/" className="questions">
          {" "}
          Questions? Contact us
        </Link>
        <div className="links">
          <div className="link1">
            <Link to="/" className="link__item">
              {" "}
              FAQ
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Cookie Preferences
            </Link>
          </div>
          <div className="link2">
            <Link to="/" className="link__item">
              {" "}
              Help Center
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Cooperate Information
            </Link>
          </div>
          <div className="link3">
            <Link to="/" className="link__item">
              {" "}
              Terms of Use
            </Link>
          </div>
          <div className="link4">
            <Link to="/" className="link__item">
              {" "}
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInFooter;
