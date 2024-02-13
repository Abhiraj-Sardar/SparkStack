import './App.css';
import JobPortal from './components/TechnicalJobs/JobPortal';
import WikiPedia from './components/Wikipedia/WikiPedia';
// import Dashboard from './Admin/Dashboard/Dashboard';
import Byto from "./components/Byto/Byto"
import Header from './components/Header/Header';
import MobileCard from "./components/Gadgets/MobileCard";
// import Article from './components/Article/Article';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Feature from './components/Article/Feature';
import Facts from './components/Facts/Facts';

function App() {
  return (
        <BrowserRouter>
          <Routes>

            <Route exact path="/" element={<><Header/><Home/></>}></Route>
            <Route exact path="/Byto" element={<Byto/>}></Route>
            <Route exact path="/WikiPedia" element={<WikiPedia/>}></Route>
            <Route exact path="/TechJobs" element={<JobPortal/>}></Route>
            <Route exact path="/Gadgets" element={<MobileCard/>}></Route>
            <Route exact path="/Articles" element={<Feature/>}></Route>
            <Route exact path="/Facts" element={<Facts/>}></Route>
          </Routes>
        </BrowserRouter> 
  );
}

export default App;
