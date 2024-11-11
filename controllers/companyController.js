const Company = require('../models/companyModel');

const createJob = async (req, res) => {
    try {
        const { name, jobTitle, description, requirements } = req.body;
        const newJob = new Company({ name, jobTitle, description, requirements });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(400).json({ message: error.message });
    }
};

const getJobs = async (req, res) => {
    try {
        const jobs = await Company.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createJob, getJobs };
