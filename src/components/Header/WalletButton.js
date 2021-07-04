import React from "react";
export default function WalletButton(props) {
  const { walletData, isClicked, onClick } = props;
  return (
    <button
      variant="outline-light"
      className="text-white wallet-btn"
      onClick={onClick}
    >
      {isClicked ? (
        <div className="d-flex">
          <img
            src={walletData.avatar}
            alt="ETH"
            width="45"
            height="45"
            className="rounded-circle mr-2"
          />
          <div style={{ lineHeight: "45px" }}>{walletData.token}</div>
        </div>
      ) : (
        "Connect Wallet"
      )}
    </button>
  );
}
