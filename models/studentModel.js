const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    resume: String,
    coverLetter: String,
    applicationStatus: { type: String, default: 'Pending' }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
