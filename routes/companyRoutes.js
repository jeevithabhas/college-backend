const express = require('express');
const { createJob, getJobs } = require('../controllers/companyController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createJob);
router.get('/', auth, getJobs);

module.exports = router;
