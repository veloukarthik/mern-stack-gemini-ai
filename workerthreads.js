const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// A CPU-intensive task (calculating the nth Fibonacci number)
function fibonacci(n) {
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (isMainThread) {
  // In the main thread, we spawn a worker to perform the task
  console.log('Main thread:', process.pid);

  // Spawn a worker thread
  const worker = new Worker(__filename, {
    workerData: 40  // Pass the number to calculate Fibonacci for
  });

  // Listen for the result from the worker
  worker.on('message', (result) => {
    console.log(`Fibonacci result from worker: ${result}`);
  });

  // Handle worker errors
  worker.on('error', (err) => {
    console.error('Worker error:', err);
  });

  // Handle worker exit
  worker.on('exit', (code) => {
    if (code !== 0) console.error(`Worker exited with code ${code}`);
  });

} else {
  // In the worker thread, calculate Fibonacci
  console.log('Worker thread:', process.pid);
  const result = fibonacci(workerData);
  
  // Send the result back to the main thread
  parentPort.postMessage(result);
}
