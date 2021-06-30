import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BiChevronDownCircle } from "react-icons/bi";
import { Button } from "react-bootstrap";
import UserCard from "../../../components/UserCard";

function Popular() {
  return (
    <div className="popular-body">
      <Container>
        <p className="popular">POPULAR MEMBERS</p>
        <div className="d-flex justify-content-between">
          <>
            <p className="creator">
              Creators &nbsp;
              <BiChevronDownCircle />
            </p>
          </>
          <>
            <p className="timeframe">
              Timeframe
              <br />
              <Button variant="light">
                Today <BiChevronDownCircle />
              </Button>
            </p>
          </>
        </div>

        <UserCard />
      </Container>
    </div>
  );
}

export default Popular;
