import React, { useState } from 'react'
import Card from './Card';

import "./Jobs.css";
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
         async function fetchData() {
            const url = 'https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api';
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '11f7277c93mshae1c3d675344ffbp18a342jsn2c53e95e559c',
                    'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result =  await response.json();
                console.log(result)
                setJobs(result);
                console.log(jobs)
            } catch (error) {
                console.error("hello"+error);
            }
        }
    
        // Call the async function
        fetchData();
    
    return (
        <>
            <h2 class="mt-1">Job Listings</h2>
            {/* <h1>{jobs.data.company_name}</h1> */}
            
            <div id="jobsContainer">
                {/* <!-- Jobs will be dynamically added here --> */}
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

export default Jobs
