import React,{useState} from 'react'
import PcData from './GadgetData/PcData';

const PcBox = () => {
    const [pcData]=useState(PcData);
  return (
    <>
    <h1>Latest PC News</h1>
                <hr/>
                {
                    pcData.map((pc)=>{
                        return(
                            <>
                            <br />
                                <div className="gadget-card">
                                    <div className="gadget-image">
                                        <img src={pc.image} height={144} alt="" />
                                    </div>
                                    <div className="gadget-desc">
                                        <h4>{pc.head}</h4>
                                        <p>{pc.author}</p>
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

export default PcBox
