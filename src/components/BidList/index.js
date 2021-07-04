import React from "react";

function BidList(props) {
  const { userName, bidPrice, avatar, rank } = props.user;
  return (
    <div className="d-flex justify-content-start border-bottom-grey py-18">
      <div>
        <img
          src={avatar}
          alt={userName}
          width="75"
          height="75"
          className="rounded-circle mr-4"
        ></img>
      </div>
      <div className="d-flex flex-column align-items-center ">
        <div style={{ lineHeight: "2" }}>
          <img src="assets/images/chart.png" alt="icon"></img>
          <span className="mx-2" style={{ color: "#767D8F" }}>
            {rank === 1 ? "Highest Bid:" : "#" + rank + ":"}
          </span>
          <span className="text-white">{bidPrice} BNB</span>
          <p className="font-18 bold text-white m-0">{userName}</p>
        </div>
      </div>
    </div>
  );
}

export default BidList;
