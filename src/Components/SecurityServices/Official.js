import React from "react";

const Official = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">Our Services - Official & Commercial Building</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 py-md-5">
        <Container>
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
                <Image className="img-fluid" src={Official} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container className="py-3 py-md-5">
          <h3 className="text-primary py-3 text-center">
            MANUFACTURING & INDUSTRIAL SECURITY{" "}
          </h3>
          <Row className="g-3 justify-content-center">
            <Col md={4} className="align-self-center">
              <div className="text-center mb-3">
                <Image className="img-fluid" src={Manufacture} alt="" />
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
        </Container>
      </div>
    </div>
  );
};

export default Official;
