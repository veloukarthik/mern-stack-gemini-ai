// receive.js
const amqp = require('amqplib');

async function receiveMessage() {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'task_queue';

    // Ensure the queue exists before consuming messages
    await channel.assertQueue(queue, { durable: true });

    // Receive messages from the queue
    console.log(`Waiting for messages in ${queue}. To exit press CTRL+C`);
    channel.consume(queue, (msg) => {
      console.log(`Received message: ${msg.content.toString()}`);
      channel.ack(msg);  // Acknowledge the message after processing
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

receiveMessage();
