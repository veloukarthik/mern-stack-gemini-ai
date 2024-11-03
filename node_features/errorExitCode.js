// customExitCodes.js
function handleDatabaseError() {
    console.error('Database connection failed.');
    process.exit(2);  // Exit code 2 for database errors
  }
  
  function handleFileError() {
    console.error('File not found.');
    process.exit(3);  // Exit code 3 for file errors
  }
  
  // Simulate different errors
  const errorType = 'file';
  
  if (errorType === 'database') {
    handleDatabaseError();
  } else if (errorType === 'file') {
    handleFileError();
  }
  else
  {
    console.log('No error');
    process.exit(0);  // Exit code 0 for success
  }
  