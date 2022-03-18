import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import Manufacture1 from "../../Images/manufacture.png";

const Manufacture = () => {
  return (
    <div id="Manufacture" className="py-3 py-md-5">
        <Container className="py-3 py-md-5">
    <h3 className="text-primary py-3 text-center">
      MANUFACTURING & INDUSTRIAL SECURITY{" "}
    </h3>
    <Row className="g-3 justify-content-center">
      <Col md={4} className="align-self-center">
        <div className="text-center mb-3">
          <Image className="img-fluid" src={Manufacture1} alt="" />
        </div>
      </Col>
      <Col md={8}>
        <p>
          CARBON BLACK Security has extensive experience with retail and
          warehousing systems in resolving security threats. We also have
          expertise in helping our clients meet their compliance and other
          regulatory responsibilities. Our administration will perform
          security audits with your loss prevention team to determine the
          specific internal and external risks of your plant.
        </p>
        <p>
          For factories and processing facilities,{" "}
          <strong>security guards for industries </strong> are needed.
          Industrial workers may be uncovered, endangered and other risks
          of safety. Continuous and comprehensive monitoring of the
          production facility and network are essential elements of plant
          safety. Industrial buildings and plants are usually large, busy,
          crowded environments. Security threats are not unusual in and
          around industrial and physical plants, whether factory, mill,
          refinery, packing house or manufacturing facility.{" "}
        </p>
        {/* <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
          <strong>Why choose CBSS Security Services?</strong>
        </h5> */}
        <p>
          Each daily and routine security guard duty for industrial plants
          is important in order to maintain a well-functioning and
          risk-free building. We have a highly trained, licensed office
          and the best in security technology in our integrated solutions
          for addressing your safety needs, including loss prevention and
          control. Our solutions may be used in addition to our qualified
          professionals
        </p>
        <ul>
          <li>
            CCTV with 24/7 or motion activated feed, local or remote
            monitoring
          </li>
          <li>Daily reports of plant safety conditions</li>
          <li>
            Surveillance of all vehicles and people who have access to the
            property
          </li>
          <li>Various patterns of patrol to avoid routines</li>
          <li>Regular staircase and lift monitoring</li>
          <li>
            Access for all en Access may include the operation of:
            doorways, gates, and docks
          </li>
          <li>Perimeter surveillance</li>
        </ul>
      </Col>
    </Row>
  </Container></div>
  )
}

export default Manufacture