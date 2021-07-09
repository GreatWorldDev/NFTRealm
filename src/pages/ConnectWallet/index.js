import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import WalletConnectBtn from "../../components/WalletConnectBtn";
import "./style.css";
const wallets = [
  { color: "#9757d7", walletName: "CoinbaseWallet" },
  { color: "#3772ff", walletName: "CoinbaseWallet" },
  { color: "#45b26b", walletName: "MyEtherWallet" },
  { color: "#ef466f", walletName: "WalletConnect" },
];
function ConnectWallet() {
  const [isClicked, setIsClicked] = useState(-1);
  const [isHide, setIsHide] = useState(false);
  const [isScan, setIsScan] = useState(true);
  const [isTerm, setTerm] = useState(false);
  const handleWallet = (index) => {
    setIsClicked(index);
    setIsHide(true);
    setIsScan(false);
    setTerm(false);
  };
  const handleTerm = () => {
    setTerm(true);
    setIsHide(true);
    setIsScan(true);
    console.log(isHide, isScan, isTerm);
  };
  return (
    <div className="search-content">
      <Row>
        <Col lg={12}>
          <Link to="/">
            <p className="d-flex justify-content-start connect-wallet align-items-center">
              <BsArrowLeft className="back" />
              Connect your wallet
            </p>
          </Link>
        </Col>
        <Col lg={6} md={12}>
          {wallets.map((wallet, index) => (
            <div
              className={`${isClicked === index ? "wal-border-show" : ""}`}
              onClick={() => handleWallet(index)}
            >
              <WalletConnectBtn
                wallet={wallet}
                index={index}
                clicked={isClicked}
                key={`wallet-${index}`}
              />
            </div>
          ))}
        </Col>
        <Col lg={6} md={12}>
          <div className="connect-bg">
            <img
              src="assets/images/connect-bg.jpg"
              alt="connect"
              className={`connect-image ${isHide ? "hide" : ""}`}
            />
            <div className={`connect-image ${isScan ? "hide" : ""}`}>
              <p style={{ fontSize: "40px", color: "white" }}>
                Scan to connect
              </p>
              <p style={{ fontSize: "12px", color: "#777E90" }}>
                Powered by UI8.Wallet
              </p>
              <div className="scan-outer mb-3">
                <div className="scan-inner">
                  <img src="assets/images/qr-code.png" alt="qr-code" />
                </div>
              </div>

              <Button
                variant="outline-primary"
                style={{
                  height: "60px",
                  borderRadius: "30px",
                  color: "white",
                  border: "1px solid white",
                }}
                onClick={handleTerm}
              >
                Don’t have a wallet app?
              </Button>
            </div>
            <div className={`px-4 ${!isTerm ? "hide" : ""}`}>
              <p style={{ fontSize: "40px", color: "white" }}>
                Terms of service
              </p>
              <p style={{ fontSize: "12px", color: "#777E90" }}>
                Please take a few minutes to read and understand{" "}
                <span style={{ color: "white", fontWeight: "bold" }}>
                  Stacks Terms of Service
                </span>
                . To continue, you’ll need to accept the terms of services by
                checking the boxes.
              </p>
              <img
                src="assets/images/connect-pic.jpg"
                alt="connect-pic"
                className="connect-pic my-5"
              />
              <div className="d-flex justify-content-start flex-column">
                <Form.Check
                  type="checkbox"
                  id="age"
                  label="I am at least 13 year old"
                  className="text-white mt-2 text-left"
                />
                <Form.Check
                  type="checkbox"
                  id="agreement"
                  label="I agree Stack terms of service"
                  className="text-white mb-2 text-left"
                />
              </div>
              <div className="d-flex justify-content-start">
                <Button
                  variant="outline-dark"
                  className="mr-3"
                  style={{ height: "48px", borderRadius: "24px" }}
                >
                  Cancel
                </Button>
                <Button style={{ height: "48px", borderRadius: "24px" }}>
                  Get started now
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ConnectWallet;
