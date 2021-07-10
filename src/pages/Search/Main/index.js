import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Col, Row, Form } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
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
        <Col lg={3} md={12} className="px-3">
          <Form.Control as="select" style={{ marginTop: "45px" }}>
            <option>Oldest</option>
            <option>Newest</option>
          </Form.Control>
        </Col>
        <Col lg={9} md={12}>
          <div className="d-flex justify-content-around flex-wrap my-5">
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
        </Col>
        <Col lg={3} md={12} className="px-3">
          <Form.Group>
            <p className="range__label ">PRICE RANGE</p>
            <Form.Control type="range" />
            <div className="d-flex justify-content-between mt-3">
              <div className="range__label">0.01 ETH</div>
              <div className="range__label">10 ETH</div>
            </div>
          </Form.Group>
          <p className="range__label">PRICE</p>
          <Form.Control as="select" className="mb-4">
            <option>Most liked</option>
            <option>Least liked</option>
          </Form.Control>
          <p className="range__label">COLOR</p>
          <Form.Control as="select" className="mb-4">
            <option>All colors</option>
            <option>Black</option>
            <option>Green</option>
            <option>Pink</option>
            <option>Purple</option>
          </Form.Control>
          <p className="range__label">CREATOR</p>
          <Form.Control as="select" className="mb-4">
            <option>Verified only</option>
            <option>All</option>
            <option>Most liked</option>
          </Form.Control>
          <a href="/">
            <p className="reset m-0">
              <FaTimesCircle className="mr-2" />
              Reset filter
            </p>
          </a>
        </Col>
        <Col lg={9} md={12}>
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
