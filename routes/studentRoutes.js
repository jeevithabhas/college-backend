const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { registerStudent, getStudents } = require('../controllers/studentController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });
router.post('/register', auth, upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'coverLetter', maxCount: 1 }]), registerStudent);
router.get('/', auth, getStudents);

module.exports = router;
