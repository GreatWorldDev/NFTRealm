import React, { useState } from "react";
import { BiChevronDownCircle } from "react-icons/bi";
import { Button } from "react-bootstrap";
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import UserCard from "../../../components/UserCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  {
    avatar: "assets/images/avatar.jpg",
    name: "Jessica Brandel",
    followNum: 3100,
  },
  {
    avatar: "assets/images/avatar.jpg",
    name: "Jessica Brandel",
    followNum: 3100,
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1310,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 797,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 579,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};
function Popular() {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };
  const [isDropdown, setisDropdown] = useState(false);
  const handleDropdown = () => {
    setisDropdown(!isDropdown);
  };
  return (
    <div className="popular-body">
      <div className="sec-container">
        <p className="popular">POPULAR MEMBERS</p>
        <div className="d-flex justify-content-between">
          <div className="relative">
            <div onClick={handleClick}>
              <p className="creator">
                Creators &nbsp;
                <BiChevronDownCircle
                  className={isOpen ? "round-arrow rotate" : "round-arrow"}
                />
              </p>
              <div className={`creator-dropdown ${isOpen ? "show" : ""}`}>
                <ul>
                  <li>Item1</li>
                  <li>Item2</li>
                </ul>
              </div>
            </div>
          </div>
          <>
            <div className="timeframe text-right relative">
              Timeframe
              <br />
              <Button
                variant="light"
                className="white-btn"
                onClick={handleDropdown}
              >
                Today <BiChevronDownCircle style={{ float: "right" }} />
              </Button>
              <div>
                <div
                  className={`droplist ${isDropdown === true ? "show" : ""}`}
                >
                  <ul>
                    <li>Item1</li>
                    <li>item2</li>
                    <li>item3</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        </div>
        <div>
          <Slider {...settings}>
            {userData.map((user, index) => (
              <UserCard
                avatar={user.avatar}
                name={user.name}
                followNum={user.followNum}
                index={index}
                key={index + "user"}
              />
            ))}
          </Slider>
          {/* <BsArrowLeft className="left-arrow" />{" "}
            <BsArrowRight className="right-arrow" /> */}
          <button className="con-btn">Connect with members</button>
        </div>
      </div>
    </div>
  );
}

export default Popular;
