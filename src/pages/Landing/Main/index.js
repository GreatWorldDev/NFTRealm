import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { VscSettingsGear } from "react-icons/vsc";
import Navbar from "../../../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SliderItem from "../SliderItem";
import Popular from "../Popular";
import LateBids from "../LateBids";
import DiscoverNFT from "../DiscoverNFT";
import Footer from "../../../components/Footer";
import "./style.css";
function Main() {
  return (
    <>
      <Container>
        <p className="description">
          Create, explore, & collect digital art NFTs but also connect with
          artists & collectors
        </p>
        <h2 className="maintitle">The #1 community focused NFT Marketplace</h2>
        <Button variant="outline-primary" className="explore-btn my-5">
          Explore Marketplace
        </Button>
        <div className="d-flex justify-content-between">
          <p className="trending">
            Trending Hastags <VscSettingsGear />
          </p>
          <Link to="/" className="seemore">
            See more <FaArrowRight />
          </Link>
        </div>
        <Navbar className="mb-5" />
        <SliderItem />
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
