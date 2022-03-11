import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Train1 from "../../Images/train-1.png";
import Train2 from "../../Images/train-2.png";
import Train3 from "../../Images/train-3.png";

const Training = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                  Training
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="training" className="">
        <Container>
          <h2 className="text-center text-primary">WHY SYNONYMS</h2>
          <Row className="justify-content-center">
            <Col md={12}>
              <ol type="1">
                <li>Highly prioritized status to all our valued clients by paying more attention, and go an extra mile.</li>
                <li>Four Tier Security Training Program</li>
                <ol type="a">
                  <li>Basic Guarding Training</li>
                  <li>Industry Specific Training</li>
                  <li>ite Specific Training</li>
                  <li>On Job Training (OJT): Regular onsite and off-site training to update security skill, impart site specific changes in security procedure; improve skill level' refresh awareness security skill etc.</li>
                </ol>
                <li>Escalation Matrix will be provided with contact details of Operation Team. CRM will be the one point contact person to solve the security related issues from time to time.</li>
                <li>We conduct detailed Risk Assessment Survey of the site and submit our Report and Suggestions and mutual SOP of every site will be obtained from client as per their requirement.</li>
                <li>Monthly training on Emergency risks like Natural Disasters, Bomb Treat Calls, Fire Accidents, Evacuation etc.</li>
                <li>Stringent Recruitment Process in Guard Selections with Police verification acknowledgment copy will be provided to client within 15 days of deployment.</li>
                <li>Surprise Night rounds and regular, un-scheduled visits by Area Officers and Senior Management team.</li>
                <li>Monthly MIS details with all the required attached reports to be shared with Clients along with 24 X 7 accessibility at all the levels of the organization</li>
                <li>We have reasonable contact with Government Body, Bureaucrats, Law |Officials, if required.</li>
                <li>Non-Unionist workforce from CBSS Security Force.</li>
              </ol>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={4}>
                <Image className="img-fluid" src={Train1} alt="" />
                </Col>
              <Col md={4}><Image className="img-fluid" src={Train2} alt="" /></Col>
              <Col md={4}><Image className="img-fluid" src={Train3} alt="" /></Col>
            </Row>
        </Container>
        </div>
    </div>
  );
};

export default Training;
