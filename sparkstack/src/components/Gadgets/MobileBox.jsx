import React,{useState} from 'react'
import MobileData from './GadgetData/MobileData';
const MobileBox = () => {
    const [mobileData]=useState(MobileData);
  return (
    <>
        <h1>Mobile News</h1>
                    <hr/>
                    {
                        mobileData.map((mobile)=>{
                            return(
                                <>
                                <br />
                                    <div className="gadget-card">
                                        <div className="gadget-image">
                                            <img src={mobile.image} height={144} alt="" />
                                        </div>
                                        <div className="gadget-desc">
                                            <h4>{mobile.head}</h4>
                                            <p>{mobile.author}</p>
                                            <h5>MOBILES</h5>
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

export default MobileBox
