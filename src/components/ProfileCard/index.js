import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style.css";
function ProfileCard(props) {
  const {
    userType,
    avatar,
    user,
    level,
    following,
    followers,
    likes,
    userName,
    tokenURI,
    introduction,
  } = props.profileData;
  return (
    <div className="profile-card">
      <ul>
        <li className="d-flex justify-content-end">
          <span className="type">{userType}</span>
        </li>
        <li>
          <img src={avatar} alt={userName} className="size250 rounded-circle" />
        </li>
        <li className="font-24 d-flex justify-content-around">
          <div>
            <img
              src="assets/images/gemstone.png"
              alt="gemstone"
              width="35"
              height="42"
            />
            &nbsp; {user}
          </div>
          <div>
            <img
              src="assets/images/goal.png"
              alt="goal"
              width="30"
              height="50"
            />
            &nbsp;LvL {level}
          </div>
        </li>
        <li className="d-flex justify-content-around align-items-center font-18 mt-50">
          <div>
            <span className="bold font-18 text-white">{following}</span>
            <br />
            Following
          </div>
          <span style={{ color: "#9757d7" }}>|</span>
          <div>
            <span className="bold font-18 text-white">{followers}</span>
            <br />
            Followers
          </div>
          <span style={{ color: "#9757d7" }}>|</span>
          <div>
            <span className="bold font-18 text-white">{likes}</span>
            <br />
            Likes
          </div>
        </li>
        <li className="font-43 bold l-space-0 mt-36 mb-24">{userName}</li>
        <li className="font-24 mb-35 ">
          {tokenURI}
          <span className="pointer">
            &nbsp;
            <IoCopyOutline />
          </span>
        </li>
        <li className="font-18 text-left mb-52" style={{ color: "#767D8F" }}>
          {introduction}
        </li>
        <li>
          <div className="d-flex justify-content-around mb-25 ">
            <button className="size-60-150 br-30 b-none bg-primary text-white font-20">
              Follow
            </button>
            <button className="size-60-150 br-30 b-none bg-pink text-white font-20">
              Message
            </button>
          </div>
        </li>
        <li className="mb-58">
          <button className="br-30 b-none bg-success text-white font-20 sub-btn">
            Subscribe (0.5 BNB/month)
          </button>
        </li>
        <li
          className="pb-29 border-bottom-grey mb-23"
          style={{ color: "#767D8F" }}
        >
          <Link to="/" style={{ color: "#767D8F" }}>
            <FaInstagram className="font-25 mr-3" />
          </Link>
          <Link to="/" style={{ color: "#767D8F" }}>
            <FiTwitter className="font-25" />
          </Link>
        </li>
        <li className="font-18" style={{ color: "#767D8F" }}>
          Member since 15th March 2021
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
