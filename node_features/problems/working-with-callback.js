const fs = require('fs');


// Read a file and print its contents

function readFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

readFile('source.txt', (err, content) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', content);
  }
});