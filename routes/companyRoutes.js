const express = require('express');
const { createJob, getJobs } = require('../controllers/companyController');
const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);

module.exports = router;
