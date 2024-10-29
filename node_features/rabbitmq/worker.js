// worker.js
const amqp = require('amqplib');

async function startWorker() {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });
    channel.prefetch(1);  // Send tasks to workers one by one

    console.log(`Worker is waiting for tasks in ${queue}.`);

    channel.consume(queue, (msg) => {
      const message = msg.content.toString();
      console.log(`Worker processing task: ${message}`);

      // Simulate task processing time
      setTimeout(() => {
        console.log(`Worker completed task: ${message}`);
        channel.ack(msg);
      }, 1000);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

startWorker();
 