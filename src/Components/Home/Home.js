import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import MainSlider from "../Includes/MainSlider";
import AboutBanner from "../../Images/about.png";
import HomeServices from "../Includes/HomeServices";
import Expertise from "../Includes/Expertise";
import Testimonials from "../Includes/Testimonials";

const Home = () => {
  return (
    <div>
      <MainSlider />
      <div className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <div>
                <h2 className="py-2 text-primary">
                  Carbon Black Security Services
                </h2>
                <p>
                  Carbon Black is one of the largest privately owned integrated
                  physical security, cash management and risk management
                  companies in the world. Our services are important to our
                  clients, as they rely on us to keep them and their
                  environments safe. We offer peace of mind for our clients who
                  operate in a complex world, by providing a wide range of
                  industry-leading security services, delivered by experienced
                  and knowledgeable experts. Through our comprehensive security
                  solutions, we help protect businesses, employees, communities
                  and assets and make the world a safer place.
                </p>
                <a href="/about" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={AboutBanner} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Expertise />
      <HomeServices />
      <Testimonials />
    </div>
  );
};

export default Home;
