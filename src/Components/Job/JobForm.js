
import React, { useState } from 'react';
import { Box, Input, Button, Textarea, Stack, Select } from '@chakra-ui/react';

const categories = [
    'Engineering',
    'Marketing',
    'Design',
    'Product Management',
    'Sales',
    'Customer Support',
    'Data Science',
    'Human Resources',
];

const locations = [
    'New York',
    'San Francisco',
    'Los Angeles',
    'Chicago',
    'Seattle',
    'Austin',
    'Remote',
];

const JobForm = ({ onCancel, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('Full-time'); // Default type
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [category, setCategory] = useState('');
    const [requirements, setRequirements] = useState('');

    const handleSubmit = () => {
        if (title && description && location && salary && category && requirements) {
            const newJob = {
                id: Date.now(), // Simple unique ID
                title,
                description,
                type,
                location,
                salary,
                category,
                requirements,
            };
            onSubmit(newJob);
            // Reset form fields after submission (optional)
            setTitle('');
            setDescription('');
            setType('Full-time');
            setLocation('');
            setSalary('');
            setCategory('');
            setRequirements('');
        }
    };

    return (
        <Box p={4} borderWidth={1} borderRadius="md">
            <Stack spacing={3}>
                <Input
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Select
                    placeholder="Select job type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                </Select>
                <Select
                    placeholder="Select location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    {locations.map((loc) => (
                        <option key={loc} value={loc}>
                            {loc}
                        </option>
                    ))}
                </Select>
                <Input
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <Select
                    placeholder="Select category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </Select>
                <Textarea
                    placeholder="Requirements"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                />
                <Button colorScheme="teal" onClick={handleSubmit}>
                    Post Job
                </Button>
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
            </Stack>
        </Box>
    );
};

export default JobForm;
