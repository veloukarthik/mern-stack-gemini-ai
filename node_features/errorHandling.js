// errorHandlingExit.js
try {
    throw new Error('Simulated Error');
  } catch (error) {
    console.error('Caught an error:', error.message);
  
    // Exit with code 1 to indicate failure
    process.exit(1);
  }
  