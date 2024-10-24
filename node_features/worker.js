// worker.js
const { parentPort, workerData } = require('worker_threads');

// Fibonacci calculation (CPU-intensive task)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Perform the task and send the result back to the main thread
const result = fibonacci(workerData);
parentPort.postMessage(result);
