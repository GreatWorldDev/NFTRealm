import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { Card } from "react-bootstrap";
import "./style.css";
function UserCard(props) {
  const { avatar, name, followNum, index } = props;
  return (
    <Card className="creator-card">
      <div className="d-flex justify-content-between align-items-center border-bottom mb-2">
        <button
          style={{
            backgroundColor: "#45B26B",
            // backgroundColor: index === 0 ? "#45B26B" : "",
            // backgroundColor: index === 1 ? "#9757D7" : "",
            // backgroundColor: index === 2 ? "#3772FF" : "",
          }}
        >
          #{index + 1}
        </button>
        <div className="font-icons">
          <BiPlusCircle />
          <BsArrowUpRight />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center font-text">
        <div className="text-white">
          <img src="assets/images/gemstone.png" alt="creator" />
          &nbsp;Creator
        </div>
        <div className="text-white">
          <img src="assets/images/goal.png" alt="goal" />
          &nbsp;LvL 15
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
      <h6>{name}</h6>
      <p>{followNum} Followers</p>
    </Card>
  );
}

export default UserCard;
