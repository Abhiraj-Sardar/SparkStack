import React from 'react'
import Sidebar from './Sidebar'
import "./JobPortal.css";
import Jobs from './Jobs';

const JobPortal = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div class="col-md-2" id="sidebar">
                <Sidebar/>
            </div>
            <div class="col-md-10" id="job-list">
                <Jobs/>
            </div>
        </div>
    </div>
  )
}

export default JobPortal
