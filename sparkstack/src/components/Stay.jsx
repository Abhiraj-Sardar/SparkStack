import React from "react";
import "./Stay.css";
const Stay = () =>{
    return(
        <>
        <div class="container-fluid cnt col-12">
                <h1>Stay Tuned</h1>
                <p>Subscribe to our latest newsletter and never miss the latest news!<br></br>
                Our newsletter is sent once a week, every Monday!</p>
                <form>
                    <input type="email" placeholder="Your email address" class="col-6 col-md-8 col-sm-6" required></input>
                    <input type="Submit" value={'SUBSCRIBE'}></input><br></br>
            
                    <input type="checkbox"></input>
                    <label>I have read and accept the Privacy Policy</label>
                </form>
            </div>
        </>
    )
}

export default Stay;