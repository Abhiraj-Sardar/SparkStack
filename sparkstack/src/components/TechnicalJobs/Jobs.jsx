import React,{useState} from 'react'
import Card from './Card';

import "./Jobs.css";
import JobData from './Data/JobData';
const Jobs = () => {
    const [jobData] = useState(JobData);
    return (
        <>
            <h2 class="mt-1">Job Listings</h2>
            <div id="jobsContainer">
                {
                    jobData.map((jobData)=>{
                        return(
                            <Card company={jobData.company} pic={jobData.image} created={jobData.created} role={jobData.role} location={jobData.location} jobtype={jobData.jobtype} tag={jobData.tag}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Jobs
