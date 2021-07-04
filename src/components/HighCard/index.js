import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
function HighCard(props) {
  const { userName, bidPrice, avatar } = props.user;
  return (
    <div
      className="high-card py-36 d-flex flex-column align-items-center"
      style={{ margin: "0 auto" }}
    >
      <div className=" d-flex justify-content-center flex-wrap mb-37">
        <div>
          <img
            src={avatar}
            alt={userName}
            width="75"
            height="75"
            className="rounded-circle mr-4"
          ></img>
        </div>
        <div className="d-flex flex-column align-items-center ">
          <div style={{ lineHeight: "2" }}>
            <img src="assets/images/chart.png" alt="icon"></img>
            <span className="mx-2 color-define">
              Highest Bid by <span className="text-white">{userName}</span>
            </span>
            <p className="font-32 text-white m-0">
              {bidPrice} BNB<span className="con-price">($1,520)</span>
            </p>
          </div>
        </div>
      </div>
      <Button variant="primary" className="btn-60 mb-20">
        Buy Now
      </Button>
      <Button variant="outline-light" className="btn-60 mb-35">
        Place a Bid
      </Button>
      <p className="font-18 bold color-define">Service Fee: 2%</p>
    </div>
  );
}

export default HighCard;
