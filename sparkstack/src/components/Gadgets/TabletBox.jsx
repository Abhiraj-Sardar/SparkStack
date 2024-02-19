import React,{useState} from 'react'
import TabletData from "./GadgetData/TabletData";
const TabletBox = () => {
    const [tabletData]=useState(TabletData);
  return (
    <>
    <h1>Latest Tablet News</h1>
                <hr/>
                {
                    tabletData.map((tablet)=>{
                        return(
                            <>
                            <br />
                                <div className="gadget-card">
                                    <div className="gadget-image">
                                        <img src={tablet.image} height={144} alt="" />
                                    </div>
                                    <div className="gadget-desc">
                                        <h4>{tablet.head}</h4>
                                        <p>{tablet.author}</p>
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

export default TabletBox
