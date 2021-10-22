import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import React from "react";

import FloatingLogo from "../../../static/assets/images/FloatingLogo.png";

export default function NavbarBootstrap() {
  return (
    <Navbar style={{ backgroundColor: "#cd8577" }} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={FloatingLogo} style={{ height: "60px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
