import React, { useEffect, useState } from "react";
import WalletButton from "./WalletButton";
import Search from "./Search";
import { Link } from "react-router-dom";
import Wallet from "../Wallet";
import { OverlayTrigger } from "react-bootstrap";
import { FaRegBell } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NotificationModal from "../NotficationModal";
import "./style.css";
const walletData = {
  avatar: "assets/images/avatar.jpg",
  token: " 0xc4efw...b21a",
  price: 7.00698,
};
function Header() {
  const [isClicked, setisClicked] = useState(false);
  // const [isNotiModal, setisNotiModal] = useState(false);
  useEffect(() => {
    setisClicked(false);
  }, []);
  const handleClick = () => {
    setisClicked(!isClicked);
  };
  // const handleNotification = () => {
  //   setisNotiModal(true);
  // };
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#141416" }}
      >
        <Navbar.Brand>
          <Link
            to="/"
            className="d-flex align-items-center mb-lg-0 text-dark text-decoration-none"
          >
            <img src="assets/images/Group153.png" alt="logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav d-flex align-items-center">
          <Nav className="ml-auto">
            <Search />
            <Link to="/" className="nav-link px-3 headerlist">
              Discover Market
            </Link>
            <Link to="/" className="nav-link px-3 headerlist">
              Find People
            </Link>
            <div className="nav-link px-3 headerlist font-24">
              {/* <div onClick={handleNotification} className="pointer"> */}
              <FaRegBell />
              {/* </div> */}
            </div>
            <div className="d-flex justify-content-center px-3">
              <Link to="/create">
                <button className="upload-btn">Upload</button>
              </Link>
            </div>
            <div>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={Wallet}
              >
                <WalletButton
                  walletData={walletData}
                  isClicked={isClicked}
                  onClick={handleClick}
                />
              </OverlayTrigger>
            </div>
            {window.location.href.includes("item") && (
              <>
                <div className="d-flex justify-content-center">
                  <button className="wallet-btn">
                    <div className="d-flex text-white bold">
                      <img
                        src={walletData.avatar}
                        alt="ETH"
                        width="45"
                        height="45"
                        className="rounded-circle mr-2"
                      />
                      <div style={{ lineHeight: "45px" }}>
                        {walletData.price}
                        <span style={{ color: "green" }}>ETH</span>
                      </div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <div className="mx-3">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex justify-content-between logo-hamburger">
            <Link
              to="/"
              className="d-flex align-items-center mb-4 mb-lg-0 text-dark text-decoration-none"
            >
              <img src="assets/images/Group153.png" alt="logo"></img>
            </Link>
          </div>
          <div className="nav col-12 col-lg-auto mb-5 mb-lg-0 me-lg-3 d-flex">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-end mb-md-0 text-white">
              <li>
                <Search />
              </li>
              <li>
                <Link to="/" className="nav-link px-3 headerlist">
                  Discover Market
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-3 headerlist">
                  Find People
                </Link>
              </li>
              {!(
                window.location.href.includes("Profile") ||
                window.location.href.includes("soldier")
              ) && (
                <li>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={Wallet}
                  >
                    <WalletButton
                      walletData={walletData}
                      isClicked={isClicked}
                      onClick={handleClick}
                    />
                  </OverlayTrigger>
                </li>
              )}
              {window.location.href.includes("soldier") && (
                <>
                  <li className="nav-link px-3 headerlist font-24">
                    <FaRegBell />
                  </li>
                  <li className="d-flex  px-3">
                    <button className="upload-btn">Upload</button>
                  </li>
                  <li className="d-flex">
                    <button className="wallet-btn">
                      <div className="d-flex text-white bold">
                        <img
                          src={walletData.avatar}
                          alt="ETH"
                          width="45"
                          height="45"
                          className="rounded-circle mr-2"
                        />
                        <div style={{ lineHeight: "45px" }}>
                          {walletData.price}
                          <span style={{ color: "green" }}>ETH</span>
                        </div>
                      </div>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div> */}
    </header>
  );
}

export default Header;
