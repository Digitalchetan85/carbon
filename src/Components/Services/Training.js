import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Training = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Training
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Training;
