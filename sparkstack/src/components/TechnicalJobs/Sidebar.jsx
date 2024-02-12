import React,{useState} from 'react'
import { ChakraProvider, Button} from '@chakra-ui/react'
import SidebarData from './Data/SidebarData';
import CompanyData from './Data/CompanyData';
import JobtypeData from './Data/JobtypeData';
const Sidebar = () => {
    const [jobs]=useState(SidebarData);
    const [company]=useState(CompanyData);
    const [jobtype]=useState(JobtypeData);
    return (
        <>
            <h2 class="mt-3">Filter Jobs</h2>
            <form id="filterForm">
                <div class="form-group">
                <select class="form-control selectpicker" data-live-search="true" id="roleFilter">
                    <label for="roleFilter">Job Role:</label>
                    {
                        jobs.map((jobs,i)=>{
                            return(
                                // console.log(jobs[i].job)
                                <option>{jobs.job}</option>
                            )
                        })
                    }
                    </select>
                </div>
                <div class="form-group">
                    <label>Job Type:</label>
                    {
                        jobtype.map((jobtype)=>{
                            return(
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="entry" id="entryLevel" />
                                <label class="form-check-label" for="entryLevel">{jobtype.type}</label>
                                </div>
                            )
                        })
                    }
                </div>

                <div class="form-group">
                    <label>Company:</label>
                    {
                        company.map((company)=>{
                            return(
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="entry" id="entryLevel" />
                                    <label class="form-check-label" for="entryLevel">{company.name}</label>
                                </div>
                            )
                        })
                    }
                    
                    
                </div>


                <ChakraProvider>



                    <Button colorScheme='pink' variant='solid' onclick="filterJobs()">
                    Apply Filters
                    </Button>
                </ChakraProvider>
               
            </form>
        </>
    )
}

export default Sidebar
