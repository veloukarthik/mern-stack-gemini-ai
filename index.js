
const express = require('express');
require('dotenv').config();
const router = require('./routes/api');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});



app.use('/api', router);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// async function generateText(prompt) {
 
// }

// generateText('What is react js?');