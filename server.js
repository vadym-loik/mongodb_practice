// server.js
const express = require('express');
const mongoose = require('./database'); 
const User = require('./models/User'); 

const app = express();
const PORT = 3000;

// Middleware 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

// User registration endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const newUser = new User({ username, password, email });
    await newUser.save();
    res.status(201).json({ message: 'User is registered.' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'User registration error!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is connected on PORT: ${PORT}`);
});