import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FacilityManagement = () => {
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
      <div className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <p>
                “Integrated Facility Management (IFM) is an essential support
                service department which is responsible for cleanliness,
                maintenance & aesthetic upkeep of the entire
                establishment(common and staff areas)” IFM Services comprises of
                the activities related to cleanliness, regular maintenance and
                good sanitation services for regular up-keeping of the premises.
              </p>

              <p>
                We at CARBON BLACK end favour to provide with the very best in
                IFM services.{" "}
              </p>

              <p>
                CARBON BLACK Facility Management Services – IFM Department is
                entrusted with maintaining hygienic and clean environment
                conducive to healthy work space.
              </p>

              <p>
                We at CARBON BLACK are equipped with technically Qualified
                resources for handling mechanized Facility Management ideal for
                large scale Industrial set-up.
              </p>

              <p>
                Subject Matter Experts – “CARBON BLACK ” subject matter experts
                serve as our client’s trusted partners and advisors,
                continuously pursuing the most cost effective, high quality
                Integrated Facility Management solutions available.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FacilityManagement;
