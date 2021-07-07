import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import EthCard from "../../../components/EthCard";
import { Link } from "react-router-dom";
import Preview from "../../../components/Preview";
import "./style.css";
function Slider(props) {
  const [isfollowClicked, setFollowClicked] = useState(true);
  useEffect(() => {
    setFollowClicked(true);
  }, []);
  const onClick = () => {
    setFollowClicked(!isfollowClicked);
  };
  return (
    <div>
      <Row>
        <Col xs={12} md={12} lg={7}>
          <Preview data={props.itemData} />
        </Col>
        <Col xs={12} md={12} lg={5}>
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div
              style={{ maxWidth: "439px" }}
              className="d-flex align-items-center justify-content-between"
            >
              <Link to="/profile">
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
