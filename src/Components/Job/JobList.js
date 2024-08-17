
import React, { useState } from 'react';
import { Box, Grid, Button, HStack } from '@chakra-ui/react';
import JobCard from './JobCard';

const JobList = ({ jobs, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6; // Number of jobs per page

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Slice the jobs array for pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    return (
        <Box>
            {/* Grid layout with 2 cards per row */}
            <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%">
                {currentJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        onEdit={() => onEdit(job)}
                        onDelete={() => onDelete(job)}
                    />
                ))}
            </Grid>
            {totalPages > 1 && ( // Only show pagination if more than one page
                <HStack spacing={4} mt={4} justify="center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            colorScheme={currentPage === index + 1 ? 'teal' : 'gray'}
                        >
                            {index + 1}
                        </Button>
                    ))}
                </HStack>
            )}
        </Box>
    );
};

export default JobList;
