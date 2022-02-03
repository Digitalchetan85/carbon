import React from "react";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import mobLogo from "../../Images/mob-logo.png";

const TopMenubar = () => {
  return (
    <>
      <div className="sticky-top">
        <div className="text-center py-2 d-none d-md-block bg-white" >
          <Image className="img-fluid" src={logo} alt="" />
        </div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="primary"
          variant="dark"
          id="navbar"
        >
          <Container>
            <Navbar.Brand as={Link} to="/carbon-black-security-services" className="d-block d-md-none">
              <Image className="img-fluid" src={mobLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-auto">
                <Nav.Link as={Link} to="/carbon-black-security-services" className="border-end">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="border-end">
                  About
                </Nav.Link>
                <NavDropdown
                  title="Services"
                  id="collasible-nav-dropdown"
                  className="border-end"
                >
                  <NavDropdown.Item as={Link} to="/services/security">
                    Security
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/services/training">
                    Training
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/services/facility-management"
                  >
                    Facility Management
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/gallery" className="border-end">
                  Gallery
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default TopMenubar;
