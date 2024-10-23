const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // This block is executed in the main thread
  console.log("Main thread: Starting worker thread...");

  // Create a new worker thread and pass data to it
  const worker = new Worker(__filename, { workerData: { num: 10 } });

  // Listen for messages from the worker
  worker.on('message', (result) => {
    console.log(`Main thread: Received result from worker: ${result}`);
  });

  // Listen for errors from the worker
  worker.on('error', (error) => {
    console.error(`Main thread: Worker error: ${error}`);
  });

  // Listen for the worker's exit event
  worker.on('exit', (code) => {
    if (code !== 0)
      console.error(`Main thread: Worker stopped with exit code ${code}`);
    else
      console.log('Main thread: Worker finished successfully');
  });

} else {
  // This block is executed in the worker thread
  console.log(`Worker thread: Received data ${workerData.num}`);

  // Perform some CPU-intensive task (e.g., calculating factorial)
  const factorial = (n) => {
    return n === 0 ? 1 : n * factorial(n - 1);
  };

  const result = factorial(workerData.num);

  // Send the result back to the main thread
  parentPort.postMessage(result);
}
