import React, { useEffect, useState } from "react";
import WalletButton from "./WalletButton";
import Search from "./Search";
import { Link } from "react-router-dom";
import Wallet from "../Wallet";
import { OverlayTrigger } from "react-bootstrap";
import "./style.css";
const walletData = {
  avatar: "assets/images/avatar.jpg",
  token: " 0xc4efw...b21a",
};
function Header() {
  const [isClicked, setisClicked] = useState(false);
  useEffect(() => {
    setisClicked(false);
  }, []);
  const handleClick = () => {
    setisClicked(!isClicked);
  };
  return (
    <header>
      <div className="mx-3">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link
            to="/"
            className="d-flex align-items-center mb-4 mb-lg-0 text-dark text-decoration-none"
          >
            <img src="assets/images/Group153.png" alt="logo"></img>
          </Link>

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
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
