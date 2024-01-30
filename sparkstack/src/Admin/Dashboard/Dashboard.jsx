import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
const Dashboard = ()=>{
    return(
        <>
        <div className="row">
            <div className="col-2">
            <Sidebar/>
            </div>
            <div className="col-10">
                <Header/>
                <Cards/>
            </div>
        </div>
        
        </>
    )
}

export default Dashboard;