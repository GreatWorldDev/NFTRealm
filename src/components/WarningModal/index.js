import React from "react";
import Modal from "react-bootstrap/Modal";
import { BiWalletAlt } from "react-icons/bi";
import "./style.css";
function WarningModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ color: "white", position: "relative" }}>
          <div className="d-flex justify-content-end mb-32">
            <span className="close pointer cross-sign" onClick={props.onHide}>
              x
            </span>
          </div>
          <p className="text-center mb-5">
            <span className="wallet-icon">
              <BiWalletAlt />
            </span>
          </p>
          <p className="text-center warning-font">
            You need to connect your wallet first to sign messages and send
            transaction to Ethereum network
          </p>
          <ul>
            <li className="d-flex justify-content-center mb-1 px-3">
              <button className="placebid">Connect wallet</button>
            </li>
            <li className="d-flex justify-content-center mb-1 px-3">
              <button className="cancel" onClick={props.onHide}>
                Cancel
              </button>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default WarningModal;
