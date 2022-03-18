import React from "react";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import mobLogo from "../../Images/mob-logo.png";

const TopMenubar = () => {
  return (
    <>
      <div className="sticky-top">
        <div className="text-center py-2 d-none d-md-block bg-white">
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
            <Navbar.Brand
              as={Link}
              to="/carbon-black-security-services"
              className="d-block d-md-none"
            >
              <Image className="img-fluid" src={mobLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-auto">
                <Nav.Link as={Link} to="/carbon-black-security-services">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <NavDropdown title="Services" id="servicesdrop">
                  <NavDropdown
                    title="Seurity Serivices"
                    id="services"
                    drop="end"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/security-services/official"
                    >
                      Official Buildings
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/security-services/residential"
                    >
                      Residential Buildings
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/security-services/body-gaurd"
                    >
                      Body Gaurd
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/security-services/education"
                    >
                      Education
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/security-services/hospital"
                    >
                      Hospital
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/security-services/dog-squad"
                    >
                      Dog Squad
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/security-services/warehouse"
                    >
                      Warehouse
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Training Serivices"
                    id="services"
                    drop="end"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/training-services/site-monitoring"
                    >
                      Site Monitoring
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/training-services/staff-managment"
                    >
                      Staff Managment
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/training-services/health-safety"
                    >
                      Health & Safety
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Facility Management Services"
                    id="services"
                    drop="end"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/facility-management/event"
                    >
                      Event
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/facility-management/escort"
                    >
                      Escort
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/facility-management/safety"
                    >
                      Safety
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/facility-management/banking"
                    >
                      Banking
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/facility-management/logistics"
                    >
                      Logistics
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/facility-management/crime"
                    >
                      Crime
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/facility-management/value-added-services"
                    >
                      Value Added Services
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <Nav.Link as={Link} to="/gallery">
                  Gallery
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="border-0">
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
