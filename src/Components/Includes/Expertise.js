import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Expertise = () => {
  const details = [
    {
      id: 1,
      title: "INTEGRITY",
      desc: "Our integrity is the moral force that drives everything we do, every day, and with everyone with whom we interact.",
    },
    {
      id: 2,
      title: "STRENGTH",
      desc: "We secure and strengthen the trust that our clients place in us to safeguard their people, assets and business.",
    },
    {
      id: 3,
      title: "RISK",
      desc: "We are vigilant in mitigating risk and enabling our clients to safely and securely do business throughout the that our clients place.",
    },
    {
      id: 4,
      title: "QUALITY",
      desc: "We win our clients’ respect with the quality of our services and the absolute commitment of our people.",
    },
  ];
  return (
    <div className="py-3 py-md-5 bg-light" id="exp">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-primary text-center"></h2>
            <p className="text-center">
              CARBON BLACK SECURITY SERVICES is the largest privately owned
              security services company, offering a wide range of highly focused
              business solutions including leading-edge security services and
              facility service.
            </p>
          </Col>
        </Row>
        <Row>
          {details.map((item) => (
            <Col md={3} key="item.id">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title className="text-primary">{item.title}</Card.Title>
                  <Card.Text className="text-center">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Expertise;
