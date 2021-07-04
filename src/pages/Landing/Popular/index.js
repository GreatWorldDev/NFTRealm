import React from "react";
import { BiChevronDownCircle } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import UserCard from "../../../components/UserCard";
import "./style.css";
const userData = [
  {
    avatar: "assets/images/avatar.jpg",
    name: "Jessica Brandel",
    followNum: 3200,
  },
  { avatar: "assets/images/avatar.jpg", name: "John Doe", followNum: 1200 },
  { avatar: "assets/images/avatar.jpg", name: "John Doe", followNum: 3200 },
  {
    avatar: "assets/images/avatar.jpg",
    name: "Jessica Brandel",
    followNum: 2500,
  },
  {
    avatar: "assets/images/avatar.jpg",
    name: "Jessica Brandel",
    followNum: 3100,
  },
];
function Popular() {
  return (
    <div className="popular-body">
      <div className="sec-container">
        <p className="popular">POPULAR MEMBERS</p>
        <div className="d-flex justify-content-between">
          <>
            <p className="creator">
              Creators &nbsp;
              <BiChevronDownCircle />
            </p>
          </>
          <>
            <p className="timeframe text-right">
              Timeframe
              <br />
              <Button variant="light" className="white-btn">
                Today <BiChevronDownCircle style={{ float: "right" }} />
              </Button>
            </p>
          </>
        </div>
        <div>
          <div className="d-flex justify-content-around flex-wrap relative text-center">
            {userData.map((user, index) => (
              <UserCard
                avatar={user.avatar}
                name={user.name}
                followNum={user.followNum}
                index={index}
                key={index + "user"}
              />
            ))}
            <BsArrowLeft className="left-arrow" />{" "}
            <BsArrowRight className="right-arrow" />
          </div>
          <button className="con-btn">Connect with members</button>
        </div>
      </div>
    </div>
  );
}

export default Popular;
