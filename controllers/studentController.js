const Student = require('../models/studentModel');

const registerStudent = async (req, res) => {
  const { name, email } = req.body;
  const resume = req.files['resume'] ? req.files['resume'][0].path : "";
  const coverLetter = req.files['coverLetter'] ? req.files['coverLetter'][0].path : "";

  const newStudent = new Student({ name, email, resume, coverLetter });
  try {
    await newStudent.save();
    res.status(201).json({ studentId: newStudent._id, name: newStudent.name });
  } catch (error) {
    console.error("Error registering student:", error);
    res.status(400).json({ message: "Error registering student", error });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find({}, 'name email');
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(400).json({ message: "Error fetching students", error });
  }
};

module.exports = { registerStudent, getStudents };
