import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import Bank1 from "../../Images/bank-1.png";
import Bank2 from "../../Images/bank-2.png";

const Banking = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                Facility Management Services 
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="banking" className="pt-3 pb-3 py-md-5 bg-light">
        <Container>
          <Row className="g-3 justify-content-center">
            <h4 className="text-primary text-center py-3">
              BANKING AND FINANCIAL INSTITUTIONS{" "}
            </h4>
            <Col md={12}>
              <p>
                Security personnel is to ensure safety of the bank in all
                respects. A bank security guard formulates strategies and
                suggests the use of new security devices and facilities to the
                bank management to increase the security of the bank. Monitoring
                the entry and exit of the bank, ensuring safety from thefts and
                other miscreant activities, monitoring customer activity and
                behavior in the bank to identify suspicious activity, Monitor
                existing security instruments like computers, close circuit
                cameras and others.
              </p>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Bank1} alt="" />
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Bank2} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banking;
