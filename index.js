
const express = require('express');
require('dotenv').config();
const router = require('./routes/api');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const cron = require('node-cron');
const app = express();
app.use(express.json());
const fileUpload = require('express-fileupload');
// Enable security features xss protection
app.use(helmet());

cron.schedule('* * * * *', () => {
  // console.log('Task is running every minute');
  // You can add your task logic here, like calling a function or database operation
});

setTimeout(() => {
  // console.log('Task is running 5 seconds');
  // You can add your task logic here, like calling a function or database operation
}, 5000);

setInterval(() => {
  // console.log('Task is running every 1 seconds');
  // You can add your task logic here, like calling a function or database operation
}, 1000);

// console.log("Task is running without delay");

// Enable cors middleware
app.use(cors());
mongoose.connect(process.env.MONGO_URI).then(() => {
  // console.log('Connected to MongoDB ');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});

app.use(express.urlencoded({ extended: true }));
// Serve static files from 'views/build' directory
app.use(express.static(path.join(__dirname, 'views', 'build')));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'build', 'index.html'));
});

// Enable files upload
app.use(fileUpload({
  createParentPath: true  // Automatically create parent directories for uploaded files
}));

// Serve static files (optional)
app.use(express.static('uploads'));

// Upload route
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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