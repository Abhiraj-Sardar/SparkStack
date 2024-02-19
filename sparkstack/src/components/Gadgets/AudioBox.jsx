import React,{useState} from 'react'
import AudioData from "./GadgetData/AudioData"
const AudioBox = () => {
  const [audioData]=useState(AudioData);
  return (
    <>
    <h1>Latest Audio News</h1>
                <hr/>
                {
                    audioData.map((audio)=>{
                        return(
                            <>
                            <br />
                                <div className="gadget-card">
                                    <div className="gadget-image">
                                        <img src={audio.image} height={144} alt="" />
                                    </div>
                                    <div className="gadget-desc">
                                        <h4>{audio.head}</h4>
                                        <p>{audio.author}</p>
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

export default AudioBox
