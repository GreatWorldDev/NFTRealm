import React from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";
function BidModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ color: "white", position: "relative" }}>
          <div className="d-flex justify-content-between mb-32">
            <h3>Place a bid</h3>
            <span className="close pointer cross-sign" onClick={props.onHide}>
              x
            </span>
          </div>
          <h6 className="mb-4">You are about to purchase C O I N Z from UI8</h6>
          <h3 className="mb-5">Your bid</h3>
          <ul>
            <li className="d-flex justify-content-between px-3">
              <div>Enter bid</div>
              <div>
                <input
                  type="number"
                  className="bidinput"
                  style={{ border: "1px solid grey", marginRight: "5px" }}
                />
                <span>ETH</span>
              </div>
            </li>
            <li className="d-flex justify-content-between mb-2 px-3">
              Your balance <span>8.498 ETH</span>
            </li>
            <li className="d-flex justify-content-between mb-1 px-3">
              Service fee<span>0 ETH</span>
            </li>
            <li className="d-flex justify-content-between mb-5 px-3">
              Total bid amount<span>0 ETH</span>
            </li>
            <li className="d-flex justify-content-center mb-1 px-3">
              <button className="placebid">Place a bid</button>
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

export default BidModal;
