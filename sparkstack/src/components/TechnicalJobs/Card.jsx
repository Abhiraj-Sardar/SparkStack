import React from 'react'
import "./Card.css";
const Card = () => {
    return (
        <div class="jobcard">
            <div class="jobcard-body">
                <h5 class="company-name">card title</h5>
                <div className="role">SDE</div>
            <div className="create">
                <div className="created-at badge badge-pill badge-success">created at : 123</div>
            </div>
            <div className="location"> Location : Delhi</div>
            <div className="job-type"> Job Type : intern</div>
            <div className="tags badge badge-pill badge-secondary">#tag</div>
            <br />
            <center>
            <button className='btn btn-success'>Apply</button>
            </center>
            
            </div>
        </div>
    )
}

export default Card
