import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import BidCard from "../../../components/BidCard";
import ProfileCard from "../../../components/ProfileCard";
import "./style.css";

const bidDatas = [
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
];
const profileData = {
  userType: "PRO",
  avatar: "assets/images/avatar-1.jpg",
  user: "Creator",
  level: 15,
  following: 10251,
  followers: "54.4K",
  likes: "1.6M",
  userName: "Jessica Brandel",
  tokenURI: "0xc4anasdshssab...b21a",
  introduction:
    "A wholesome farm owner in Montana. Upcoming gallery solo show in Germany",
};
const tabs = [
  { name: "posts", title: "Posts" },
  { name: "created", title: "Created" },
  { name: "collectibles", title: "Collectibles" },
];
function Main() {
  const [tab, setTab] = useState("created");
  const [bidData, setbidData] = useState(bidDatas);
  const handleTab = (e) => {
    setTab(e);
    switch (e) {
      case "posts":
        setbidData([
          {
            image: "assets/images/video-preview-1.png",
            avatar: "assets/images/avatar.jpg",
            sort: "PRO",
            name: "Jessica Brandel",
            currentbid: 2.2,
            bnb: 5,
          },
          {
            image: "assets/images/video-preview-3.png",
            avatar: "assets/images/avatar.jpg",
            sort: "NEW",
            name: "Jessica Brandel",
            currentbid: 2.1,
            bnb: 6,
          },
        ]);

        break;
      // eslint-disable-next-line no-duplicate-case
      case "created":
        setbidData([
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
        ]);

        break;

      // eslint-disable-next-line no-duplicate-case
      case "collectibles":
        setbidData([
          {
            image: "assets/images/video-preview-1.png",
            avatar: "assets/images/avatar.jpg",
            sort: "PRO",
            name: "Jessica Brandel",
            currentbid: 2.2,
            bnb: 5,
          },
          {
            image: "assets/images/video-preview-3.png",
            avatar: "assets/images/avatar.jpg",
            sort: "NEW",
            name: "Jessica Brandel",
            currentbid: 2.1,
            bnb: 6,
          },
        ]);

        break;
      default:
        break;
    }
  };
  return (
    <Row>
      <Col md={12}>
        <img
          src="assets/images/background.jpg"
          alt="background"
          className="background"
        />
      </Col>
      <Col lg={3} md={12} className="d-flex justify-content-center">
        <ProfileCard profileData={profileData} />
      </Col>
      <Col lg={9} md={12}>
        <div className="">
          <div className="d-flex justify-content-lg-end justify-content-around flex-wrap pt-117 mb-50 tab-btn">
            {tabs &&
              tabs.map((e) => (
                <span
                  className={`mr-71 cursor-pointer ${
                    e.name === tab ? "active" : ""
                  }`}
                  key={"tab-" + e.name}
                  onClick={() => handleTab(e.name)}
                >
                  {e.title}
                </span>
              ))}
          </div>
          <Col md={12} className="side-cards">
            {bidData.map((Data, index) => (
              <BidCard data={Data} key={index + "bid"} />
            ))}
          </Col>
          <Button variant="outline-light mt-93 load-btn">LOAD MORE</Button>
        </div>
      </Col>
    </Row>
  );
}

export default Main;
