import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import SearchCard from "../../components/SearchCard";
import { BsArrowRight } from "react-icons/bs";
import CreateModal from "../../components/CreateModal";
import PreviewModal from "../../components/PreviewModal";
import { BsUpload } from "react-icons/bs";
import "./style.css";

const Data = {
  image: "assets/images/video-preview-1.png",
  avatar: "assets/images/avatar.jpg",
  sort: "PRO",
  name: "Jessica Brandel",
  currentbid: 2.2,
  bnb: 5,
};
function Search() {
  const [isShow, setModalShow] = useState(false);
  const [isPreview, setPreview] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="search-content">
      <Row>
        <Col lg={8} md={12}>
          <h2 className="text-white" style={{ fontSize: "48px" }}>
            Create collectible
          </h2>
          <p className="text-white bold">Upload file</p>
          <p className="upload__note">Drag or choose your file to upload</p>
          <section className="container mb-4">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p style={{ fontSize: "30px" }}>
                <BsUpload></BsUpload>
              </p>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <div className="d-flex justify-content-center flex-column">
              {files.map((file, index) => (
                <div className="text-white" key={`file-${index}`}>
                  {file}
                </div>
              ))}
            </div>
          </section>
          <p className="text-white bold">Item Details</p>
          <p className="field__label">ITEM NAME</p>
          <Form.Control
            type="text"
            placeholder="e. g. Redeemable Bitcoin Card with logo"
            className="field__input mb-5"
          />
          <p className="field__label">DESCRIPTION</p>
          <Form.Control
            type="text"
            placeholder="e. g. “After purchasing you will able to recived the logo...”"
            className="field__input mb-5"
          />

          <Row>
            <Col lg={4} md={12}>
              <p className="field__label">ROYALTIES</p>
              <Form.Control as="select" className="field_input mb-5">
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
              </Form.Control>
            </Col>
            <Col lg={4} md={12}>
              <p className="field__label">SIZE</p>
              <Form.Control
                type="text"
                placeholder="e. g. Size"
                className="field__input mb-5"
              />
            </Col>
            <Col lg={4} md={12}>
              <p className="field__label">PROPERTIE</p>
              <Form.Control
                type="text"
                placeholder="e. g. Propertie"
                className="field__input mb-5"
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <div>
              <p className="text-white bold">Put on sale</p>
              <p className="upload__note">You’ll receive bids on this item</p>
            </div>
            <Form.Check
              type="switch"
              id="custom-switch"
              className="pr-4"
              style={{ fontSize: "40px" }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <Button
                variant="outline-dark"
                className="v-show mr-3"
                style={{ height: "40px", borderRadius: "20px" }}
                onClick={() => setPreview(true)}
              >
                Preview
              </Button>
              <Button
                onClick={() => setModalShow(true)}
                style={{ height: "40px", borderRadius: "20px" }}
              >
                Create Item <BsArrowRight />
              </Button>
            </div>
            <div className="text-white d-flex justify-content-between align-items-center">
              <div className="mr-4">Auto Saving</div>
              <div className="loader"></div>
            </div>
            <CreateModal show={isShow} onHide={() => setModalShow(false)} />
            <PreviewModal
              show={isPreview}
              data={Data}
              onHide={() => setPreview(false)}
            />
          </div>
        </Col>
        <Col lg={4} md={12} className="unshow">
          <SearchCard data={Data} />
        </Col>
      </Row>
    </div>
  );
}

export default Search;
