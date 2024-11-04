const fs = require('fs');

function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFileAsync('source.txt')
  .then(data => console.log(data))
  .catch(error => console.error(error));
 