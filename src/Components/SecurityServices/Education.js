import React from "react";

const Education = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Our Services - Education Institute Security
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 py-md-5">
        <Container>
          <h3 className="text-primary py-3 text-center">
            EDUCATIONAL INSTITITES SECURITY{" "}
          </h3>
          <Row className="g-3 ">
            <Col md={6}>
              <div className="py-3">
                <Image className="img-fluid" src={Edu1} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="py-3">
                <Image className="img-fluid" src={Edu2} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <p>
                Our classrooms must be safe places for teaching and learning,
                but reports still warn us that schools can be the site for
                certain particularly unsafe incidents. Schools have to be
                prepared to address a range of threats to security at schools,
                such as weather, lock-in, bullying, and violent attacks.
              </p>
              <p>
                CBSS Security is partnering with you and your staff to ensure
                the workplace is prepared for both routine and unexpected safety
                concerns. To order to meet the specific objectives, our school
                security strategies are designed and implemented. To order to
                promote campus security and provide a safe school environment we
                introduce advanced training programs.
              </p>
              {/* <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
                <strong>Why choose CBSS Security Services?</strong>
              </h5> */}
              <p>
                We incorporate state-of – the-art technology into our expertise
                to provide an innovative approach to school security solutions
                which minimizes risks and maximizes safety. We are committed to
                the best interests of our customers and their students. This
                helps us build sustainable relationships and improves the
                stability of the institutions we serve.
              </p>
              <p>Below are the safety responsibilities:</p>
              <ul>
                <li>
                  Implementation and proper management of comprehensive location
                  wide safety
                </li>
                <li>
                  Supervising all security forces and trained them in the
                  various procedures
                </li>
                <li>
                  During the Fire Safety Drill ensuring that the floors in the
                  buildings are cleared of
                </li>
                <li>Students/staff</li>
                <li>
                  To be particularly vigilant while on night patrol and to
                  inspect all suspects, and also not to allow pass the gate
                  without proper authorization.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Education;
