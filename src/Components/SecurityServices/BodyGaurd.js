import React from "react";

const BodyGaurd = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Our Services - Personal Bodyguard
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 py-md-5">
      <Container>
          <h2 className="text-primary text-center py-2">PERSONAL BODYGUARD</h2>
          <Row className="g-3 justify-content-center">
            <Col md={6}>
              <div className="">
                <Image className="img-fluid" src={Personal1} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="">
                <Image className="img-fluid" src={Personal2} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <div className="pt-5 pb-5">
              <Col md={12}>
                <p>
                  We provide regular or occasional assistance and security for
                  famous artists at premiers, concert tours, movie locations or
                  other activities. We are focusing on safeguarding business
                  VIPs; including entrepreneurs, CEOs, banking companies, bank
                  managers. We conduct the duties of the Secretary Assistant and
                  also deal with the monitoring of information, identification
                  of interceptors and the safety of information during the
                  meeting.
                </p>
                <ul>
                  <li>
                    In all aspects of bodyguard service, our security team
                    members are better trained.
                  </li>
                  <li>
                    We have a great history in private or personal bodyguards
                    across Karnataka.
                  </li>
                  <li>
                    For events / vacation / business we offer temporary body
                    guard services.
                  </li>
                </ul>
                <p>
                  Through adding a number of cameras to help secure the property
                  24/7, we will help you use the latest technology. The programs
                  include the latest sophisticated surveillance equipment, with
                  highly trained and professional personnel to ensure that any
                  accidents or risks are replied promptly.
                </p>
                <p>
                  Gated communities are calling on Individual to protect their
                  privacy and security. You will ensure that your door is met by
                  hiring trained, knowledgeable and trustworthy security
                  officers with expertise in a safe community. At CBSS, we are
                  glad to offer solutions based on their specific needs and
                  priorities for every Individual.
                </p>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BodyGaurd;
