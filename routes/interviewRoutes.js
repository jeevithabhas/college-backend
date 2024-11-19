const express = require('express');
const { scheduleInterview, getInterviews } = require('../controllers/interviewController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/schedule', auth, scheduleInterview);
router.get('/', auth, getInterviews);

module.exports = router;
