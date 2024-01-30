import React from "react";
import "./Dashboard.css";
import Home from "./Home";
import AI from "./AI";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Web from "./Web";
import SDE from "./SDE";
import TechGiants from "./TechGiants";
const Dashboard = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/default" element={<Home/>}></Route>
                    <Route exact path="/AI" element={<AI/>}></Route>
                    <Route exact path="/Web" element={<Web/>}></Route>
                    <Route exact path="/Sde" element={<SDE/>}></Route>
                    <Route exact path="/Tgiants" element={<TechGiants/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Dashboard;