import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
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
              Investor Relations
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Privacy
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Speed Test
            </Link>
          </div>
          <div className="link2">
            <Link to="/" className="link__item">
              {" "}
              Help Center
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Jobs
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Cookie Preferences
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Legal Notices
            </Link>
          </div>
          <div className="link3">
            <Link to="/" className="link__item">
              {" "}
              Account
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Ways to Watch
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Cooperate Information
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Only on Netflix
            </Link>
          </div>
          <div className="link4">
            <Link to="/" className="link__item">
              {" "}
              Media Center
            </Link>
            <Link to="/" className="link__item">
              {" "}
              Terms of Use
            </Link>
            <Link to="/" className="link__item">
              {" "}
              contact us
            </Link>
          </div>
        </div>
        <p className="netflix">Netflix Nigeria</p>
      </div>
    </div>
  );
};

export default Footer;
