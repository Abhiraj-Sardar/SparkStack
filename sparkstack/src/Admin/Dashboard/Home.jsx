import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Cards from './Cards'

const Home = () => {
  return (
    <div className="row">
        <div className="col-2">
         <Sidebar/>
        </div>
    
    <div className="col-10">
        <Header/>
        <Cards/>
    </div>
    </div>
  )
}

export default Home
