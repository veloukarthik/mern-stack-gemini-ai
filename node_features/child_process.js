const { spawn } = require('child_process');

// Spawn a child process to run the 'ls' command
const ls = spawn('ls', ['-lh', '/Users/mac/']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
 