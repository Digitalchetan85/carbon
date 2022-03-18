import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Official from "../../Images/official.png";
import Manufacture from "../../Images/manufacture.png";
import Residential from "../../Images/residential.png";
import Edu1 from "../../Images/edu-1.png";
import Edu2 from "../../Images/edu-2.png";
import Warehouse1 from "../../Images/warehouse-1.png";
import Warehouse2 from "../../Images/warehouse-2.png";
import Personal1 from "../../Images/personal-1.png";
import Personal2 from "../../Images/personal-2.png";
import Dog from "../../Images/dog.png";

const SecurityServices = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">Our Services</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5">
        
      </div>
    </div>
  );
};

export default SecurityServices;
