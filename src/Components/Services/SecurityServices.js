import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SecurityServices = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Security Services
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SecurityServices;
