import React from "react";

const Hospital = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Our Services - Hospital Security
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 py-md-5">
      <Container>
          <h3 className="text-primary py-3 text-center">HOSPITAL SECURITY</h3>
          <Row className="g-3 justify-content-center">
            <Col md={8}>
              <div className="text-center text-md-start py-3">
                <Image className="img-fluid" src={Residential} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <p>
                When considering the safety and security of your doctors,
                nurses, patients, and adequately, top-notice protection is of
                the utmost importance. When you utilize the services of CBSS
                Security, it’s our number one priority.{" "}
              </p>
              <p>
                Our security consultants are highly trained and provide you with
                the protection you need while maintaining a courteous manner and
                professional demeanor.{" "}
              </p>
              <p>
                We understand how important that is in the patient care
                industry.
              </p>
              <p>
                When patients arrive at a hospital, they expect to receive the
                best possible care and remain safe while being treated.{" "}
              </p>
              <p>
                Our security staff will help safeguard private patient rooms and
                ensure no unauthorized personnel disrupts their treatment or
                healing process.
              </p>
              <p>
                Our security guards are discreet, but present, ensuring that if
                some security issue does arise, there’s someone to make sense of
                the situation and prevent it from escalating further.
              </p>
              <p>
                Hospitals have to put security as a top priority. Hiring the
                private security consultants at CBSS Security will ensure the
                property, staff, and patients are safe and secure at all times.
                It will also minimize the potential of safety issues arising
                down the road.
              </p>
              <p>
                You can’t settle for an unproven security service, as the
                services they offer may not be able to provide the protection
                that is needed. CBSS Security consultants are correctly trained
                and able to handle common and uncommon protection issues that
                may arise in a hospital setting, providing peace of mind for
                those working at or seeking treatment from the facility.
              </p>
              <p>
                Here are a few frightening statistics that should paint the
                picture for you:
              </p>
              <ul>
                <li>Over 50% of hospital security are now armed</li>
                <li>
                  The number of armed guards in hospitals has more than
                  quadrupled in the last decade
                </li>
                <li>
                  Violent crime incidents in hospitals have quadrupled in that
                  same time period
                </li>
                <li>
                  Many security guards guarding healthcare facilities are not
                  properly trained in regards to weaponry
                </li>
              </ul>
              <p>
                Healthcare institutions must be safe zones for the patients that
                need care and the employees, nurses and doctors that supply that
                care. Unfortunately, there are many in the world today who
                respect nothing, and will just as soon bring violence to a
                hospital as anywhere else. That is why so many hospitals now
                employ armed security and armed guards to protect both patients
                and staff.
              </p>
              <p>
                If you are a hospital administrator or are responsible for the
                security of a health care facility and you see the need to hire
                armed guards to protect your facility and the people that depend
                on it, make sure you do some homework before hiring a security
                firm to handle the job. You want experienced armed security
                guards that understand the nuances of protecting a healthcare
                facility, which involves tact and understanding.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hospital;
