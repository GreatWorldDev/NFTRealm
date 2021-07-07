import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaTelegramPlane, FaTwitter, FaRedditAlien } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
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
    <footer className="border-top">
      <Row>
        <Col lg={3} md={12}>
          <div className="text-center text-lg-left">
            <Link to="/">
              <img
                src="assets/images/Group153.png"
                alt="logo"
                className="mb-3"
              />
            </Link>
            <p className="text-center text-lg-left">
              We change the future of the NFT Marketplaces
            </p>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              Dark Theme &nbsp;{" "}
              <Switch
                onChange={handleChange}
                checked={darkTheme}
                uncheckedIcon={false}
                checkedIcon={false}
                width={30}
                height={15}
                handleDiameter={15}
                onColor="#3772FF"
              />
            </div>
          </div>
        </Col>
        <Col lg={3} md={12}>
          <div>
            <Link to="/">
              <p className="text-center text-lg-left">Search</p>
            </Link>
            <Link to="/">
              <p className="text-center text-lg-left">Discover</p>
            </Link>
            <Link to="/">
              <p className="text-center text-lg-left">Find People</p>
            </Link>
            <Link to="/">
              <p className="text-center text-lg-left">Connect Wallet</p>
            </Link>
          </div>
        </Col>
        <Col lg={3} md={12}>
          <div>
            <Link to="/">
              <p className="text-center text-lg-left">FAQ</p>
            </Link>
            <Link to="/">
              <p className="text-center text-lg-left">Terms & Policy</p>
            </Link>
            <Link to="/">
              <p className="text-center text-lg-left">Become a Partner</p>
            </Link>
          </div>
        </Col>
        <Col lg={3} md={12} className="text-center">
          <Link to="/">
            <p className="text-center">Join Newsletter & our community</p>
          </Link>
          <div className=" d-flex justify-content-center">
            <div className="email d-flex justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Enter your Email"
                className="email-input"
              />
              <button className="email-btn">
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div className=" d-flex justify-content-center">
            <div
              className="d-flex justify-content-around media-links"
              style={{ width: "303px" }}
            >
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
        </Col>
      </Row>
      {/* <div className="col text-left">
        <Link to="/">
          <img src="assets/images/Group153.png" alt="logo" className="mb-3" />
        </Link>
        <p>We change the future of the NFT Marketplaces</p>
        <div className="d-flex align-items-center">
          Dark Theme &nbsp;{" "}
          <Switch
            onChange={handleChange}
            checked={darkTheme}
            uncheckedIcon={false}
            checkedIcon={false}
            width={30}
            height={15}
            handleDiameter={15}
            onColor="#3772FF"
          />
        </div>
      </div>
      <div className="col text-center">
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
      <div className="col text-center">
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
              placeholder="Enter your Email"
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
      </div> */}
    </footer>
  );
}

export default Footer;
