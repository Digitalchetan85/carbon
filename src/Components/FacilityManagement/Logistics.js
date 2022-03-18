import React from "react";

const Logistics = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                Facility Management Services - Logistics Security
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="logistics" className="pt-3 pb-3 py-md-5 bg-light">
        <Container>
          <Row>
            <h4 className="text-primary text-center py-3">
            LOGISTICS & WAREHOUSE MANAGEMENT
            </h4>

            <p>
            Access control refers to any system or mechanism that allows you to control entry and movement of people throughout you premises, bringing total security and safeguarding property. CFS provides exhaustive physical access control systems and solutions to help you secure and protect your premises.
            </p>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Log1} alt="" />
              </div>
            </Col>

            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Log2} alt="" />
              </div>
            </Col>

            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Log3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Logistics;
