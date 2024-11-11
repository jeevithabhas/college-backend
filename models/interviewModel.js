const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }
});

const Interview = mongoose.model('Interview', interviewSchema);
module.exports = Interview;
