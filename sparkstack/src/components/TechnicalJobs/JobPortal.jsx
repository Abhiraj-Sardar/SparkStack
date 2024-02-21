import React from 'react'
import Sidebar from './Sidebar'
import "./JobPortal.css";
import Header from '../Header/Header';
import Jobs from './Jobs';
import Footer from '../Footer/Footer';

const JobPortal = () => {
  return (
    <>
    <Header/>
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
    <Footer/>
    </>
  )
}

export default JobPortal
