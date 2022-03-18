import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Includes/Footer";
import "./App.scss";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import TopMenubar from "./Components/Includes/TopMenubar";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import SecurityServices from "./Components/Services/SecurityServices";
import Training from "./Components/Services/Training";
import FacilityManagement from "./Components/Services/FacilityManagement";
import Official from "./Components/SecurityServices/Official";
import Residential from "./Components/SecurityServices/Residential";
import BodyGaurd from "./Components/SecurityServices/BodyGaurd";
import Education from "./Components/SecurityServices/Education";
import Hospital from "./Components/SecurityServices/Hospital";
import DogSquad from "./Components/SecurityServices/DogSquad";
import WarehouseSecurity from "./Components/SecurityServices/WarehouseSecurity";
import SiteMonitoring from "./Components/TrainingServices/SiteMonitoring";
import StaffManagement from "./Components/TrainingServices/StaffManagement";
import HealthSaftey from "./Components/TrainingServices/HealthSaftey";
import Event from "./Components/FacilityManagement/Event";
import Escort from "./Components/FacilityManagement/Escort";
import Safety from "./Components/FacilityManagement/Safety";
import Banking from "./Components/FacilityManagement/Banking";
import Logistics from "./Components/FacilityManagement/Logistics";
import Crime from "./Components/FacilityManagement/Crime";
import ValueAddedServices from "./Components/FacilityManagement/ValueAddedServices";

function App() {
  return (
    <div>
      <Router>
        <TopMenubar />
        <Routes>
          <Route path="/carbon-black-security-services" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services/security" element={<SecurityServices />} />          
          <Route path="/security-services/official" element={<Official />} />         
          <Route path="/security-services/residential" element={<Residential />} />  
          <Route path="/security-services/body-gaurd" element={<BodyGaurd />} /> 
          <Route path="/security-services/education" element={<Education />} /> 
          <Route path="/security-services/hospital" element={<Hospital />} /> 
          <Route path="/security-services/dog-squad" element={<DogSquad />} />           
          <Route path="/security-services/warehouse" element={<WarehouseSecurity />} /> 
          <Route path="/services/training" element={<Training />} />
          <Route path="/training-services/site-monitoring" element={<SiteMonitoring />} />
          <Route path="/training-services/staff-managment" element={<StaffManagement />} />
          <Route path="/training-services/health-safety" element={<HealthSaftey />} />
          <Route path="/services/facility-management" element={<FacilityManagement />} />
          <Route path="/facility-management/event" element={<Event />} />
          <Route path="/facility-management/escort" element={<Escort />} />
          <Route path="/facility-management/safety" element={<Safety />} />
          <Route path="/facility-management/banking" element={<Banking />} />
          <Route path="/facility-management/logistics" element={<Logistics />} />
          <Route path="/facility-management/crime" element={<Crime />} />
          <Route path="/facility-management/value-added-services" element={<ValueAddedServices />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
