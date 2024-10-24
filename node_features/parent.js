// main.js
const { Worker } = require('worker_threads');

// Function to create a new worker and calculate Fibonacci
function runWorker(number) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: number // Pass the number to the worker
    });

    // Listen for messages (results) from the worker
    worker.on('message', resolve);
    
    // Listen for errors from the worker
    worker.on('error', reject);
    
    // Listen for the worker's exit event
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

// Execute two workers in parallel
async function run() {
  console.log('Starting workers...');
  
  const result1 = runWorker(0);  // Create worker to compute Fibonacci(40)
  const result2 = runWorker(45);  // Create another worker to compute Fibonacci(45)

  const results = await Promise.all([result1, result2]);
  console.log('Results from workers:', results);
}

run();
