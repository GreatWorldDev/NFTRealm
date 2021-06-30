import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BiPlusCircle } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { Button, Card } from "react-bootstrap";
function UserCard() {
  return (
    <Card className="creator-card">
      <div className="d-flex justify-content-between align-items-center border-bottom">
        <Button style={{ backgroundColor: "" }}>1</Button>
        <div className="font-icons">
          <BiPlusCircle />
          <BsArrowUpRight />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-white">
          <img src="assets/images/gemstone.png" />
          Creator
        </div>
        <div className="text-white">
          <img src="assets/images/goal.png" />
          LvL 15
        </div>
      </div>
    </Card>
  );
}

export default UserCard;
