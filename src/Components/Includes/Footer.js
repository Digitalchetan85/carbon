import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterLogo from "../../Images/mob-logo.png";

const Footer = () => {
  return (
    <div id="footer" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-dark">
      <Container>
        <Row>
          <Col md={3} className="align-self-center"> 
            <div className="text-center">
              <img src={FooterLogo} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <address className="address text-white pt-3 pt-md-0 text-center text-md-start">
              <p className="lh-base">
                Reg. Off. 710, 5th E Cross, 7th Main,
                <br />  HRBR Layout, 2nd Block, Kalyan Nagar,
                <br /> Bangalore - 560 043.
                <br></br>
                Email:{" "}
                <a href="mailto:info@cbrmindia.com" className="py-2"> info@cbrmindia.com</a>
                <br />
                Control No: <a href="tel:+919663777799" className="py-2">+91 966 377 7799</a>
              </p>
            </address>
          </Col>
          <Col md={3}>
            <div className="text-center fs-3 pt-3 pt-md-0">
              <a href="#" className="p-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="p-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="p-2">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="p-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="p-2">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </Col>
          <Col md={2}>
            <ul className="pt-3 pt-md-0">
              <li className="mb-2 text-center text-md-start">
                <a href="/" className="text-uppercase">
                  Home
                </a>
              </li>
              <li className="mb-2 text-center text-md-start">
                <a href="/about-us" className="text-uppercase">
                  About us
                </a>
              </li>
              <li className="mb-2 text-center text-md-start">
                <a href="/services" className="text-uppercase">
                  Services
                </a>
              </li>
              <li className="mb-2 text-center text-md-start">
                <a href="/contact-us" className="text-uppercase">
                  Contact us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="align-self-middle border-top">
            <p className="text-center text-white m-0 pt-2 copyright">
              © Copyrights Reserved 2021. All Rights Reserved.
              Design and Developed by{" "}
              <Link
                to={{ pathname: "http://webmillionservices.com/" }}
                target="_blank"
                className="copyright-link"
              >
                Web Million Services
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
