import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { StyledTopbar } from "../styles/topbarStyle";
import logo1 from "../../assets/images/logo1.png";

function Topbar() {
  return (
    <StyledTopbar>
      <Navbar expand="sm">
        <Container>
          <Navbar.Brand href="#header">
            <img
              alt=""
              src={logo1}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav navbar-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" m-auto">
              <Nav.Link href="#buy">Buy</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledTopbar>
  );
}

export default Topbar;
