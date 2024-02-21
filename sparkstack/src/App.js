import './App.css';
import JobPortal from './components/TechnicalJobs/JobPortal';
import WikiPedia from './components/Wikipedia/WikiPedia';
import Dashboard from './Admin/Dashboard/Dashboard';
import Byto from "./components/Byto/Byto"
import Header from './components/Header/Header';
import MobileCard from "./components/Gadgets/MobileCard";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Feature from './components/Article/Feature';
import Facts from './components/Facts/Facts';
import AI from './components/Home/AI/AI';
import WebDev from './components/Home/WebDev/WebDev';
import SDE from './components/Home/SDE/SDE';
import TechGiants from './components/Home/TechGiants/TechGiants';
import PcCard from './components/Gadgets/PcCard';
import LaptopCard from './components/Gadgets/LaptopCard';
import AudioCard from './components/Gadgets/AudioCard';
import TabletCard from './components/Gadgets/TabletCard';
import WearableCard from './components/Gadgets/WearableCard';
import Web from './Admin/Dashboard/Web';
import TechJobs from './Admin/Dashboard/TechJobs';
import AdminAi from './Admin/Dashboard/AdminAi';
import AdminSDE from './Admin/Dashboard/AdminSDE';
import AdminTechgiants from './Admin/Dashboard/AdminTechgiants';
import AdminFacts from "./Admin/Dashboard/AdminFacts";
import Mobile from './Admin/Dashboard/Mobile';
import Footer from './components/Footer/Footer';
function App() {
  return (
        <BrowserRouter>
          <Routes>
            
            <Route exact path="/" element={<><Header/><Home/></>}></Route>
            <Route exact path="/Home/AI" element={<><Header/><AI/></>}></Route>
            <Route exact path="/Home/WebDev" element={<><Header/><WebDev/></>}></Route>
            <Route exact path="/Home/SDE" element={<><Header/><SDE/></>}></Route>
            <Route exact path="/Home/TechGiants" element={<><Header/><TechGiants/></>}></Route>
            <Route exact path="/Byto" element={<Byto/>}></Route>
            <Route exact path="/WikiPedia" element={<WikiPedia/>}></Route>
            <Route exact path="/TechJobs" element={<JobPortal/>}></Route>
            <Route exact path="/Gadgets" element={<><MobileCard/><Footer/></>}></Route>
            <Route exact path="/Articles" element={<Feature/>}></Route>
            <Route exact path="/Facts" element={<Facts/>}></Route>

            <Route exact path="/Gadgets/Mobiles" element={<><MobileCard/><Footer/></>}></Route>
            <Route exact path="/Gadgets/PC" element={<><PcCard/><Footer/></>}></Route>
            <Route exact path="/Gadgets/Laptop" element={<><LaptopCard/><Footer/></>}></Route>
            <Route exact path="/Gadgets/Audio" element={<><AudioCard/><Footer/></>}></Route>
            <Route exact path="/Gadgets/Tablets" element={<><TabletCard/><Footer/></>}></Route>
            <Route exact path="/Gadgets/Wearables" element={<><WearableCard/><Footer/></>}></Route>

            {/* <Route exact path="/Admin" element={<Dashboard/>}></Route> */}
            <Route exact path="/Admin" element={<Dashboard/>}></Route>
            <Route exact path="/Admin/AI" element={<AdminAi/>}></Route>
            <Route exact path="/Admin/Web" element={<Web/>}></Route>
            <Route exact path="/Admin/Sde" element={<AdminSDE/>}></Route>
            <Route exact path="/Admin/Tgiants" element={<AdminTechgiants/>}></Route>
            <Route exact path="/Admin/TechJobs" element={<TechJobs/>}></Route>
            <Route exact path="/Admin/Mobile" element={<Mobile/>}></Route>
            <Route exact path="/Admin/Facts" element={<AdminFacts/>}></Route>
          </Routes>
        </BrowserRouter> 
  );
}

export default App;
