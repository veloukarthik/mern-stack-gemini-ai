const fs = require('fs');

function copyFile(source, destination) {
  fs.readFile(source, 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile(destination, data, (err) => {
      if (err) throw err;
      console.log('File copied successfully');
    });
  });
}

copyFile('source.txt', 'destination.txt');
