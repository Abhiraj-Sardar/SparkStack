import React,{useState} from 'react'
import Header from '../Header/Header'
import "./Facts.css"
import FactData from './FactsData/FactData'
import Footer from '../Footer/Footer'
const Facts = () => {
  const [factData]=useState(FactData);
  return (
    <>
    <div>
      <Header />
      <div className="container-fluid facts-container">
        <div className="row">
          <div className="col-2 left-menu">
            <h2 className='text-center'>Fact Feed</h2>
            <button>Trending</button>
            <button>New</button>
            <button>Saved</button>
          </div>
          <div className="col-10 fact-videos">
            {
              factData.map((fact)=>{
                return(
                  <div className="video-container">
                    <iframe width="370" height="300"
                      src={fact.vdoUrl}>
                    </iframe>
                    <h4 className='text-center'>{fact.title}</h4>
                  </div>
                )
              })
            }
            
            
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Facts
