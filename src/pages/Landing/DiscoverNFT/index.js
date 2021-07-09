import React, { useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import { BsFunnel } from "react-icons/bs";
import BidCard from "../../../components/BidCard";
import { BiChevronDownCircle } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  {
    image: "assets/images/video-preview-1.png",
    avatar: "assets/images/avatar-1.jpg",
    sort: "NEW",
    name: "John Doe",
    currentbid: 2.3,
    bnb: 2,
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1434,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1096,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 797,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};
function DiscoverNFT() {
  const [isFilter, setisFilter] = useState(true);
  const handleFilter = () => {
    setisFilter(!isFilter);
  };
  return (
    <div className="sec-container">
      <p className="popular mt-5">DISCOVER NFTs</p>
      <Accordion>
        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={handleFilter}>
          <div className="d-flex justify-content-lg-between justify-content-around flex-wrap mb-5">
            <p>
              <button className="button">
                Recently Added <BiChevronDownCircle />
              </button>
            </p>
            <button className="filter">
              Filter {isFilter === true ? <BsFunnel /> : <FaTimes />}
            </button>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="d-flex justify-content-around flex-wrap border-top collapse pb-5">
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
      <Slider {...settings} className="mb-5">
        {bidData.map((Data, index) => (
          <BidCard data={Data} key={index + "nft"} />
        ))}
      </Slider>
      <Slider {...settings}>
        {bidData.map((Data, index) => (
          <BidCard data={Data} key={index + "bid"} />
        ))}
      </Slider>
      <button className="explore">Explore NFT Marketplace</button>
    </div>
  );
}

export default DiscoverNFT;
