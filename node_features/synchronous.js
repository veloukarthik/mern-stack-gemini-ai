
const fs = require('fs');

// Synchronous file read
try {
  const data = fs.readFileSync('largefile.txt', 'utf8');
  console.log('File contents:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

// Synchronous file write
try {
  fs.writeFileSync('output.txt', 'Hello World!', 'utf8');
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}

// Synchronous directory operations
try {
  // Create directory
  fs.mkdirSync('new-directory');
  console.log('Directory created');

  // Read directory contents
  const files = fs.readdirSync('new-directory');
  console.log('Directory contents:', files);

  // Check if file exists
  const exists = fs.existsSync('output.txt');
  console.log('File exists:', exists);

  // Get file information
  const stats = fs.statSync('output.txt');
  console.log('File size:', stats.size);
  console.log('Is directory?', stats.isDirectory());
  console.log('Is file?', stats.isFile());
} catch (err) {
  console.error('Error in directory operations:', err);
}
