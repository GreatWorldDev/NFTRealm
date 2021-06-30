import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
function EthCard() {
  return (
    <Card className="eth-card row">
      <Col
        md={12}
        className="d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center">
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
    </Card>
  );
}

export default EthCard;
