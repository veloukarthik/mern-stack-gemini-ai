// errorHandlingExit.js

const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  try {
    let data = await fetchData();
    return res.send(data);
    // console.log('Data:', data);
} catch (error) {
    console.error('Error fetching data:', error.message);
    return res.status(500).send(error.message);
}
});



app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => console.log('Server running on port 3000'));


// try {
//     throw new Error('Simulated Error');
//   } catch (error) {
//     console.error('Caught an error:', error.message);
  
//     // Exit with code 1 to indicate failure
//     process.exit(1);
//   }
  