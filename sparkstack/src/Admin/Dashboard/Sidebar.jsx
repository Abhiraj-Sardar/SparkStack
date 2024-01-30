import React from "react";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <>

            <div className="sydbar">

                <h3>Administrator</h3>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li><NavLink to={'/AI'} className={'name'}>AI</NavLink></li>
                        <li><NavLink to={'/Web'} className={'name'}>Web Development</NavLink></li>
                        {/* <li><NavLink to={"/AI"} className={"name"}>SDE</NavLink></li>
                        <li><NavLink to={"/AI"} className={"name"}>Tech Giants</NavLink></li>
                        <li><NavLink to={"/AI"} className={"name"}>Technical Jobs</NavLink></li>
                        <li><NavLink to={"/AI"} className={"name"}>Mobile and Accessories</NavLink></li>
                        <li><NavLink to={"/AI"} className={"name"}>Tech Jobs</NavLink></li>
                        <li><NavLink to={"/AI"} className={"name"}>Facts</NavLink></li> */}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;