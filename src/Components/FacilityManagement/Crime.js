import React from "react";

const Crime = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                Facility Management Services - Crime Preventation
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="action" className="pt-3 pb-3 py-md-5">
        <Container>
          <Row className="g-3 justify-content-center">
            <h4 className="text-primary text-center py-3">
              ACTION PLAN FROM CRIME PREVENTION
            </h4>

            <Col md={12}>
              <p>
                The action plan for crime prevention involves identification of
                the pattern of crime pertaining to owned assets, leased assets,
                facility losses; both tangible and intangible. It also includes
                identification of factors contributing to the crime and its
                manifestation. Preventive and Protective measures are taken in
                order to curb the crime in an intended manner.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <Image className="img-fluid" src={Action1} alt="" />
            </Col>
            <Col md={4} className="align-self-center">
              <Image className="img-fluid" src={Action3} alt="" />
            </Col>
            <Col md={4} className="align-self-center">
              <Image className="img-fluid" src={Action2} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="dog squad" className="pt-3 pb-3 py-md-5 bg-light">
        <Container>
          <Row>
            <h4 className="text-primary text-center py-3">
              DOG SQUAD WITH HANDLER
            </h4>

            <Col md={8} className="align-self-center">
              <p>
                Our Dog Squad comprises highly pedigreed and trained German
                Shepherds, Doberman, Pinschers and Labradors along with skilled
                and experienced handlers. These squads are effectively used in
                industrial applications for perimeter and facility patrolling of
                building areas. Labradors are specially used to detect
                explosives and narcotics. In commercial facilities dogs are used
                for protection, intruder deterrence and intervention, as also
                for personal property protection.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <Image className="img-fluid" src={Dog1} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Crime;
