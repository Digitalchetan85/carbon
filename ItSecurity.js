import React from "react";

const ItSecurity = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Our Services - IT Security
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="bpo" className="pt-3 pb-3 py-md-5 bg-light">
        <Container>
          <Row>
            <h4 className="text-primary text-center py-3">
              BPO / KPO / IT SECURITY
            </h4>
            <Col md={8} className="align-self-center">
              <p>
                Secure premises and personnel by patrolling property; monitoring
                surveillance equipment; inspecting buildings, equipment and
                access points; permitting entry. Obtain help by sounding alarms.
                Prevent losses and damage by reporting irregularities, informing
                violators of policy and procedures; restraining trespassers. Our
                security personnel ensure to deny unauthorized access in the
                premises and our experts have the industry-specific experience,
                knowledge and technology skills.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Bpo} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="campus" className="pt-3 pb-3 py-md-5">
        <Container>
          <Row>
            <h4 className="text-primary text-center py-3">CAMPUS SECURITY</h4>

            <Col md={12}>
              <p>
                Campus Security personnel promote lawful behavior and protect
                the welfare of students, faculty and staff as a uniformed
                presence on campus. A campus security officer performs foot and
                vehicle patrols of college and university campus to monitor
                behavior, secure buildings and property, investigate
                disturbances, maintain order during events and enforce
                regulations. They monitor the physical safety of campus
                buildings by locking and unlocking doors, patrolling or
                monitoring using surveillance systems, and reporting suspicious
                behavior. Many are also tasked with enforcing traffic and
                parking regulations, in emergency situations, campus security
                officers respond to the scene, provide first aid, and alert
                additional police or emergency personnel as appropriate time to
                time.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ItSecurity;
