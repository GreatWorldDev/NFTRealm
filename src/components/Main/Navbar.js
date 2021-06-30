import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Nav } from "react-bootstrap";
const navbarItem = [
  { href: "/", color: "#3772FF", content: "Coloring" },
  { href: "/", color: "#9757D7", content: "Sports" },
  { href: "/", color: "#45B26B", content: "Sports" },
  { href: "/", color: "white", content: "Sports" },
  { href: "/", color: "white", content: "MyLifeIs" },
  { href: "/", color: "white", content: "MyLifeIs" },
  { href: "/", color: "white", content: "NFTbnb" },
];
function Navbar() {
  return (
    // <Col>
    //   {navbarItem.map((item, index) => (
    //     <Row key={index}>
    //       <Link to="/">{item.content}</Link>
    //     </Row>
    //   ))}
    // </Col>
    <Nav className="justify-content-between" activeKey="/home">
      {navbarItem.map((item, index) => (
        <Nav.Item key={index}>
          <Nav.Link style={{ color: item.color }} className="" href={item.href}>
            {item.content}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Navbar;
