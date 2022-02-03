import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Slide1 from "../../Images/about.png";

const About = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">About</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8} className="align-self-center">
              <h3 className="text-primary">Carbon Black Security Services</h3>
              <p>
                CARBON BLACK is one of the largest privately owned integrated
                physical security, cash management and risk management companies
                in the world. Our services are important to our clients, as they
                rely on us to keep them and their environments safe. We offer
                peace of mind for our clients who operate in a complex world, by
                providing a wide range of industry-leading security services,
                delivered by experienced and knowledgeable experts. Through our
                comprehensive security solutions, we help protect businesses,
                employees, communities and assets and make the world a safer
                place.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <Image
                src={Slide1}
                alt="Slide 1"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 py-md-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="text-primary">Our business model</h3>
              <p>
                Our business model is a key strength that gives us a secure and
                flexible platform to pursue success. Carbon black operates
                globally through distinctly defined business verticals with two
                main operating segments: security services and cash management.
                By doing so, we benefit from focused ownership with operational
                agility in each of our business markets while maintaining strong
                governance and economies of scale.
              </p>
            </Col>
            <Col md={6}>
              <h3 className="text-primary">Our Leadership team</h3>
              <p>
                At CARBON BLACK, we are a disciplined growth-oriented and
                financial results- driven organization, but while we ultimately
                measure our success through the lens of financial performance,
                we’ve also long recognized the fundamental importance of
                non-financial factors in the equation.
              </p>

              <p>
                Meet the leaders who provide the vision and guidance to make
                CARBON BLACK a global security leader.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h3 className="text-primary">
                Developing our approach to sustainability
              </h3>
              <p>
                Our business is set apart by our focus on risk management and
                taking an equitable approach to all stakeholders – whether
                internal or external. We manage key ESG risks at a high
                standard, based on those areas that are material to our industry
                and business unit. Each business unit has developed robust
                management systems, policies and procedures, with safety and
                people at the heart of everything. Over the past two years, we
                have placed a significant focus on ensuring that our approach
                was aligned with our aim of creating value in a sustainable
                manner. A core aspect of that approach has been the development
                of sustainability pillars, and their alignment with the
                following is the key overarching pillars of our ESG and
                sustainability strategy:
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light" id="m-v">
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <div className="p-3 rounded shadow bg-white custom">
                <h2 className="pb-2 text-center text-primary">Our Vision</h2>
                <div className="text-center text-secondary">
                  <i className="fas fa-eye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  We envision a world in which our clients’ people and assets
                  are safe and secure. To achieve this vision, we will be the
                  leading provider of security services and business solutions
                  in the our site, establishing ourselves as the trusted
                  security partner of corporations, private clients and
                  governments, and providing trustworthy, fully vetted security
                  information on a global scale.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 rounded shadow bg-white custom">
                <h2 className="pb-2 text-center text-primary">Our Mision</h2>
                <div className="text-center text-secondary">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  To make the world a safer place by protecting our clients’
                  people and assets everywhere.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 rounded shadow bg-white custom">
                <h2 className="pb-2 text-center text-primary">Our Values</h2>
                <div className="text-center text-secondary">
                  <i className="fas fa-hands-helping fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  The CBSSL seal embodies our values. It expresses the strength
                  of our commitment to our clients and the bravery and
                  decisiveness of our people. The lion represents the best of
                  Carbon Black - a leader with a strong will to protect what its
                  clients hold dear. Each of our employees takes great pride in
                  being part of the Carbon Black community and playing an active
                  role in our company’s unique, inspirational success story..
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h2 className="text-center text-primary pt-2 pb-2">Our Team</h2>

          <Row className="justify-content-center m-1">
            <Col ms={10}>
              <div className="">
                <p className="text-center">
                  At Creative Interiors, our integrated interior design team
                  collaborates throughout the design process for each individual
                  project. All of our team member bring a unique skill set and
                  perspective to the final design solution. Our hands-on
                  approach to design ensures that our team utilizes their skills
                  and creative vision to produce memorable, unique, and timeless
                  designs for our clients.
                </p>
                <p className="text-center">
                  Our trusted design team is composed of designers with a wide
                  range of experience and expertise. The Creative Interiors Team
                  continues to work closely with our clients to create
                  one-of-a-kind design solutions tailored specifically to each
                  client.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center pt-2 pb-2 m-1">
            <Col md={4}>
              <div className="">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title className="text-center text-primary fw-bold">
                      Name
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-dark text-center">
                      Director
                    </Card.Subtitle>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className="">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title className="text-center text-primary fw-bold">
                      Name
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-dark text-center">
                      Director
                    </Card.Subtitle>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
};

export default About;
