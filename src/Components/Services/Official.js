import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import Official1 from "../../Images/official.png";

const Official = () => {
  return (
    <div>
        <Container className="pb-3 pb-md-5">
          <h3 className="text-primary py-3 text-center">
            OFFICE & COMMERCIAL BUILDING
          </h3> 
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
                <strong>How important is Security guards?</strong>
              </h5>
              <p>
                At CBSS Security, we work with local law enforcement and
                facility managers to establish a Security Plan to meet all the
                various needs of the specific business building. We are
                committed to the vigilant security of these facilities in all
                its areas.
              </p>
              <p>
                Through combining advanced technologies with world-class
                experience to minimize risks, we optimize defense performance
                and reliability through our innovative approach to full security
                solutions for commercial buildings. Our commitment to our
                clients enables us to build lasting relationships with our
                clients that allow our clients to focus on their business while
                focusing on ours, which ensures the security of their customers,
                employees and property.
              </p>
            </Col>
          </Row>
          <Row className="g-3 g-3">
            <Col md={8}>
              <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
                <strong>Why choose CBSS Security Services?</strong>
              </h5>
              <p>
                The highly trained workforce and access control programs
                maintain a sense of safety as customers and employees visit the
                workplace. Safety CBSS Security delivers 24-hour video control
                with the most modern security systems and professionally trained
                and experienced management services.
              </p>
              <p>
                The new advances in the fields of access control, GPS tracking
                and camera technology ensure optimum reliability and
                transparency.
              </p>
              <p>
                CBSS Security force for commercial and office buildings include
                the following, among many:
              </p>
              <ul>
                <li>CCTV</li>
                <li>Remote monitoring</li>
                <li>
                  Managing potential issues with terminated and/or disgruntled
                  employees
                </li>
                <li>
                  Specifically, optimized programs for day and night
                  surveillance
                </li>
                <li>Employee identification (ID) systems</li>
                <li>Perimeter and vertical checks</li>
                <li>Risk assessment survey</li>
                <li>Safety seminars for their employees</li>
                <li>Fire guards and Fire safety directors (FSD)</li>
                <li>Access control systems with or without biometrics</li>
                <li>24/7 Emergency response</li>
                <li>Coverage for strike or civil unrest</li>
              </ul>
              <p>
                <strong>
                  Our top professional security guards protect from such victim
                </strong>
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image className="img-fluid" src={Official1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
    </div>
  )
}

export default Official