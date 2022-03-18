import React from "react";
import { Container, Row, Col, Image, Card} from "react-bootstrap";
import Train1 from "../../Images/train-1.png";
import Train2 from "../../Images/train-2.png";
import Train3 from "../../Images/train-3.png";
import Site1 from "../../Images/site-1.png";
import Site2 from "../../Images/site-2.png";
import Incident from "../../Images/incident.png"

const SiteMonitoring = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Our Services
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="training" className="pt-3 pb-3 pt-md-3 pb-md-3">
        <Container>
          <h2 className="text-center text-primary py-3">WHY SYNONYMS</h2>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <ol type="1">
                <li>
                  Highly prioritized status to all our valued clients by paying
                  more attention, and go an extra mile.
                </li>
                <li>Four Tier Security Training Program</li>
                <ol type="a">
                  <li>Basic Guarding Training</li>
                  <li>Industry Specific Training</li>
                  <li>ite Specific Training</li>
                  <li>
                    On Job Training (OJT): Regular onsite and off-site training
                    to update security skill, impart site specific changes in
                    security procedure; improve skill level' refresh awareness
                    security skill etc.
                  </li>
                </ol>
                <li>
                  Escalation Matrix will be provided with contact details of
                  Operation Team. CRM will be the one point contact person to
                  solve the security related issues from time to time.
                </li>
                <li>
                  We conduct detailed Risk Assessment Survey of the site and
                  submit our Report and Suggestions and mutual SOP of every site
                  will be obtained from client as per their requirement.
                </li>
                <li>
                  Monthly training on Emergency risks like Natural Disasters,
                  Bomb Treat Calls, Fire Accidents, Evacuation etc.
                </li>
                <li>
                  Stringent Recruitment Process in Guard Selections with Police
                  verification acknowledgment copy will be provided to client
                  within 15 days of deployment.
                </li>
                <li>
                  Surprise Night rounds and regular, un-scheduled visits by Area
                  Officers and Senior Management team.
                </li>
                <li>
                  Monthly MIS details with all the required attached reports to
                  be shared with Clients along with 24 X 7 accessibility at all
                  the levels of the organization
                </li>
                <li>
                  We have reasonable contact with Government Body, Bureaucrats,
                  Law |Officials, if required.
                </li>
                <li>Non-Unionist workforce from CBSS Security Force.</li>
              </ol>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={3}>
              <div className="text-center">
                <Image className="img-fluid" src={Train1} alt="" />
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image className="img-fluid" src={Train2} alt="" />
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Image className="img-fluid" src={Train3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="site-monitoring" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="g-3 justify-content-center">
            <h3 className="text-primary text-center py-3">SITE MONITORING</h3>
            <Col md={6}>
              <Image className="img-fluid" src={Site1} alt="" />
            </Col>
            <Col md={6}>
              <p>
                CBSS Security guards follow a detailed set of site procedures
                for monitoring and maintaining safety, security, and deterring
                incidents/crimes.
              </p>
              <p>
                In each area to be patrolled, CBSS sets the detail, frequency of
                patrol with the gates, doors and, locks to be checked. Site
                monitoring procedures also cover checking for signs of forced
                entry, vandalism, graffiti and checking for faults in emergency
                exits and lifts.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="site-operation" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="g-3 justify-content-center">
            <h3 className="text-primary text-center py-3">
              Site Operating Procedures
            </h3>
            <Col md={6} className="">
              <p>
                Specific Site Operating Procedures (SOPs) are developed for each
                client to ensure that relevant areas are regularly
                checked/protected and that personnel is kept safe. These are
                developed in consultation with clients and address the
                particular characteristics of each site to be secured and the
                manner in which personal needs to be protected. SOPs are a
                highly effective mechanism used by CBSS Security to ensure
                comprehensive security is maintained at all times and that the
                specific security needs of individual businesses are addressed.
              </p>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image className="img-fluid" src={Site2} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center"></Row>
        </Container>
      </div>
      <div id="container" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="g-3 justify-content-center py-2">
            <Col md={6} className="align-self-center">
              <Card>
                <Card.Body>
                  <Card.Title className="py-2 text-primary">
                    Digital Baton Point Monitoring
                  </Card.Title>

                  <Card.Text>
                    CBSS Security uses the latest digital technology in Baton
                    Point Monitoring. This system requires all security guards
                    to swipe their electronic batons at digital checkpoints at
                    regular intervals. Baton Point Monitoring provides evidence
                    that guards conduct their patrol on time and at the required
                    frequency. It also gives confidence and peace of mind to
                    clients that their premises are receiving around-the-clock
                    protection.
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* <h3 className="text-primary">Digital Baton Point Monitoring</h3>
              <p>CBSS Security uses the latest digital technology in Baton Point Monitoring. This system requires all security guards to swipe their electronic batons at digital checkpoints at regular intervals. Baton Point Monitoring provides evidence that guards conduct their patrol on time and at the required frequency. It also gives confidence and peace of mind to clients that their premises are receiving around-the-clock protection.</p>               */}
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="py-2 text-primary">
                    Daily Occurrence Book
                  </Card.Title>

                  <Card.Text>
                    CBSS Security uses the latest digital technology in Baton
                    Point Monitoring. This system requires all security guards
                    to swipe their electronic batons at digital checkpoints at
                    regular intervals. Baton Point Monitoring provides evidence
                    that guards conduct their patrol on time and at the required
                    frequency. It also gives confidence and peace of mind to
                    clients that their premises are receiving around-the-clock
                    protection.
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* <h3 className="text-primary text-end">Daily Occurrence Book</h3>
              <p>The team at CBSS Security keeps comprehensive records of all matters relating to business security. Our security guards make records in Daily Occurrence Books (DOBs) that provide an hourly view of each shift and general information that clients may need to be aware of. DOBs include routine observations made about the environments that have been patrolled and personnel that have been protected. DOBs may include items such as doors left unlocked or equipment left running. More serious incidents such as vandalism or forced entry that require more detailed reporting are included in an Incident Report.</p> */}
            </Col>
          </Row>
        </Container>
      </div>

      <div id="incident report" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="g-3 justify-content-center">
            <h3 className="text-primary text-center py-2">Incident Reports</h3>
            <Col md={4}>
              <div className="text-center">
                <Image className="img-fluid" src={Incident} alt="" />
              </div>
            </Col>
            <Col md={8}>
              <p>
                Incident Reports are provided to clients when serious events
                take place during a shift covered by CBSS Security personnel.
                Incident Reports detail events such as trespassing, vandalism,
                disruptive or offensive behavior, assaults, theft, medical
                incidents and drug related incidents.
              </p>
              <p>
                The details of any authorities involved such as police,
                ambulance or emergency workers are also specified in Incident
                Reports. Copies of Incident Reports are provided to the client’s
                site manager as well as CBSS Security management within 24
                hours.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="on-site" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="g-3 justify-content-center">
            <h3 className="text-primary text-center py-2">
              On-site Security Guard Monitoring
            </h3>
            <Col md={12}>
              <p>
                CBSS Security Operations Managers make weekly visits to all our
                on-the-ground security guards. This ensures a clear line of
                communication for maintaining high standards of security and to
                address any areas of concern. The Operations Manager is also
                available at all times to be contacted by guards on patrol and
                clients
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SiteMonitoring;
