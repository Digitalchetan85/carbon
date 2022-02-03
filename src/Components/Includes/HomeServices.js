import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const ServicesDetails = [
    {
      id: 1,
      title: "Security Services",
      desc: "Our team of highly skilled and experienced professionals help protect your business, employees and assets all over the world.",
      btnLink: "/services/security",
      icon:"fas fa-user-shield fs-1 text-secondary p-3 bg-info rounded-circle"
    },
    {
      id: 2,
      title: "Training",
      desc: "Our security professionals receive special training to work in educational to assure optimal protection from theft etc",
      btnLink: "/services/training",
      icon:"fas fa-users-cog fs-1 text-secondary p-3 bg-info rounded-circle"
    },
    {
      id: 3,
      title: "Facility Management",
      desc: "IFM Department is entrusted with maintaining hygienic and clean environment conducive to healthy work space.",
      btnLink: "/services/facility-management",
      icon:"fas fa-address-card fs-1 text-secondary p-3 bg-info rounded-circle"
    },
  ];
  return (
    <div className="py-3 py-md-5">
      <Container>
        <h2 className="py-3 text-center text-primary">Our Services</h2>
        <Row>
          {ServicesDetails.map((card) => (
            <Col md={4} key={card.id} className="text-center">
              <Card className="rounded">
                <Card.Body>
                  <Card.Title className="text-primary fs-4">{card.title}</Card.Title>
                  <i className={card.icon}></i>
                  <Card.Text className="text-center">{card.desc}</Card.Text>
                  <Button
                    variant="primary"
                    as={Link}
                    to={card.btnLink}
                    className="stretched-link"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeServices;
