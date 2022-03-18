import React from "react";

const Safety = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                Facility Management Services - Fire Safety
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="fire safety" className="pt-3 pb-3 py-md-5">
        <Container>
          <Row className="g-3 justify-content-center">
            <h4 className="text-primary text-center py-3">
              FIRE SAFETY & FIRE MARSHALL:
            </h4>

            <Col md={12}>
              <p>
                To carry out a systematic, critical appraisal of all potential
                Fire hazards involving personnel, premises, services & operation
                method. To ensure that occupational Safety & Health System fully
                satisfy the legal requirements and those of company's written
                safety policies, objectives & progress.
              </p>
              <p>
                In the event of an emergency it is time for the fire marshal to
                take charge, follow the procedures and keep the staff safe, also
                remember to evaluate your site, specific procedures for
                variations are to be followed viz., upon hearing the fire alarm,
                should have a Fire Marshal Kit, start the evacuation of site,
                Immediate head towards fire assembly area, gather information
                with colleagues and other fire marshals and timely reports to be
                submitted to the Fire Officer in charge.
              </p>
            </Col>

            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Marshall1} alt="" />
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Marshall2} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Safety;
