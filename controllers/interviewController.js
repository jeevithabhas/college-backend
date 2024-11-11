const Interview = require('../models/interviewModel');
const Student = require('../models/studentModel');
const sendEmail = require('../utils/sendEmail');

const scheduleInterview = async (req, res) => {
    const { studentId, date, time } = req.body;
    const interview = new Interview({ studentId, date, time });
    await interview.save();

    const student = await Student.findById(studentId);
    const emailOptions = {
        email: student.email,
        subject: 'Interview Scheduled',
        message: `Dear ${student.name}, your interview is scheduled on ${date} at ${time}.`
    };
    await sendEmail(emailOptions);

    res.status(201).json(interview);
};

const getInterviews = async (req, res) => {
    const interviews = await Interview.find().populate('studentId');
    res.json(interviews);
};

module.exports = { scheduleInterview, getInterviews };
