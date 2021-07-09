import React, { useState } from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import BidModal from "../BidModal";
import { Link } from "react-router-dom";
import "./style.css";
function BidCard(props) {
  const { image, avatar, sort, name, currentbid, bnb } = props.data;
  const [isFavor, setisFavor] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClick = () => {
    setisFavor(!isFavor);
  };
  return (
    <div className="search-card">
      <div className="relative card-bid">
        <img src={image} alt="Category" className="bid-img" />
        <div onClick={handleClick}>
          <p className="favor">
            {isFavor === false ? (
              <BsHeart className="favor-icon" />
            ) : (
              <BsFillHeartFill className="favor-red" />
            )}
          </p>
        </div>
        <button className="bid-btn" onClick={() => setModalShow(true)}>
          Place a bid
        </button>
        <BidModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <Link to="/item">
        <div className="d-flex justify-content-center">
          <div
            className="d-flex align-items-center justify-content-between px-2 border-bottom pb-2 mx-1"
            style={{ maxWidth: "350px" }}
          >
            <div className="d-flex align-items-center">
              <img
                src={avatar}
                alt="Avatar"
                className="rounded-circle"
                width="50"
                height="50"
              />

              <div className="text-left mx-2 s-name">
                <span className="s-kind">
                  Creator{" "}
                  <span className={sort === "PRO" ? "s-pro" : "s-new"}>
                    &nbsp;{sort}&nbsp;{" "}
                  </span>
                </span>
                <br />
                {name}
              </div>
            </div>
            <p className="search-bnb-num"> {bnb} BNB </p>
          </div>
        </div>
      </Link>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around my-2 px-1">
          <div className="d-flex  align-items-center mr-3">
            <img
              src="assets/images/chart.png"
              alt=""
              width="12"
              height="16"
              style={{ marginRight: "3px" }}
            />
            <p className="s-bid-font m-0"> Current BID {currentbid} BNB</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              src="assets/images/Group181.png"
              width="16"
              height="12"
              alt="Eye"
              style={{ marginRight: "3px" }}
            />
            <p className="s-bid-font m-0">View NFT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidCard;
