import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaFileUpload } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { BsCheck } from "react-icons/bs";
import { FaShoppingBag, FaPen } from "react-icons/fa";
import "./style.css";
function WarningModal(props) {
  const [isStart, setStart] = useState(false);
  const [isSell, setSell] = useState(false);
  const [isLock, setLock] = useState(false);
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
            <h3>Folow steps</h3>
            <span className="close pointer cross-sign" onClick={props.onHide}>
              x
            </span>
          </div>
          <div className="d-flex justify-content-start">
            <div className={`${isStart ? "checked" : "upload-icon"}`}>
              {!isStart ? <FaFileUpload /> : <BsCheck />}
            </div>
            <div className="d-flex flex-column">
              <p className="upload-title">Upload files & Mint token</p>
              <div style={{ fontSize: "12px", color: "#767d8f  " }}>
                Call contract method
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center my-3">
            <Button
              className={`create-btn ${isStart ? "disabled" : ""}`}
              onClick={() => setStart(true)}
            >
              {!isStart ? "Start now" : "Done"}
            </Button>
          </div>
          <div className="d-flex justify-content-start">
            <div className={`${isSell ? "checked" : "upload-icon"}`}>
              {!isSell ? <FaPen /> : <BsCheck />}
            </div>
            <div className="d-flex flex-column">
              <p className="upload-title">Sign sell order</p>
              <div style={{ fontSize: "12px", color: "#767d8f  " }}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center my-3">
            <Button
              className={`create-btn ${isSell ? "disabled" : ""}`}
              onClick={() => setSell(true)}
            >
              {!isSell ? "Start now" : "Done"}
            </Button>
          </div>
          <div className="d-flex justify-content-start">
            <div className={`${isLock ? "checked" : "upload-icon"}`}>
              {!isLock ? <FaShoppingBag /> : <BsCheck />}
            </div>
            <div className="d-flex flex-column">
              <p className="upload-title">Sign lock order</p>
              <div style={{ fontSize: "12px", color: "#767d8f  " }}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center my-3">
            <Button
              className={`create-btn ${isLock ? "disabled" : ""}`}
              onClick={() => setLock(true)}
            >
              {!isLock ? "Start now" : "Done"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default WarningModal;
