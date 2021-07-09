import React, { useState } from "react";
import { BiWalletAlt } from "react-icons/bi";
import { BsArrowRight, BsArrowLeft, BsCheck } from "react-icons/bs";
import "./style.css";
function WalletConnectBtn(props) {
  const { color, walletName } = props.wallet;
  const clicked = props.clicked;
  const index = props.index;
  return (
    <div className="d-flex justify-content-between align-items-center wal-border">
      <div className="wal-btn d-flex align-items-center">
        <div
          className="wal-icon d-flex align-items-center justify-content-center mr-3"
          style={{
            backgroundColor: clicked === index ? "black" : color,
            border: `3px solid ${color}`,
          }}
        >
          {clicked === index ? <BsCheck /> : <BiWalletAlt />}
        </div>
        <div className="wal-name">{walletName}</div>
      </div>
      <div className="hidden">
        <BsArrowRight className="font-24 mr-4" />
      </div>
    </div>
  );
}

export default WalletConnectBtn;
