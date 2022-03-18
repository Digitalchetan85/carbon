import React from "react";

const Residential = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Our Services - Residential Building Security
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-3 py-md-5">
        <Container className="py-3 py-md-5">
          <h3 className="text-primary py-3 text-center">
            RESIDENTIAL BUILDING SECURITY
          </h3>
          <Row className="g-3 justify-content-center">
            <Col md={8}>
              <div className="text-center text-md-start py-3">
                <Image className="img-fluid" src={Residential} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
                <strong>How important is Security guards?</strong>
              </h5>
              <p>
                We use the optimal combination of workforce and technology to
                meet the particular concerns of the home communities and to
                create optimum solutions for residential security. One of the
                main advantages of{" "}
                <strong>
                  residential or private security guards for property
                </strong>{" "}
                is that insurance rates will probably be lower when preventive
                measures are in place 24 hours a day
              </p>
              <p>
                You will take other things into account when you have decided
                that your building needs <strong>24-hrs security guards</strong>
                . You’re going to have guards who supervise themselves for work
                day parts and absolutely at the weekends and on holidays when
                you put 24hrs security on your premises.
              </p>
              <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
                <strong>
                  Why choose Carbon Black for Residential building Security
                  services?
                </strong>
              </h5>
              <p>
                Carbon Black provides highly customized security solutions with
                the staff and resources of a large company, using the extensive
                experience of our founding member to manage all activities.
                Hands-on administration, trained authorities and the latest
                technology combine in order to provide strategies specifically
                designed for each building or neighborhood for public health.
              </p>
              <p>
                We have an excellent record in partnering with local law
                enforcement agencies and the integration of community police
                services into the residential security solutions that we
                provide. We are continuously monitoring security technology
                improvements as well as changes in your building and community
                to ensure that your building safety plan is effective in
                securing your buildings continuously.
              </p>
              <p>
                Carbon Black Security can provide remote monitoring for your
                CCTV feed, using the new surveillance technology, highly
                qualified personnel and professional management throughout the
                whole clock. Our workers are tracked to ensure the highest
                degree of transparency and precision with the current
                developments in camera technology and GPS tracking.
              </p>
              <p>
                Every applicant for security guards is screened carefully and we
                have a proprietary training program with specialists in military
                and legal systems. The consequence is the ability of trained
                authorities to prevent and track life and property potential
                threats through sophisticated detection methods, to recognize
                criminal activities, to control planned terror acts, and to
                respond to all crises, including fire, power failure, medical
                and natural disasters.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Residential;
