import React from "react";

const HealthSaftey = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Our Services - Health & Safety
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="occupational" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="g-3 justify-content-center">
            <h3 className="text-primary text-center py-2">
              Occupational Health & Safety
            </h3>
            <Col md={6} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid m-2" src={Safety} alt="" />
                <Image className="img-fluid m-2" src={Occupation1} alt="" />
              </div>
            </Col>
            <Col md={6} className="">
              <p>
                CBSS Security is dedicated to actively reducing Occupational
                Health and Safety (OH&S) risks for staff and the general public,
                through a thorough process of risk assessment, monitoring and
                minimization. We take steps to eliminate foreseeable risks and
                where this is not possible, to control risks. Our OH&S policy
                complies with relevant government requirements and industry
                standards and covers the following areas for each site:
              </p>
              <ul>
                <li>Hazard identification</li>
                <li>Risk assessment</li>
                <li>Risk elimination or control</li>
                <li>Safety monitoring and review</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="Risk" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="g-3 justify-content-center">
            <h3 className="text-primary text-center py-2">Risk Mitigation</h3>
            <Col md={12} className="align-self-center">
              <p>
                CBSS Security personnel are well versed in emergency and
                evacuation procedures and take a proactive approach to
                preventing accidents and security breaches. Our security guards
                do not wait for incidents or security breaches to occur and take
                initiative in implementing measures to minimize risk and prevent
                harm.
              </p>
              <p>
                CBSS Security employs motivated, focused security guards who are
                committed to safeguarding the security of client premises and
                personnel. We are dedicated to selecting qualified, quality
                people and in maintaining and building their skills to achieve
                the best possible security outcomes for our clients. CBSS
                Security engages a thorough process of recruitment, induction
                and ongoing training to ensure consistently high standards of
                security practice are maintained.
              </p>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={4}>
              <div className="text-center">
                <Image className="img-fluid" src={Risk2} alt="" />
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image className="img-fluid" src={Risk1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="policies" className="pt-3 pb-3 pt-md-3 pb-md-3">
        <Container>
          <Row className="g-3 justify-content-center">
            <Col md={12} className="align-self-center">
              <h3 className="text-primary">POLICIES</h3>
              <p>
                CBSS Security employs motivated, focused security guards who are
                committed to safeguarding the security of client premises and
                personnel. We are dedicated to selecting qualified, quality
                people and in maintaining and building their skills to achieve
                the best possible security outcomes for our clients. CBSS
                Security engages a thorough process of recruitment, induction
                and ongoing training to ensure consistently high standards of
                security practice are maintained.
              </p>
              <h3 className="text-primary">Staff Screening & Selection</h3>
              <p>
                When screening and selecting staff, CBSS Security requires
                applicants to submit a full resume with references and copies of
                qualifications. We conduct all relevant background checks and
                carry out one-on-one interviews with suitable applicants. Our
                security guards are selected on the basis of their previous
                security experience, qualifications and the qualities required
                becoming part of the CBSS Security team.
              </p>
              <h3 className="text-primary">Professional Qualification</h3>
              <p>
                CBSS Security only selects security guards who are qualified,
                physically & mentally fit . This ensures all our personnel are
                qualified to cater for all relevant security situations
              </p>
              <h4 className="text-primary">Professional Qualities</h4>
              <p>
                One of the essential professional qualities of any CBSS Security
                guard is to be an excellent communicator. We believe
                communication is at the forefront of providing for and meeting
                our individual clients’ needs and for attending to and reporting
                all matters of security. In addition CBSS Security seeks
                employees that are astute observers and who are responsible and
                keen to take initiative.
              </p>
              <h3 className="text-primary">Induction & Orientation </h3>
              <p>
                CBSS Security management takes an active role in the initial
                induction of new employees and in their early months of
                employment through a systematic orientation process. New
                employees receive a full induction into all company procedures
                including the use of Daily Occurrence Books, Incident Reports,
                Site Operation Procedures and Baton Point Monitoring.
              </p>
              <p>
                We imbue all new staff with the company values of
                responsibility, initiative and proactively for securing client
                assets and personnel. In order to carry out a thorough process
                of orientation, our Operations Managers make frequent visits to
                new employees in their first months on the job and then make
                contact at least weekly to ensure they are on track.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HealthSaftey;
