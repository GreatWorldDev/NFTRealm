import React from "react";
import { Button } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import BidCard from "../../../components/BidCard";
import { BiChevronDownCircle } from "react-icons/bi";
import "./style.css";
const bidData = [
  {
    image: "assets/images/video-preview-1.png",
    avatar: "assets/images/avatar.jpg",
    sort: "PRO",
    name: "Jessica Brandel",
    currentbid: 2.2,
    bnb: 5,
  },
  {
    image: "assets/images/video-preview-2.png",
    avatar: "assets/images/avatar-1.jpg",
    sort: "PRO",
    name: "John Doe",
    currentbid: 2.3,
    bnb: 4,
  },
  {
    image: "assets/images/video-preview-3.png",
    avatar: "assets/images/avatar.jpg",
    sort: "NEW",
    name: "Jessica Brandel",
    currentbid: 2.1,
    bnb: 6,
  },
  {
    image: "assets/images/video-preview-1.png",
    avatar: "assets/images/avatar-1.jpg",
    sort: "NEW",
    name: "John Doe",
    currentbid: 2.3,
    bnb: 2,
  },
];
function LateBids() {
  return (
    <div className="border-bottom pb-5">
      <div className="sec-container">
        <p className="popular" style={{ marginTop: "71px" }}>
          LATEST BIDS
        </p>
        <div className="d-flex justify-content-end">
          <p className="timeframe text-right">
            Network
            <br />
            <Button variant="light" className="white-btn">
              Binance <BiChevronDownCircle style={{ float: "right" }} />
            </Button>
          </p>
        </div>
        <div
          className="d-flex justify-content-around flex-wrap relative"
          style={{ marginBottom: "134.38px" }}
        >
          {bidData.map((Data, index) => (
            <BidCard data={Data} key={index + "bid"} />
          ))}
          <BsArrowLeft className="left-arrow" />{" "}
          <BsArrowRight className="right-arrow" />
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          <div>
            <img
              src="assets/images/renew.png"
              alt="Renew"
              width="65"
              height="60"
            />
            <p className="content mt-4">
              Subscription based NFT marketplace. Collectors can subscribe to
              their beloved creators & have early access, discounts and free
              NFTs
            </p>
          </div>
          <div>
            <img
              src="assets/images/chat-comment-oval-speech-bubble-with-text-lines.png"
              alt="chat"
              width="65"
              height="60"
            />
            <p className="content mt-4">
              The first NFT marketplace where people can interact with each
              other
            </p>
          </div>
          <div>
            <img
              src="assets/images/ranking.png"
              alt="Ranking"
              width="65"
              height="60"
            />
            <p className="content mt-4">
              Ranking system will be in place for both creators & collectors.
              High tiers will have a lot of benefits across our platform
            </p>
          </div>
          <div>
            <img
              src="assets/images/network.png"
              alt="Network"
              width="65"
              height="60"
            />
            <p className="content mt-4">
              Our goal is to built a multi-network NFT marketplace starting with
              Ethereum & Binance networks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LateBids;
