import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Train1 from "../../Images/train-1.png";
import Train2 from "../../Images/train-2.png";
import Train3 from "../../Images/train-3.png";
import Site1 from "../../Images/site-1.png";
import Site2 from "../../Images/site-2.png";
import Incident from "../../Images/incident.png";
import Occupation1 from "../../Images/occupation-1.png";
import Safety from "../../Images/safety.png";
import Risk1 from "../../Images/risk1.png";
import Risk2 from "../../Images/risk2.png"; 
import Site3 from "../../Images/site3.png";

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
      <div id="monitoring" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <h3 className="text-primary text-end">SITE MONITORING</h3>
            <Col md={6}>
              <Image className="img-fluid" src={Site1} alt="" />

            </Col>
            <Col md={6}>
              <p>CBSS Security guards follow a detailed set of site procedures for monitoring and maintaining safety, security, and deterring incidents/crimes.</p>
              <p>In each area to be patrolled, CBSS sets the detail, frequency of patrol with the gates, doors and, locks to be checked. Site monitoring procedures also cover checking for signs of forced entry, vandalism, graffiti and checking for faults in emergency exits and lifts.</p>
            </Col>        
          </Row>
          <Row className="justify-content-center"> 
          <div className="pt-5 pb-5">
          
          <h3 className="text-primary text-start">Site Operating Procedures</h3>
            <Col md={4}>
            <p>Specific Site Operating Procedures (SOPs) are developed for each client to ensure that relevant areas are regularly checked/protected and that personnel is kept safe. These are developed in consultation with clients and address the particular characteristics of each site to be secured and the manner in which personal needs to be protected. SOPs are a highly effective mechanism used by CBSS Security to ensure comprehensive security is maintained at all times and that the specific security needs of individual businesses are addressed.</p>
            </Col>
            </div>
            <Col md={8}>
              <Image className="image-fluid" src={Site2} alt="" />
              </Col>          
          </Row>
          <Row className="justify-content-center">
            <div className="pt-5 pb-5">
              <Col md={ 12}>
                <h3 className="text-primary">Digital Baton Point Monitoring</h3>
              <p>CBSS Security uses the latest digital technology in Baton Point Monitoring. This system requires all security guards to swipe their electronic batons at digital checkpoints at regular intervals. Baton Point Monitoring provides evidence that guards conduct their patrol on time and at the required frequency. It also gives confidence and peace of mind to clients that their premises are receiving around-the-clock protection.</p>
              <h3 className="text-primary text-end">Daily Occurrence Book</h3>
              <p>The team at CBSS Security keeps comprehensive records of all matters relating to business security. Our security guards make records in Daily Occurrence Books (DOBs) that provide an hourly view of each shift and general information that clients may need to be aware of. DOBs include routine observations made about the environments that have been patrolled and personnel that have been protected. DOBs may include items such as doors left unlocked or equipment left running. More serious incidents such as vandalism or forced entry that require more detailed reporting are included in an Incident Report.</p>
              </Col>
            </div>

          </Row>
          
          <Row className="justify-content-center">
            <h3 className="text-primary text-end">Incident Reports</h3>
            <Col md={6}>
              <Image className="img-fluid" src={Incident} alt="" />

            </Col>
            <Col md={6}>
              <p>Incident Reports are provided to clients when serious events take place during a shift covered by CBSS Security personnel. Incident Reports detail events such as trespassing, vandalism, disruptive or offensive behavior, assaults, theft, medical incidents and drug related incidents.</p>
              <p>The details of any authorities involved such as police, ambulance or emergency workers are also specified in Incident Reports. Copies of Incident Reports are provided to the client’s site manager as well as CBSS Security management within 24 hours.</p>
            </Col>        
          </Row>
          <Row className="justify-content-center">
            <h3 className="text-primary text-start">On-site Security Guard Monitoring</h3>
            <Col md={6}>
            <p>CBSS Security Operations Managers make weekly visits to all our on-the-ground security guards. This ensures a clear line of communication for maintaining high standards of security and to address any areas of concern. The Operations Manager is also available at all times to be contacted by guards on patrol and clients</p>

            </Col>
            <Col md={6}>
              <Image className="img-fluid" src={Incident} alt="" />
            </Col>        
          </Row>
        </Container>
        </div>  
        <div className="pt-3 pb-3 pt-md-5 pb-md-5">
          <Container>
            <Row className="justify-content-center">
              <h3 className="text-primary text-center">Occupational Health & Safety</h3>
              <Col md={12}>
                <Row>
                  <Col md={5}>
                    <Image className="img-fluid" src={Occupation1} alt="" />
                  </Col>
                  <Col md={5}>
                  <Image className="img-fluid" src={Safety} alt="" />
                  </Col>
                </Row>
                <p>CBSS Security is dedicated to actively reducing Occupational Health and Safety (OH&S) risks for staff and the general public, through a thorough process of risk assessment, monitoring and minimization. We take steps to eliminate foreseeable risks and where this is not possible, to control risks. Our OH&S policy complies with relevant government requirements and industry standards and covers the following areas for each site:</p>
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
        
        <div className="pt-3 pb-3 pt-md-5 pb-md-5">
          <Container>
            <Row className="justify-content-center">
              <h3 className="text-primary text-center">Risk Mitigation</h3>
              <Col md={12}>
                <Row>
                  <Col md={5}>
                    <Image className="img-fluid" src={Risk1} alt="" />
                  </Col>
                  <Col md={5}>
                  <Image className="img-fluid" src={Risk2} alt="" />
                  </Col>
                </Row>
                <p>CBSS Security personnel are well versed in emergency and evacuation procedures and take a proactive approach to preventing accidents and security breaches. Our security guards do not wait for incidents or security breaches to occur and take initiative in implementing measures to minimize risk and prevent harm.</p>
                <p>CBSS Security employs motivated, focused security guards who are committed to safeguarding the security of client premises and personnel. We are dedicated to selecting qualified, quality people and in maintaining and building their skills to achieve the best possible security outcomes for our clients. CBSS Security engages a thorough process of recruitment, induction and ongoing training to ensure consistently high standards of security practice are maintained.</p>

              </Col>

            </Row>
          </Container>
        </div>
        <div className="pt-3 pb-3 pt-md-5 pb-md-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
              <h3 className="text-primary">POLICIES</h3>
              <p>CBSS Security employs motivated, focused security guards who are committed to safeguarding the security of client premises and personnel. We are dedicated to selecting qualified, quality people and in maintaining and building their skills to achieve the best possible security outcomes for our clients. CBSS Security engages a thorough process of recruitment, induction and ongoing training to ensure consistently high standards of security practice are maintained.</p>
              <h3 className="text-primary">Staff Screening & Selection</h3>
              <p>When screening and selecting staff, CBSS Security requires applicants to submit a full resume with references and copies of qualifications. We conduct all relevant background checks and carry out one-on-one interviews with suitable applicants. Our security guards are selected on the basis of their previous security experience, qualifications and the qualities required becoming part of the CBSS Security team.</p>
              <h3 className="text-primary">Professional Qualification</h3>
              <p>CBSS Security only selects security guards who are qualified, physically & mentally fit . This ensures all our personnel are qualified to cater for all relevant security situations</p>
              <h4 className="text-primary">Professional Qualities</h4>
              <p>One of the essential professional qualities of any CBSS Security guard is to be an excellent communicator. We believe communication is at the forefront of providing for and meeting our individual clients’ needs and for attending to and reporting all matters of security. In addition CBSS Security seeks employees that are astute observers and who are responsible and keen to take initiative.</p>
              <h3 className="text-primary">Induction & Orientation </h3>
              <p>CBSS Security management takes an active role in the initial induction of new employees and in their early months of employment through a systematic orientation process. New employees receive a full induction into all company procedures including the use of Daily Occurrence Books, Incident Reports, Site Operation Procedures and Baton Point Monitoring.</p>
              <p>We imbue all new staff with the company values of responsibility, initiative and proactively for securing client assets and personnel. In order to carry out a thorough process of orientation, our Operations Managers make frequent visits to new employees in their first months on the job and then make contact at least weekly to ensure they are on track.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pt-3 pb-3 pt-md-5 pb-md-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <Image className="img-fluid" src={Site2} alt="" />
                <p>CBSS Security is conscious of the high degree of accountability and adherence to government regulations required of all security company license holders. For this reason, we are committed to providing ongoing training and development opportunities for all our employees. In addition, we provide on-site training for employees in the latest security techniques and ensure all are conversant with the correct and appropriate use of equipment.</p>
                <Image className="img-fluid" src={Site3} alt="" />
                
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={12}>
                <h3 className="text-primary">Performance Monitoring</h3>
                <p>At CBSS Security we value the process of performance monitoring as a tool for developing individual employees’ skills and for encouraging accountability in their roles and responsibilities. Through regular visits by our Operations Manager and communication with the Company Director, we work with personnel to clarify their roles and responsibilities, develop goals for improvement and address performance issues constructively and positively. This process ensures CBSS Security employees are well positioned to provide optimum security services to our clients, and to enjoy a high level of job satisfaction and company loyalty.</p> 
                <p>Our teams are also aware of the legal limitations of their role, and follow a clear set of procedures for intervening in dangerous situations and referring matters to police and authorities.</p>
                <h3 className="text-primary">Building Management</h3>
            <p>The building subsystems are critically managed under 24/7 supervision of skilled personnel. CBSS has been providing an Integrated Facility Management System for this warehouse, CFS, IT, School, hospital which caters to Building Management Systems in one end and managed, all building Operation, CCTV, Fire systems, etc.</p>
            <p>We also have forged strategic alliance in the security industry by joining hands with the world's leading security equipment company. We provide CCTV surveillance systems, intrusion detection systems, access control systems, fire detection systems, building management systems.</p>
            <h4 className="text-primary">RFID</h4>
            <p>Radio Frequency Identification (RFID) technology has been in existence for many decades but it is only recently that RFID is being increasingly used to its full potential. RFID or radio frequency identification is a system that transmits identity in the form of a unique serial number of a product wirelessly. RFID, a type of Auto-ID technology is used to reduce time and labor and improve real time data accuracy</p>
            <h4 className="text-primary">DFMD/HHMD</h4>
            <p>When it is concerned that you have to protect yourself from unforeseen attacks in an event, then rely on CBSS which provides various safety articles along with DFMD (Door Frame Metal Detectors). In this way, the organization is engaged to provide security machines with technical specifications having quick installable facilities. These metal door detectors are useful to establish on one door entry as well as worthy for full coverage of multizone detection having 2-8 entry doors.</p>
            <h4 className="text-primary">Walky-Talky</h4>
            <p>Citywide/Nationwide Coverage License Free Radio location through GPS Unlimited Talk Groups Private Call/ Selective Call/ Group Call In built GPS, Wifi, Blue Tooth Voice recording and playback All functions and features of Digital Mobile Radio (DMR)Ingress Protection Class IP54 and Military Standard MIL - Std 810FUnlimited Call Records Over the Air Programming Stun/ Kill/Remote Revive lost/Stolen Radio Voice encryption(Speech Secrecy) One year free replacement warranty Cloud Technology Connect via Wifi.</p>
            </Col>
           
            </Row>
          </Container>
        </div>
    </div>
  );
};

export default Training;
