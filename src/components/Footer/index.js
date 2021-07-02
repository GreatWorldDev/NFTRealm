import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaTelegramPlane, FaTwitter, FaRedditAlien } from "react-icons/fa";
import Switch from "react-switch";
import "./style.css";
function Footer() {
  const [darkTheme, setTheme] = useState(true);
  useEffect(() => {
    setTheme(true);
  }, []);
  const handleChange = () => {
    setTheme(!darkTheme);
  };
  return (
    <footer className="d-flex justify-content-between border-top">
      <div className="col text-left">
        <Link to="/">
          <img src="assets/images/Group153.png" alt="logo" className="mb-3" />
        </Link>
        <p>We change the future of the NFT Marketplaces</p>
        <div className="d-flex align-items-center">
          Dark Theme &nbsp;{" "}
          <Switch
            onChange={handleChange}
            checked={darkTheme}
            onColor="#3772FF"
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
      <div className="col text-center">
        <Link to="/">
          <p className="text-center">Join Newsletter & our community</p>
        </Link>
        <div className=" d-flex justify-content-center">
          <div className="email d-flex justify-content-center align-items-center">
            <input
              type="text"
              placeholer="Enter your Email"
              className="email-input"
            />
            <button className="email-btn">
              <BsArrowRight />
            </button>
          </div>
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
