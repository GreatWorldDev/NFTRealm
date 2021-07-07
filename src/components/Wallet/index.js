import React from "react";
import { Popover } from "react-bootstrap";
import { IoCopyOutline, IoPerson } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { WiLightning } from "react-icons/wi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import "./style.css";

const Wallet = (
  <Popover>
    <Popover.Content>
      <div className="wallet text-center">
        <h3>Crypto Agent</h3>
        <p className="text-center">
          0xc4anasdshssab...b21a
          <IoCopyOutline />
        </p>
        <div className="d-flex justify-content-center">
          <img
            src="assets/images/bnb.png"
            alt="bnb"
            height="48.2"
            width="48.2"
            className="rounded-circle mr-3"
          />
          <p className="bnb">
            Balance
            <br />
            <span>62 BNB</span>&nbsp;
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center px-3 wallet-list">
          <Link to="/" style={{ borderBottom: "1px solid #3772FF" }}>
            <p>
              <IoPerson />
              &nbsp; My Profile
            </p>
          </Link>
          <Link to="/" style={{ borderBottom: "1px solid #3772FF" }}>
            <p>
              <FiMessageSquare />
              &nbsp; Messages(0)
            </p>
          </Link>
          <Link to="/" style={{ borderBottom: "1px solid #3772FF" }}>
            <div className="d-flex align-items-center">
              <p>
                <WiLightning />
                &nbsp; Dark Theme &nbsp;
              </p>
              <Switch
                checked={true}
                uncheckedIcon={false}
                checkedIcon={false}
                width={30}
                height={15}
                handleDiameter={15}
                onColor="#3772FF"
              />
            </div>
          </Link>
          <Link
            to="/"
            style={{ borderBottom: "1px solid #3772FF" }}
            className="mb-3"
          >
            <p>
              <RiLogoutBoxLine />
              &nbsp; Disconnect
            </p>
          </Link>
        </div>
      </div>
    </Popover.Content>
  </Popover>
);

export default Wallet;
