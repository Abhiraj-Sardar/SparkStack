import React, { useState } from 'react'

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
            const result = await response.json();
            console.log(result)
            setJobs(result.data[0].company_name)
        } catch (error) {
            console.error(error);
        }
    }

    // Call the async function
    fetchData();
    return (
        <>
            <h2 class="mt-3">Job Listings</h2>
            <div id="jobsContainer">
                <h1>{jobs}</h1>
                {/* <!-- Jobs will be dynamically added here --> */}
            </div>

        </>
    )
}

export default Jobs
