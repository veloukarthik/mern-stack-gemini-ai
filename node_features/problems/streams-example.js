const fs = require('fs');

const readable = fs.createReadStream('largefile.txt');
const writable = fs.createWriteStream('copy.txt');

readable.pipe(writable);
readable.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length);
});