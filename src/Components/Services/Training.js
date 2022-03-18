import React from "react";
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import Train1 from "../../Images/train-1.png";
import Train2 from "../../Images/train-2.png";
import Train3 from "../../Images/train-3.png";
import Site1 from "../../Images/site-1.png";
import Site2 from "../../Images/site-2.png";
import Incident from "../../Images/incident.png";
import Occupation1 from "../../Images/occupation-1.png";
import Safety from "../../Images/safety.png";
import Risk1 from "../../Images/risk1.png";
import Risk2 from "../../Images/risk2.png";
import Site3 from "../../Images/site3.png";
import RFID from "../../Images/rfid.png";
import Building from "../../Images/building-management-system.png";
import Garrett from "../../Images/garrett.png";
import walky from "../../Images/walky.png"

const Training = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">Training</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Training;
