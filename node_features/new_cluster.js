const cluster = require('cluster');
const os = require('os');
const http = require('http');
if(cluster.isMaster)
{
    let cpu = os.cpus().length;

    for(let i=0; i<cpu; i++)
    {
        cluster.fork();
    }
    console.log(`Forked ${cpu} workers`);
    cluster.on('message', (worker, message, sendHandle) => {

        console.log(`Message from worker ${worker.process.pid}: ${message}`);
        sendHandle('pong');
    });
    cluster.on('exit', (worker, code, signal) => {

        console.log(`Worker ${worker.process.pid} died` );
        cluster.fork();
    });
}
else
{
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from worker ${process.pid}\n`);
    }).listen(8000);
    console.log(`Worker ${process.pid} started`);
    process.on('message', (message, sendHandle) => {
        console.log(`Message from master: ${message}`);
        sendHandle('ping');
    });
}