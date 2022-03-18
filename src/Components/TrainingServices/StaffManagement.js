import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import Site2 from "../../Images/site-2.png";
import Site3 from "../../Images/site3.png";
import Building from "../../Images/building-management-system.png";
import RFID from "../../Images/rfid.png";
import Garrett from "../../Images/garrett.png";
import Walky from "../../Images/walky.png";

const StaffManagement = () => {
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
      <div id="staff-training" className="pt-3 pb-3 pt-md-3 pb-md-3 bg-light">
        <Container>
          <h3 className="text-primary py-3 text-center">
            Staff Training & Development{" "}
          </h3>
          <Row className="g-3 justify-content-center">
            <Col md={6}>
              <div className="text-center">
                <Image className="img-fluid" src={Site2} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image className="img-fluid" src={Site3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="py-3">
          <Row className="g-3 justify-content-center">
            <Col md={12} className="align-self-center">
              <p>
                CBSS Security is conscious of the high degree of accountability
                and adherence to government regulations required of all security
                company license holders. For this reason, we are committed to
                providing ongoing training and development opportunities for all
                our employees. In addition, we provide on-site training for
                employees in the latest security techniques and ensure all are
                conversant with the correct and appropriate use of equipment.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="performance" className="pt-3 pb-3 pt-md-5 pb-md-3">
        <Container>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <h3 className="text-primary py-3 text-center">
                Performance Monitoring
              </h3>
              <p>
                At CBSS Security we value the process of performance monitoring
                as a tool for developing individual employees’ skills and for
                encouraging accountability in their roles and responsibilities.
                Through regular visits by our Operations Manager and
                communication with the Company Director, we work with personnel
                to clarify their roles and responsibilities, develop goals for
                improvement and address performance issues constructively and
                positively. This process ensures CBSS Security employees are
                well positioned to provide optimum security services to our
                clients, and to enjoy a high level of job satisfaction and
                company loyalty.
              </p>
              <p>
                Our teams are also aware of the legal limitations of their role,
                and follow a clear set of procedures for intervening in
                dangerous situations and referring matters to police and
                authorities.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        id="building management"
        className="pt-3 pb-3 pt-md-3 pb-md-3 bg-light"
      >
        <Container>
          <Row className="g-3 justify-content-center my-3 my-md-5">
            <Col md={8}>
              <h3 className="text-primary py-3 text-center">
                Building Management
              </h3>
              <p>
                The building subsystems are critically managed under 24/7
                supervision of skilled personnel. CBSS has been providing an
                Integrated Facility Management System for this warehouse, CFS,
                IT, School, hospital which caters to Building Management Systems
                in one end and managed, all building Operation, CCTV, Fire
                systems, etc.
              </p>
              <p>
                We also have forged strategic alliance in the security industry
                by joining hands with the world's leading security equipment
                company. We provide CCTV surveillance systems, intrusion
                detection systems, access control systems, fire detection
                systems, building management systems.
              </p>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image src={Building} alt="" className="img-fluid"></Image>
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center my-3 my-md-5">
            <Col md={8} className="align-self-center">
              <h4 className="text-primary">RFID</h4>
              <p>
                Radio Frequency Identification (RFID) technology has been in
                existence for many decades but it is only recently that RFID is
                being increasingly used to its full potential. RFID or radio
                frequency identification is a system that transmits identity in
                the form of a unique serial number of a product wirelessly.
                RFID, a type of Auto-ID technology is used to reduce time and
                labor and improve real time data accuracy
              </p>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image src={RFID} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center my-3 my-md-5">
            <Col md={4}>
              <div className="text-center">
                <Image src={Garrett} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={8} className="align-self-center">
              <h4 className="text-primary">DFMD/HHMD</h4>
              <p>
                When it is concerned that you have to protect yourself from
                unforeseen attacks in an event, then rely on CBSS which provides
                various safety articles along with DFMD (Door Frame Metal
                Detectors). In this way, the organization is engaged to provide
                security machines with technical specifications having quick
                installable facilities. These metal door detectors are useful to
                establish on one door entry as well as worthy for full coverage
                of multizone detection having 2-8 entry doors.
              </p>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center my-3 my-md-5">
            <Col md={8} className="align-self-center">
              <h4 className="text-primary">Walky-Talky</h4>
              <p>
                Citywide/Nationwide Coverage License Free Radio location through
                GPS Unlimited Talk Groups Private Call/ Selective Call/ Group
                Call In built GPS, Wifi, Blue Tooth Voice recording and playback
                All functions and features of Digital Mobile Radio (DMR)Ingress
                Protection Class IP54 and Military Standard MIL - Std
                810FUnlimited Call Records Over the Air Programming Stun/
                Kill/Remote Revive lost/Stolen Radio Voice encryption(Speech
                Secrecy) One year free replacement warranty Cloud Technology
                Connect via Wifi.
              </p>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image src={Walky} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default StaffManagement;
