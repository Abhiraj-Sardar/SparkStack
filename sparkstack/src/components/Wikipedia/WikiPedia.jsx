import React,{useState} from 'react'
import "./WikiPedia.css"
import Search from './Search'
import './Search.css'

const WikiPedia = () => {
    const [counter,setCounter]=useState(1);
    return (
        <div className="container-fluid main">
            <div className="theme-changer">
                <div className="theme" onClick={()=>{
                    var main=document.querySelector(".main");
                    if(counter%2!==0)
                    {
                        main.style.backgroundColor="#333";
                        document.querySelector(".searchbar").style.color="#fff"; 
                        setCounter(counter+1)
                    }
                    else{
                        main.style.backgroundColor="#F8F4EC"
                        document.querySelector(".searchbar").style.color="#333";
                        setCounter(counter+1)
                    }
                }}></div>
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
