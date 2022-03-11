import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Escort1 from "../../Images/escort-1.png";
import Escort2 from "../../Images/escort-2.png";
import Escort3 from "../../Images/escort-3.png";
import Action1 from "../../Images/action-1.png";
import Action2 from "../../Images/action-2.png";
import Action3 from "../../Images/action-3.png";


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
        <div className="py-3 py-md-5">
          <Container>
            <Row className="justify-content-center">
              <h4 className="text-primary">
                ESCORT GUARDING SERVICES (Escort by Rail, Road & Air Cargo)
              </h4>
              <p>
                We provide industries and corporates with armed/unarmed escort
                and services for cargos. Such services are mostly availed by
                diamond merchants, airlines, etc. to escort individuals or
                cargos between destinations.
              </p>
              <Col md={4}>
                <Image className="img-fluid" src={Escort1} alt="" />
              </Col>
              <Col md={4}>
                <Image className="img-fluid" src={Escort2} alt="" />
              </Col>
              <Col md={4}>
                <Image className="img-fluid" src={Escort3} alt="" />
              </Col>
            </Row>
            <hr />
            <Row className="justify-content-center">
              <h4 className="text-primary">
              ACTION PLAN FROM CRIME PREVENTION
              </h4>
              <p>The action plan for crime prevention involves identification of the pattern of crime pertaining to owned assets, leased assets, facility losses; both tangible and intangible. It also includes identification of factors contributing to the crime and its manifestation. Preventive and Protective measures are taken in order to curb the crime in an intended manner.</p>
              <Col md={4}>
              <Image className="img-fluid" src={Action1} alt="" />
              </Col>
              <Col md={4}>
              <Image className="img-fluid" src={Action2} alt="" />
                </Col>
              <Col md={4}>
              <Image className="img-fluid" src={Action3} alt="" />
                </Col>
            </Row>
            <hr />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FacilityManagement;
