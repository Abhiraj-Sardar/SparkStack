import React,{useState} from 'react'
import LaptopData from './GadgetData/LaptopData'
const LaptopBox = () => {
    const [laptopData]=useState(LaptopData)
  return (
    <>
    <h1>Latest Laptop News</h1>
                <hr/>
                {
                    laptopData.map((laptop)=>{
                        return(
                            <>
                            <br />
                                <div className="gadget-card">
                                    <div className="gadget-image">
                                        <img src={laptop.image} height={144} alt="" />
                                    </div>
                                    <div className="gadget-desc">
                                        <h4>{laptop.head}</h4>
                                        <p>{laptop.author}</p>
                                        <h5>PC/LAPTOP</h5>
                                    </div>
                                </div>
                                <br />
                                <hr />
                            </>
                        )
                    })
                }
</>
  )
}

export default LaptopBox
