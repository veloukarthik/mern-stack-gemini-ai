const fs = require('fs');

// Creating a readable stream to read a large file
const readableStream = fs.createReadStream('largefile.txt', {
  encoding: 'utf8',
  highWaterMark: 16 * 1024 // 16KB buffer size
});

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('File reading completed.');
});
