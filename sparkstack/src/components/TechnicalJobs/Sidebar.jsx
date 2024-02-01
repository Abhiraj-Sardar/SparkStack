import React from 'react'
import { ChakraProvider, Button} from '@chakra-ui/react'
const Sidebar = () => {
    return (
        <>
            <h2 class="mt-3">Filter Jobs</h2>
            <form id="filterForm">
                <div class="form-group">
                    <label for="roleFilter">Job Role:</label>
                    <select class="form-control selectpicker" data-live-search="true" id="roleFilter">
                        <option value="">All</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="analyst">Analyst</option>
                        {/* <!-- Add more job roles as needed --> */}
                    </select>
                </div>
                <div class="form-group">
                    <label>Experience Level:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="entry" id="entryLevel" />
                        <label class="form-check-label" for="entryLevel">Entry Level</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="mid" id="midLevel" />
                        <label class="form-check-label" for="midLevel">Mid Level</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="senior" id="seniorLevel" />
                        <label class="form-check-label" for="seniorLevel">Senior Level</label>
                    </div>
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
