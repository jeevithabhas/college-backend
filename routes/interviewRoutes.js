const express = require('express');
const { scheduleInterview, getInterviews } = require('../controllers/interviewController');
const router = express.Router();

router.post('/schedule', scheduleInterview);
router.get('/', getInterviews);

module.exports = router;
