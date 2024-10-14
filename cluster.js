
const cluster = require('cluster');
const http = require('http');
const os = require('os');

// Check if the current process is the master
if (cluster.isMaster) {
  // Get the number of CPU cores
  const numCPUs = os.cpus().length;
  console.log(`Master process is running with PID: ${process.pid}`);
  console.log(`Forking for ${numCPUs} CPUs...\n`);

  // Fork workers (create a worker for each CPU core)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
    // Fork a new worker when one dies
    cluster.fork();
  });

} else {
  // Worker processes have an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from Worker ${process.pid}\n`);
  }).listen(8000);

  console.log(`Worker process started with PID: ${process.pid}`);
}
