// send.js
const amqp = require('amqplib');

async function sendMessage() {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'task_queue';
    const message = 'Hello, RabbitMQ!';

    // Ensure the queue exists before sending messages
    await channel.assertQueue(queue, { durable: true });

    // Send a message to the queue
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Message sent: ${message}`);

    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

sendMessage();
