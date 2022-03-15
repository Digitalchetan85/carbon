import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Official from "../../Images/official.png";
import Manufacture from "../../Images/manufacture.png";
import Residential from "../../Images/residential.png";
import Edu1 from "../../Images/edu-1.png";
import Edu2 from "../../Images/edu-2.png";
import Warehouse1 from "../../Images/warehouse-1.png";
import Warehouse2 from "../../Images/warehouse-2.png";
import Personal1 from "../../Images/personal-1.png";
import Personal2 from "../../Images/personal-2.png";
import Dog from "../../Images/dog.png";

const SecurityServices = () => {
  return (
    <div>
      <div id="about-us" className="bg-info">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-secondary">Our Services</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5">
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
            <Col md={4} className="text-center">
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
        <hr />
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
        <hr />
        <Container className="py-3 py-md-5">
          <h3 className="text-primary py-3 text-center">
            EDUCATIONAL INSTITITES SECURITY{" "}
          </h3>
          <Row className="g-3 ">
            <Col md={6}>
              <div className="py-3">
                <Image className="img-fluid" src={Edu1} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="py-3">
                <Image className="img-fluid" src={Edu2} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <p>
                Our classrooms must be safe places for teaching and learning,
                but reports still warn us that schools can be the site for
                certain particularly unsafe incidents. Schools have to be
                prepared to address a range of threats to security at schools,
                such as weather, lock-in, bullying, and violent attacks.
              </p>
              <p>
                CBSS Security is partnering with you and your staff to ensure
                the workplace is prepared for both routine and unexpected safety
                concerns. To order to meet the specific objectives, our school
                security strategies are designed and implemented. To order to
                promote campus security and provide a safe school environment we
                introduce advanced training programs.
              </p>
              {/* <h5 className="pt-2 pb-2 pt-md-3 pb-md-3">
                <strong>Why choose CBSS Security Services?</strong>
              </h5> */}
              <p>
                We incorporate state-of – the-art technology into our expertise
                to provide an innovative approach to school security solutions
                which minimizes risks and maximizes safety. We are committed to
                the best interests of our customers and their students. This
                helps us build sustainable relationships and improves the
                stability of the institutions we serve.
              </p>
              <p>Below are the safety responsibilities:</p>
              <ul>
                <li>
                  Implementation and proper management of comprehensive location
                  wide safety
                </li>
                <li>
                  Supervising all security forces and trained them in the
                  various procedures
                </li>
                <li>
                  During the Fire Safety Drill ensuring that the floors in the
                  buildings are cleared of
                </li>
                <li>Students/staff</li>
                <li>
                  To be particularly vigilant while on night patrol and to
                  inspect all suspects, and also not to allow pass the gate
                  without proper authorization.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container className="py-3 py-md-5">
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

        <Container className="py-3 py-md-5">
          <h3 className="text-primary py-3 text-center">
            WAREHOUSE & LOGISTICS SECURITY
          </h3>
          <Row className="g-3 ">
            <Col md={6}>
              <div className="text-center">
                <Image className="img-fluid " src={Warehouse1} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image className="img-fluid " src={Warehouse2} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <p>
                Carbon Black Security is pleased to offer cost-friendly, but
                limited access to warehouse sites, logistics security solutions
                that ensure maximum safety for our customers, by combining
                quality manpower with cutting-edge technologies
              </p>
              <p>
                We have extensive experience in addressing warehouse site
                security. The good relationship that we have with local police
                departments allows us to work closely with them to improve
                safety on building sites. We saw that the sites face the
                greatest threats:
              </p>
              <ul>
                <li>Theft or pilferage of supplies and equipment</li>
                <li>Theft of services on the part of warehouse</li>
                <li>Liability created by trespassers</li>
                <li>Vandalism</li>
                <li>Fire</li>
                <li>Work disruption caused by protesters or labor conflicts</li>
              </ul>
              <p>
                In response to natural disaster emergency services to defense
                during protests and strikes. CBSS provides the best{" "}
                <strong>security guard for warehouse & logistics </strong>that
                helps the supply chain to keep moving.
              </p>
              <p>
                To accomplish this, we offer the following security guard
                services for the warehouse that can be tailored to suit your
                exact needs:
              </p>
              <ul>
                <li>Mobile Patrols</li>
                <li>CCTV Surveillance</li>
                <li>Vehicle monitoring in your warehouse</li>
                <li>Safeguarding products and inventory</li>
                <li>Random inspections and foot patrol.</li>
              </ul>
            </Col>
          </Row>
        </Container>

        <Container className="py-3 py-md-5">
          <h2 className="text-primary text-center py-2">PERSONAL BODYGUARD</h2>
          <Row className="g-3 justify-content-center">
            <Col md={6}>
              <div className="">
                <Image className="img-fluid" src={Personal1} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="">
                <Image className="img-fluid" src={Personal2} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            <div className="pt-5 pb-5">
              <Col md={12}>
                <p>
                  We provide regular or occasional assistance and security for
                  famous artists at premiers, concert tours, movie locations or
                  other activities. We are focusing on safeguarding business
                  VIPs; including entrepreneurs, CEOs, banking companies, bank
                  managers. We conduct the duties of the Secretary Assistant and
                  also deal with the monitoring of information, identification
                  of interceptors and the safety of information during the
                  meeting.
                </p>
                <ul>
                  <li>
                    In all aspects of bodyguard service, our security team
                    members are better trained.
                  </li>
                  <li>
                    We have a great history in private or personal bodyguards
                    across Karnataka.
                  </li>
                  <li>
                    For events / vacation / business we offer temporary body
                    guard services.
                  </li>
                </ul>
                <p>
                  Through adding a number of cameras to help secure the property
                  24/7, we will help you use the latest technology. The programs
                  include the latest sophisticated surveillance equipment, with
                  highly trained and professional personnel to ensure that any
                  accidents or risks are replied promptly.
                </p>
                <p>
                  Gated communities are calling on Individual to protect their
                  privacy and security. You will ensure that your door is met by
                  hiring trained, knowledgeable and trustworthy security
                  officers with expertise in a safe community. At CBSS, we are
                  glad to offer solutions based on their specific needs and
                  priorities for every Individual.
                </p>
              </Col>
            </div>
          </Row>
        </Container>
        <hr />
        <Container className="py-3 py-md-5">
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

export default SecurityServices;
