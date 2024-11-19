const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', (req, res, next) => {
  console.log('Signup route hit');
  next();
}, signup);

router.post('/login', (req, res, next) => {
  console.log('Login route hit');
  next();
}, login);

module.exports = router;
