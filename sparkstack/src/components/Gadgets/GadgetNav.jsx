import React from 'react'
import { NavLink } from "react-router-dom";
import "./GadgetNav.css"
const GadgetNav = () => {
    return (
            <div className="gadget-navbar">
                <NavLink to={"/Gadgets/Mobiles"}><button className='gadget-btn btn btn-secondary'>MOBILES </button></NavLink>
                <NavLink to={"/Gadgets/PC"}><button className='gadget-btn btn btn-secondary'>PC</button></NavLink>
                <NavLink to={"/Gadgets/Laptop"}><button className='gadget-btn btn btn-secondary'>LAPTOP</button></NavLink>
                <NavLink to={"/Gadgets/Audio"}><button className='gadget-btn btn btn-secondary'>AUDIO</button></NavLink>
                <NavLink to={"/Gadgets/Tablets"}><button className='gadget-btn btn btn-secondary'>TABLETS</button></NavLink>
                <NavLink to={"/Gadgets/Wearables"}><button className='gadget-btn btn btn-secondary'>WEARABLES</button></NavLink>
            </div>
    )
}

export default GadgetNav
