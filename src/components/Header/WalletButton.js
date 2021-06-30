import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
export default function WalletButton(props) {
  const { walletData, isClicked, onClick } = props;
  return (
    <Button
      variant="outline-light"
      className="text-white wallet-btn"
      onClick={onClick}
    >
      {isClicked ? (
        <div className="d-flex">
          <img
            src={walletData.avatar}
            alt="mdo"
            width="45"
            height="45"
            class="rounded-circle mr-2"
          />
          <div style={{ lineHeight: "45px" }}>{walletData.token}</div>
        </div>
      ) : (
        "Connect Wallet"
      )}
    </Button>
  );
}
