import React from "react";
import { Card } from "react-bootstrap";
import { BsUpload, BsHeart } from "react-icons/bs";
import "./style.css";
function Preview(props) {
  const { image, audio, type } = props.data;
  return (
    <div>
      <Card className="card text-center">
        <Card.Img src={image} alt="Card image" className="video-preview " />
        <Card.ImgOverlay>
          <audio controls className="audio">
            <source src={audio} type="audio/ogg" />
            <source src={audio} type="audio/mpeg" />
          </audio>
          {window.location.href.includes("soldier") && (
            <div className="top-signs d-flex justify-content-around justify-content-sm-between flex-wrap">
              <div className="d-flex align-items-center">
                <p className="sort font-19 bold">{type}ART</p>
                <p className="font-19 bold m-0" style={{ color: "#23262F" }}>
                  #Coloring
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="vote-icon m-0 mr-1">
                  <BsUpload />
                </p>
                <p className="vote-icon m-0">
                  <BsHeart />
                </p>
              </div>
            </div>
          )}
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Preview;
