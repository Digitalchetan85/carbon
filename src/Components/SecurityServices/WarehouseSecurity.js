import React from "react";

const WarehouseSecurity = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Our Services - WAREHOUSE & LOGISTICS SECURITY
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 py-md-5">
        <Container>
          <h3 className="text-primary py-3 text-center">
            WAREHOUSE & LOGISTICS SECURITY
          </h3>
          <Row className="g-3 ">
            <Col md={6}>
              <div className="text-center">
                <Image className="img-fluid " src={Warehouse1} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image className="img-fluid " src={Warehouse2} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <p>
                Carbon Black Security is pleased to offer cost-friendly, but
                limited access to warehouse sites, logistics security solutions
                that ensure maximum safety for our customers, by combining
                quality manpower with cutting-edge technologies
              </p>
              <p>
                We have extensive experience in addressing warehouse site
                security. The good relationship that we have with local police
                departments allows us to work closely with them to improve
                safety on building sites. We saw that the sites face the
                greatest threats:
              </p>
              <ul>
                <li>Theft or pilferage of supplies and equipment</li>
                <li>Theft of services on the part of warehouse</li>
                <li>Liability created by trespassers</li>
                <li>Vandalism</li>
                <li>Fire</li>
                <li>Work disruption caused by protesters or labor conflicts</li>
              </ul>
              <p>
                In response to natural disaster emergency services to defense
                during protests and strikes. CBSS provides the best{" "}
                <strong>security guard for warehouse & logistics </strong>that
                helps the supply chain to keep moving.
              </p>
              <p>
                To accomplish this, we offer the following security guard
                services for the warehouse that can be tailored to suit your
                exact needs:
              </p>
              <ul>
                <li>Mobile Patrols</li>
                <li>CCTV Surveillance</li>
                <li>Vehicle monitoring in your warehouse</li>
                <li>Safeguarding products and inventory</li>
                <li>Random inspections and foot patrol.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WarehouseSecurity;
