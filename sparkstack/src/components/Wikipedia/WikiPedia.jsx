import React from 'react'
import "./WikiPedia.css"
import Search from './Search'
import './Search.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const WikiPedia = () => {
    return (
        <>
        <Header/>
        <div className="container-fluid main">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='grow'>WikiSearch</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="column col-12">
                        <Search/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}

export default WikiPedia
