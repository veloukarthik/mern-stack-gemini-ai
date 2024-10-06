
const express = require('express');
require('dotenv').config();
const router = require('./routes/api');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const app = express();
app.use(express.json());

// Enable security features xss protection
app.use(helmet());

// Enable cors middleware
app.use(cors());
mongoose.connect(process.env.MONGO_URI).then(() => {
  // console.log('Connected to MongoDB ');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});

// Serve static files from 'views/build' directory
app.use(express.static(path.join(__dirname, 'views', 'build')));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'build', 'index.html'));
});
app.use('/api', router);
// Catch-all route to serve index.html for client-side routing (if necessary)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'build', 'index.html'));
});




app.listen(3000, () => {
  // console.log('Server is running on port 3000');
});

// async function generateText(prompt) {
 
// }

// generateText('What is react js?');