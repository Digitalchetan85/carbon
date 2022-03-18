import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import Dog from "../../Images/dog.png"

const DogSquad = () => {
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
      <div className="py-3 py-md-5">
        <Container>
          <Row className="g-3 justify-content-center">
            <h3 className="text-primary text-center py-3">
              DOG SQUAD SERVICES
            </h3>
            <Col md={12}>
              <p>
                Everybody needs a safe and stable atmosphere, we provide the
                <strong> best dog squad security service</strong> to protect
                you. It is well-known that Dogs are the most trustworthy and
                loyal creatures and with an effective capacity for listening,
                smelling and because they are the strongest protectors of the
                situation.
              </p>
              <div className="text-center text-md-start">
                <Image className="img-fluid" src={Dog} alt="" />
              </div>
              <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
                <strong>What Do We Provide?</strong>
              </h5>
              <ul>
                <li>Dogs with Sharp Hearing Capacity</li>
                <li>Extensive senses of sniffing dogs</li>
                <li>Breeds such as the German shepherd, Labrador, Doberman</li>
              </ul>
              <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
                <strong>Training for Detection</strong>
              </h5>
              <ul>
                <li>Stolen Objects</li>
                <li>Evidence of crime</li>
                <li>Suspected luggage</li>
                <li>Risky Operations</li>
                <li>The Sniff Explosive</li>
                <li>Sense Arms</li>
                <li>Detection of narcotics</li>
              </ul>
              <p>
                Our dogs are well trained and knowledgeable to tackle all kinds
                of situations. We provide the highest level of service and we
                have a full responsibility for the safety of you. You can
                contact Carbon Black Security force to avail the{" "}
                <strong>best dog squad services in Bangalore.</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DogSquad;
