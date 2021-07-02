import React from "react";
import { Container, Card, Button, Row, Col, Accordion } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft, BsHeart, BsFunnel } from "react-icons/bs";
import BidCard from "../../../components/BidCard";
import { BiChevronDownCircle } from "react-icons/bi";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
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
const collapseData = [
  { title: "PRICE", btn: "Highest Price" },
  { title: "LIKES", btn: "Most Liked" },
  { title: "CREATOR", btn: "PRO" },
];

function DiscoverNFT() {
  return (
    <div className="sec-container">
      <p className="popular mt-5">DISCOVER NFTs</p>
      <Accordion>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <div className="d-flex justify-content-between">
            <p className="timeframe">
              <button className="button">
                Recently Added <BiChevronDownCircle />
              </button>
            </p>
            <button className="filter">
              Filter <BsFunnel />
            </button>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="d-flex justify-content-between border-top collapse pb-5">
              <div className="text-left">
                <h5>PRICE</h5>
                <button className="button">
                  Highest Price <BiChevronDownCircle />
                </button>
              </div>
              <div className="text-left">
                <h5>LIKES</h5>
                <button className="button">
                  Most Liked <BiChevronDownCircle />
                </button>
              </div>
              <div className="text-left">
                <h5>CREATOR</h5>
                <button className="button">
                  PRO <BiChevronDownCircle />
                </button>
              </div>
              <div className="text-left">
                <h5>PRICE RANGE</h5>
                <div style={{ display: "inline-block", color: "white" }}>
                  <button className="range">&nbsp; 1 BNB &nbsp;</button>
                  &nbsp;~&nbsp;
                  <button className="range relative">
                    &nbsp; 10 BNB &nbsp;
                    <span className="max">MAX</span>
                  </button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
      <div className="d-flex justify-content-between relative">
        {bidData.map((Data, index) => (
          <BidCard data={Data} key={index + "nft"} />
        ))}
        <BsArrowLeft className="left-arrow" />{" "}
        <BsArrowRight className="right-arrow" />
      </div>
      <div className="d-flex justify-content-between relative">
        {bidData.map((Data, index) => (
          <BidCard data={Data} key={index + "bid"} />
        ))}
        <BsArrowLeft className="left-arrow" />{" "}
        <BsArrowRight className="right-arrow" />
      </div>
      <button className="explore">Explore NFT Marketplace</button>
    </div>
  );
}

export default DiscoverNFT;
