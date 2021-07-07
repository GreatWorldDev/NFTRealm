import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Container, Carousel } from "react-bootstrap";
import { VscSettingsGear } from "react-icons/vsc";
import Navbar from "../../../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SliderItem from "../SliderItem";
import Popular from "../Popular";
import LateBids from "../LateBids";
import DiscoverNFT from "../DiscoverNFT";
import Footer from "../../../components/Footer";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./style.css";
const itemData = [
  {
    image: "assets/images/video-preview-1.png",
    audio: "assets/audios/audio.mp3",
  },
  {
    image: "assets/images/video-preview-2.png",
    audio: "assets/audios/audio.mp3",
  },
  {
    image: "assets/images/video-preview-3.png",
    audio: "assets/audios/audio.mp3",
  },
];
function Main() {
  const [index, setIndex] = useState(0);

  const onNextClick = () => {
    if (index >= itemData.length - 1) {
      console.log(index);
      setIndex(0);
    } else {
      console.log(index);
      setIndex(index + 1);
    }
  };
  const onPrevClick = () => {
    if (index <= 0) {
      setIndex(itemData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <>
      <Container>
        <p className="description">
          Create, explore, & collect digital art NFTs but also connect with
          artists & collectors
        </p>
        <h2 className="maintitle">The #1 community focused NFT Marketplace</h2>
        <Link to="/search">
          <Button variant="outline-primary" className="explore-btn my-5">
            Explore Marketplace
          </Button>
        </Link>
        <div className="d-flex justify-content-between">
          <p className="trending">
            Trending Hastags <VscSettingsGear />
          </p>
          <Link to="/" className="seemore">
            See more <FaArrowRight />
          </Link>
        </div>
        <Navbar className="mb-5" />
        <div className="relative">
          <Carousel className="slider" activeIndex={index}>
            {itemData.map((item, index) => (
              <Carousel.Item interval={50000} key={`carousel-${index}`}>
                <SliderItem itemData={item} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="d-flex justify-content-end prev-next">
            <BsArrowLeft
              className="arrow text-white prev"
              onClick={onPrevClick}
            />{" "}
            <BsArrowRight
              className="arrow text-white next"
              onClick={onNextClick}
            />
          </div>
        </div>
      </Container>
      <div className="sec-container text-center">
        <h2 className="subtitle">
          Discover the world’s top creators & collectors
        </h2>
        <p className="subdescription">
          NFT Realm is the leading destination to find creative work and is the
          home to the world's best NFT creators Connect with people, interact
          with them and trade your NFTs
        </p>
      </div>
      <Popular />
      <LateBids />
      <DiscoverNFT />
      <Footer />
    </>
  );
}
export default Main;
