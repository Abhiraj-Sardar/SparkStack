import React from 'react'
import "./WikiPedia.css"
import Search from './Search'
import './Search.css'
const WikiPedia = () => {
    var Theme = () => {
        var mainElement = document.querySelector(".main");
        mainElement.style.backgroundColor = "#eee";            
    };
    return (
        <div className="container-fluid main">
            <div className="theme-changer">
                <div className="theme" onClick={Theme()}></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='grow'>WikiSearch</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Search/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default WikiPedia
