import React from "react";
import { Link } from "react-router-dom";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { BsArrowRight } from "react-icons/bs";
import { FaTelegramPlane, FaTwitter, FaRedditAlien } from "react-icons/fa";
import "./style.css";
function Footer() {
  return (
    <footer className="d-flex justify-content-between border-top">
      <div className="col text-left">
        <Link to="/">
          <img src="assets/images/Group153.png" alt="logo" className="mb-3" />
        </Link>
        <p>We change the future of the NFT Marketplaces</p>
        <div>
          Dark Theme{" "}
          <BootstrapSwitchButton
            checked={true}
            onstyle="primary"
            className="switch"
          />
        </div>
      </div>
      <div className="col text-left">
        <Link to="/">
          <p>Search</p>
        </Link>
        <Link to="/">
          <p>Discover</p>
        </Link>
        <Link to="/">
          <p>Find People</p>
        </Link>
        <Link to="/">
          <p>Connect Wallet</p>
        </Link>
      </div>
      <div className="col text-left">
        <Link to="/">
          <p>FAQ</p>
        </Link>
        <Link to="/">
          <p>Terms & Policy</p>
        </Link>
        <Link to="/">
          <p>Become a Partner</p>
        </Link>
      </div>
      <div className="col text-left">
        <Link to="/">
          <p>Join Newsletter & our community</p>
        </Link>
        <div className="email d-flex align-items-center">
          <input
            type="text"
            placeholer="Enter your Email"
            className="email-input"
          />
          <button className="email-btn">
            <BsArrowRight />
          </button>
        </div>
        <div className="d-flex justify-content-around media-links">
          <Link to="/">
            <FaTelegramPlane />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
          <Link to="/">
            <FaRedditAlien />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
