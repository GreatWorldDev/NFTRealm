import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import EthCard from "../../../components/EthCard";
import { Link } from "react-router-dom";
import "./style.css";
function Slider() {
  const [isfollowClicked, setFollowClicked] = useState(true);
  useEffect(() => {
    setFollowClicked(true);
  }, []);
  const onClick = () => {
    setFollowClicked(!isfollowClicked);
    console.log(isfollowClicked);
  };
  return (
    <div className="slider">
      <Row>
        <Col xs={12} md={7}>
          <Card className="card">
            <Card.Img
              src="assets/images/video-preview-1.png"
              alt="Card image"
              className="video-preview"
            />
            <Card.ImgOverlay>
              <audio controls className="audio">
                <source src="horse.ogg" type="audio/ogg" />
                <source src="horse.mp3" type="audio/mpeg" />
              </audio>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={12} md={5}>
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div
              style={{ maxWidth: "439px" }}
              className="d-flex align-items-center justify-content-between"
            >
              <Link to="/Profile">
                <div className="d-flex align-items-center">
                  <img
                    src="assets/images/avatar.jpg"
                    alt="Avatar"
                    className="rounded-circle"
                    width="99"
                    height="99"
                  />
                  <p className="text-left avatar-text ml-2">
                    <span className="job">Creator</span>
                    <br />
                    Jessica Brandel
                  </p>
                </div>
              </Link>
              <button
                className={`followbtn ${
                  !isfollowClicked && "followbtn-toggle"
                }`}
                onClick={onClick}
              >
                {isfollowClicked ? "Follow" : "Unfollow"}
              </button>
            </div>
          </Col>
          <EthCard />
        </Col>
      </Row>
    </div>
  );
}
export default Slider;
