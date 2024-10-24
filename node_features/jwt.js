const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Secret key for signing JWT
const SECRET_KEY = 'mysecretkey';

// Login route to issue JWT
app.post('/login', (req, res) => {
  const user = { id: 1, username: 'karthik','role':'admin' };
  
  // Generate token with user payload
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
  
  res.json({ token });
});

// Protected route, only accessible with valid JWT
app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).send('Token required');

  // Verify JWT
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).send('Invalid token');
    
    res.send(`Welcome, ${decoded.role}`);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
