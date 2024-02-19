import React,{useState} from 'react'
import WearableData from "./GadgetData/WearableData";
const WearableBox = () => {
    const [wearableData]=useState(WearableData);
  return (
    <>
    <h1>Latest Wearable News</h1>
                <hr/>
                {
                    wearableData.map((wearable)=>{
                        return(
                            <>
                            <br />
                                <div className="gadget-card">
                                    <div className="gadget-image">
                                        <img src={wearable.image} height={144} alt="" />
                                    </div>
                                    <div className="gadget-desc">
                                        <h4>{wearable.head}</h4>
                                        <p>{wearable.author}</p>
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

export default WearableBox
