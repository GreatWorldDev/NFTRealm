import React from "react";
import SearchCard from "../SearchCard";
import Modal from "react-bootstrap/Modal";
function PreviewModal(props) {
  return (
    <div>
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ color: "white", position: "relative" }} centered>
          <span className="close pointer cross-sign" onClick={props.onHide}>
            x
          </span>
          <SearchCard data={props.data} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PreviewModal;
