import { Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Layout from "./Layout";
import Home from "./pages/Home";
import CareerPage from "./pages/Career/CareerPage";
import CareerDescription from "./pages/Career/CareerDescription";
import CareerDescrip from "./pages/Career/CareerDescrip";
import Contact from "./pages/Contact";
import SoftwareServices from "./pages/services/SoftwareServices";
import HardwareServices from "./pages/services/HardwareServices";
import MediaServices from "./pages/services/MediaServices";
import CustomApp from "./pages/services/SoftwareServices/CustomApp";
import WebApp from "./pages/services/SoftwareServices/WebApp";
import MobileApp from "./pages/services/SoftwareServices/MobileApp";
import AllProduct from "./Component/AllProduct";
import PropertyManagementSoftware from "./pages/Products/PropertyManagementSoftware";
import PropertyCRMTool from "./pages/Products/PropertyCRMTool";
import PropertyBrokerManagement from "./pages/Products/PropertyBrokerManagement";
import WorkOrderManagement from "./pages/Products/WorkOrderManagement";
import InventoryManagement from "./pages/Products/InventoryManagement";
import MaidServiceManagement from "./pages/Products/MaidServiceManagement";
import CentralisedDocumentManagement from "./pages/Products/CentralisedDocumentManagement";
import ElectronicServiceCenterManagement from "./pages/Products/ElectronicServiceCenterManagement";
import AutogarageServiceCenterManagement from "./pages/Products/AutogarageServiceCenterManagement"; 
import SEO from "./pages/services/MediaServices/SEO";
import Server from "./pages/services/HardwareServices/Server";
import Biometric from "./pages/services/HardwareServices/Biometric";
import CCTV from "./pages/services/HardwareServices/CCTV";
import Brochure from "./pages/services/MediaServices/Brochure";
import WebServices from "./pages/services/MediaServices/WebServices";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="all-product" element={< AllProduct />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="career/1" element={<CareerDescription />} />
          <Route path="career/2" element={<CareerDescrip />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/software-services" element={<SoftwareServices />} />
          <Route path="/hardware-services" element={<HardwareServices />} />
          <Route path="/media-services" element={<MediaServices />} />
          <Route path="/software-services/custom-desktop-app" element={<CustomApp />} />
          <Route path="/software-services/web-applications" element={<WebApp />} />
          <Route path="/software-services/mobile-applications" element={<MobileApp />} />
          <Route path="/property-management" element={<PropertyManagementSoftware />} />
          <Route path="/property-crm" element={<PropertyCRMTool/>} />
          <Route path="/property-broker" element={ <PropertyBrokerManagement/>} />
          <Route path="/work-order" element={<WorkOrderManagement/>} />
          <Route path="/inventory-management" element={<InventoryManagement/>} />
          <Route path="/maid-service" element={<MaidServiceManagement/>} />
          <Route path="/electronic-service" element={<ElectronicServiceCenterManagement/>} />
          <Route path="/centralised-document" element={<CentralisedDocumentManagement/>} />
          <Route path="/auto-garage" element={<AutogarageServiceCenterManagement/>} />
          <Route path="/hardware-services/server" element={<Server/>} />
          <Route path="/hardware-services/biometric" element={<Biometric/>} />
          <Route path="/hardware-services/cctv" element={<CCTV/>} />
          <Route path="/media-services/seo" element={<SEO/>} />
          <Route path="/media-services/brochure" element={<Brochure/>} />
          <Route path="/media-services/webServices" element={<WebServices/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
