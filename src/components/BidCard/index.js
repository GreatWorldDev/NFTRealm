import React from "react";
import { Card } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import "./style.css";
function BidCard(props) {
  const { image, avatar, sort, name, currentbid, bnb } = props.data;
  return (
    <div className="mx-2">
      <div className="relative card-bid mb-2">
        <img src={image} alt="Category" className="bid-img" />
        <p className="favor">
          <BsHeart />
        </p>
        <button className="bid-btn">Place a bid</button>
      </div>
      <div className="d-flex align-items-center justify-content-between px-2 border-bottom pb-2 mx-1">
        <div className="d-flex align-items-center">
          <img
            src={avatar}
            alt="Avatar"
            className="rounded-circle"
            width="60"
            height="60"
          />
          <div className="text-left ml-2 name">
            <span className="kind">
              Creator{" "}
              <span className={sort == "PRO" ? "pro" : "new"}>
                &nbsp;{sort}&nbsp;{" "}
              </span>
            </span>
            <br />
            {name}
          </div>
        </div>
        <p className="bnb-num"> {bnb} BNB </p>
      </div>
      <div className="d-flex justify-content-around my-2 px-1">
        <div className="d-flex">
          <img
            src="assets/images/chart.png"
            width="12"
            height="16"
            style={{ marginRight: "5px" }}
          />
          <p className="bid-font"> Current BID {currentbid} BNB</p>
        </div>
        <div className="bid-font">
          <img src="assets/images/Group181.png" />
          &nbsp;View NFT
        </div>
      </div>
    </div>
  );
}

export default BidCard;
