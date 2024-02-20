import React from 'react'
import { NavLink } from 'react-router-dom';
import "./AdminSidebar.css"
const AdminSidebar = () => {
  return (
    <>

            <div className="sydbar">

                <h3>Administrator</h3>
                <nav>
                    <ul>
                        <li><NavLink to={'/Admin'} className={'name'}>Dashboard</NavLink></li>
                        <li><NavLink to={'/Admin/AI'} className={'name'}>AI</NavLink></li>
                        <li><NavLink to={'/Admin/Web'} className={'name'}>Web Development</NavLink></li>
                        <li><NavLink to={"/Admin/Sde"} className={"name"}>SDE</NavLink></li>
                        <li><NavLink to={"/Admin/Tgiants"} className={"name"}>Tech Giants</NavLink></li>
                        <li><NavLink to={"/Admin/TechJobs"} className={"name"}>Technical Jobs</NavLink></li>
                        <li><NavLink to={"/Admin/Mobile"} className={"name"}>Mobile and Accessories</NavLink></li>
                        <li><NavLink to={"/Admin/Facts"} className={"name"}>Facts</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
  )
}

export default AdminSidebar
