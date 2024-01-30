import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className="row container-fluid">
        <div className="col-md-11 header">
            <h1>Dashboard</h1>
            <h5>Hey Abhiraj Sardar...How was your Day?</h5>
        </div>
        <div className="col-md-1 profile">
            <div className="img">
                <img src="img/profile.jpg" height={120} width={120} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header
