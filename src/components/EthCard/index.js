import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsHeart, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Button } from "react-bootstrap";
import "./style.css";
function EthCard() {
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <Card className="eth-card">
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="d-flex align-items-center justify-content-center eth-net">
              <img
                src="assets/images/ethereum.png"
                alt="Ethereum"
                className="rounded-circle"
                width="65"
                height="65"
              />
              <p className="text-left eth-text ml-2  align-items-center">
                ETHEREUM NETWORK
              </p>
            </div>
          </Col>
          <div className="eth-container">
            <Col className="d-flex justify-content-end">
              <img
                src="assets/images/chart.png"
                width="21.8"
                height="29"
                style={{ opacity: "0.5", marginRight: "5px" }}
              />
              <p className="currentbid"> Current BID</p>
            </Col>
            <Col>
              <p className="price">2.4 ETH</p>
              <p className="price-usd">($6,520)</p>
            </Col>
          </div>
          <Col className="d-flex justify-content-around">
            <div>
              <div className="buyprice">
                <img src="assets/images/Group191.png" />
                &nbsp;Buy Price
              </div>
              <p className="buy-eth">5 ETH</p>
            </div>
            <div>
              <div className="buyprice">
                <img src="assets/images/Group192.png" />
                &nbsp;Auction Ending
              </div>
              <div className="d-flex justify-content-between undertime">
                <div>
                  <p className="time">
                    05
                    <br />
                    <span>HRS</span>
                  </p>
                </div>
                <div>
                  <p className="time">
                    32
                    <br />
                    <span>MINS</span>
                  </p>
                </div>
                <div>
                  <p className="time">
                    05
                    <br />
                    <span>SECS</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Card>
      </div>
      <div>
        <Col className="d-flex justify-content-center my-5">
          <div
            style={{ maxWidth: "439px" }}
            className="d-flex justify-content-around"
          >
            <div className="font-view mr-2">
              <img src="assets/images/Group181.png" />
              &nbsp;View NFT
            </div>
            <div className="font-view">
              <BsHeart /> &nbsp;Favorite (22,522)
            </div>
          </div>
        </Col>
        <Col>
          <Button className="buybtn mt-2 mb-4">Buy Now</Button>
        </Col>
        <Col>
          <Button className="bidbtn mt-2 mb-4" variant="outline-dark">
            Place a Bid
          </Button>
        </Col>
        <Col>
          <BsArrowLeft className="arrow" /> <BsArrowRight className="arrow" />
        </Col>
      </div>
    </>
  );
}

export default EthCard;
