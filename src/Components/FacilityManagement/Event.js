import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import Event1 from "../../Images/event-1.png";
import Event2 from "../../Images/event-2.png";
import Event3 from "../../Images/event-3.png";


const Event = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">
                Facility Management Services 
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="event" className="pt-3 pb-3 py-md-5">
        <Container>
          <Row className="g-3 justify-content-center">
            <h4 className="text-primary text-center py-3">
              EVENT SECURITY MANAGEMENT
            </h4>

            <Col md={12}>
              <p>
                Our Event Security Personnel provide protection and aid for
                attendees at events like conferences and concerts. These
                personnel travel to different venues and must familiarize
                themselves with new surroundings at every new event. They patrol
                venue grounds and buildings with a perceiving eye. They protect
                the premises during an event by completing activities like
                looking for signs of crime, identifying trespassers,
                apprehending criminals, reporting suspicious incidents, watching
                images registered by surveillance cameras, and performing first
                aid when necessary.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Event1} alt="" />
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Event2} alt="" />
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Event3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Event;
