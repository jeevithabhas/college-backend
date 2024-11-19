const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Signup request received');
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    console.log('User created successfully');
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log('Error creating user:', error);
    res.status(400).json({ message: 'Error creating user', error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received');
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'User not found' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log('Invalid password');
      return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('User logged in successfully');
    res.header('auth-token', token).json({ token });
  } catch (error) {
    console.log('Error logging in:', error);
    res.status(400).json({ message: 'Error logging in', error });
  }
};

module.exports = { signup, login };
