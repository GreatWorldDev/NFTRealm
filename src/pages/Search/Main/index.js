import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import SearchCard from "../../../components/SearchCard";
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
const tabs = [
  { title: "Info" },
  { title: "Owners" },
  { title: "Bids" },
  { title: "Comments(12)" },
  { title: "History" },
];
function Main() {
  const [tab, setTab] = useState(1);
  return (
    <div className="search-content">
      <div className="d-flex justify-content-between align-items-center search-bar">
        <p className="catalog__title m-0">Type your keywords</p>
        <div className="search-outline d-flex justify-content-center align-items-center">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="email-btn">
            <BsSearch />
          </button>
        </div>
      </div>
      <Row>
        <Col lg={3} md={12}>
          <select className="select" style={{ display: "none" }}>
            <option>Verified only</option>
            <option>All</option>
            <option>Most liked</option>
          </select>
          <div className="nice-select select open" tabindex="1">
            <span className="current">Verified only</span>
            <ul className="list">
              <li data-value="Verified only" className="option selected focus">
                Verified only
              </li>
              <li data-value="All" className="option">
                All
              </li>
              <li data-value="Most liked" className="option">
                Most liked
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={9} md={12}>
          <div className="d-flex justify-content-around my-5">
            {tabs &&
              tabs.map((e, index) => (
                <div
                  className={`font-14 cursor-pointer s-tab ${
                    index === tab ? "active" : ""
                  }`}
                  key={`tabs-${index}`}
                  onClick={() => setTab(index)}
                >
                  {e.title}
                </div>
              ))}
          </div>
          <Row>
            {bidData.map((Data, index) => (
              <Col
                lg={4}
                md={6}
                key={`card-${index}`}
                className="d-flex justify-content-center"
              >
                <SearchCard data={Data} key={`${index}bid`} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
