const Buffer = require('buffer').Buffer;

// Allocating a buffer of 10 bytes
const buffer = Buffer.alloc(10);
console.log('Empty buffer:', buffer);

// Writing data into the buffer
buffer.write('Hello');
console.log('Buffer after write:', buffer);

// Converting buffer to string
const stringData = buffer.toString('utf8', 0, 5);
console.log('String from buffer:', stringData);

// Converting buffer to JSON
const jsonBuffer = buffer.toJSON();
console.log('Buffer in JSON format:', jsonBuffer);
