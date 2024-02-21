import React from 'react'
import "./Card.css";
const Card = (props) => {
    return (
        <div class="jobcard">
            <div class="jobcard-body">
                <div class="company-name">
                    <img src={props.pic} alt="card img"/> 
                    <span>{props.company}</span>
                </div>
                <div className="role">{props.role}</div>
               <br/> 
            <div className="create">
                <div className="created-at badge badge-pill badge-success">created at : {props.created}</div>
            </div>
            <div className="location"> Location : {props.location}</div>
            <div className="job-type"> Job Type : {props.jobtype}</div>
            {(props.tag).map((element,i) => {
                return(
                    <div className="tags badge badge-pill badge-secondary">{element}</div>
                )
            })}
            <br />
            <center>
            <button className='btn btn-success'>Apply</button>
            </center>
            
            </div>
        </div>
    )
}

export default Card
