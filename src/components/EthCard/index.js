import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsHeart, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Button } from "react-bootstrap";
function EthCard() {
  return (
    <>
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
      <Col className="d-flex justify-content-between mt-4">
        <div className="favor mr-2">
          <img src="assets/images/Group181.png" />
          &nbsp;View NFT
        </div>
        <div className="favor">
          <BsHeart /> &nbsp;Favorite (22,522)
        </div>
      </Col>
      <Col>
        <Button className="buybtn mb-2 mt-2">Buy Now</Button>
      </Col>
      <Col>
        <Button className="bidbtn" variant="outline-dark">
          Place a Bid
        </Button>
      </Col>
      <Col>
        <BsArrowLeft className="arrow" /> <BsArrowRight className="arrow" />
      </Col>
    </>
  );
}

export default EthCard;
