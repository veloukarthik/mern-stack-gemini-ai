const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on('userLoggedIn', (username) => {
  console.log(`User ${username} logged in.`);
});

emitter.emit('userLoggedIn', 'John Doe');