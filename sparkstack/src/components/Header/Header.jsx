import React from "react";
import './Header.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="sticky-top navbar navbar-expand-lg navbar-light navbar-custom">
                <div className="container responsive-menu">
                

                <div className="d-flex align-items-center mr-3">
                            <img src="logo1.png" className="logo img-fluid" alt="Logo" />
                            <span className="heading">SparkStack</span>
                        </div>
                        
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        

                        <ul className="navbar-nav ml-auto mx-auto my-2 my-lg-0">

                            <li className="nav-item dropdown">
                            <NavLink to={'/'} className={"navigation"}>Home</NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                   <NavLink to={'/Home/AI'} className={"navigation"}>AI</NavLink>
                                   <NavLink to={'/Home/WebDev'} className={"navigation"}>Web Development</NavLink>
                                   <NavLink to={'/Home/SDE'} className={"navigation"}>SDE</NavLink>
                                   <NavLink to={'/Home/TechGiants'} className={"navigation"}>Tech Giants</NavLink>
                                </div>
                            </li>

                            <li className="nav-item"><NavLink to={'/Articles'} className={"navigation"}>Article</NavLink></li>
                            <li className="nav-item"><NavLink to={'/TechJobs'} className={"navigation"}>Tech Jobs</NavLink></li>
                            <li className="nav-item"><NavLink to={'/Facts'} className={"navigation"}>Facts</NavLink></li>
                            <li className="nav-item"><NavLink to={'/Gadgets'} className={"navigation"}>Gadgets</NavLink></li>                
                            <li className="nav-item"><NavLink to={'/Byto'} className={"navigation"}>Byto</NavLink></li>
                            <li className="nav-item"><NavLink to={'/WikiPedia'} className={"navigation"}>Wikipedia</NavLink></li>
                        </ul>
                        <FontAwesomeIcon icon={faPowerOff} style={{color: "#ffffff", cursor:'pointer', border:'1px solid white', padding:'5px', borderRadius: '15px', height:'20px'}} />
                    
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;