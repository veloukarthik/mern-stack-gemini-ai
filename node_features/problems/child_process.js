const { exec } = require('child_process');

exec('ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Standard Error: ${stderr}`);
    return;
  }
  console.log(`Command Output:\n${stdout}`);
});
