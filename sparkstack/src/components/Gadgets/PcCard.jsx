import React,{useState} from 'react'
import Header from '../Header/Header';
import GadgetNav from './GadgetNav';
import MobileData from './GadgetData/MobileData';
import PcBox from './PcBox';

const PcCard = () => {
    const [mobileData]=useState(MobileData);
  return (
    <>
        <Header/>
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8 mt-2 mb-2">
                    <GadgetNav/>
                </div>
                <div className="col-2">

                </div>
            </div>
           
            <div className="card-container row">
                <div className="left-side col-2">
                    <h4>TRENDING</h4>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
                        <div className="image-data">
                            Xiaomi 14 Ultra Launch Date Tipped, Camera Specifications Surface Online
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
                        <div className="image-data">
                            Xiaomi 14 Ultra Launch Date Tipped, Camera Specifications Surface Online
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
                        <div className="image-data">
                            Xiaomi 14 Ultra Launch Date Tipped, Camera Specifications Surface Online
                        </div>
                    </div>
                    
                </div>


                <div className="center-side col-8">
                    
                    <PcBox/>
                    
                </div>


                <div className="right-side col-2">
                <h4>TRENDING</h4>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
                        <div className="image-data">
                            Xiaomi 14 Ultra Launch Date Tipped, Camera Specifications Surface Online
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
                        <div className="image-data">
                            Xiaomi 14 Ultra Launch Date Tipped, Camera Specifications Surface Online
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
                        <div className="image-data">
                            Xiaomi 14 Ultra Launch Date Tipped, Camera Specifications Surface Online
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default PcCard
