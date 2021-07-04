import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Preview from "../../../components/Preview";
import BidList from "../../../components/BidList";
import HighCard from "../../../components/HighCard";
import "./style.css";
const itemData = [
  {
    image: "assets/images/video-preview-1.png",
    audio: "assets/audios/audio.mp3",
  },
  {
    image: "assets/images/video-preview-1.png",
    audio: "assets/audios/audio.mp3",
  },
  {
    image: "assets/images/video-preview-1.png",
    audio: "assets/audios/audio.mp3",
  },
];
const tabs = [
  { title: "Info" },
  { title: "Owners" },
  { title: "Bids" },
  { title: "Comments(12)" },
  { title: "History" },
];
const users = [
  {
    userName: "Mary Ann",
    bidPrice: 2.5,
    avatar: "assets/images/avatar-1.jpg",
    rank: 1,
  },
  {
    userName: "Anna Will",
    bidPrice: 1.99,
    avatar: "assets/images/avatar-1.jpg",
    rank: 2,
  },
  {
    userName: "Mary Loo",
    bidPrice: 1.2,
    avatar: "assets/images/avatar-1.jpg",
    rank: 3,
  },
];
function Main() {
  const [tab, setTab] = useState(2);
  return (
    <div style={{ marginLeft: "40px", marginRight: "40px" }}>
      <Row>
        <Col lg={6}>
          <Preview data={itemData[1]} />
        </Col>
        <Col lg={6} className="px-64">
          <ul className="side-col">
            <li>
              <p className="font-46 text-white mb-20">Bloody Soldier</p>
            </li>
            <li className="mb-30">
              <p>
                <span className="bnb-num">5 BNB</span>
                <span className="font-24 color-define"> ($1,520)</span>
              </p>
            </li>
            <li className="mb-54">
              <p className="font-24 text-white">
                This NFT asset represents the power of will that a person can
                have regardless all the struggles might come accross
              </p>
            </li>
            <li className="d-flex justify-content-around flex-wrap tab-round mb-38">
              {tabs &&
                tabs.map((e, index) => (
                  <div
                    className={`font-18 tab ${index === tab ? "active" : ""}`}
                    key={`tabs-${index}`}
                    onClick={() => setTab(index)}
                  >
                    {e.title}
                  </div>
                ))}
            </li>
            <li className="mb-64">
              {users &&
                users.map((user, index) => (
                  <BidList user={user} key={"user-" + index} />
                ))}
            </li>
            <li className="mt-64">
              <HighCard user={users[0]} />
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
