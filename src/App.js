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
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/facility-management" element={<FacilityManagement />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
