const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on('userLoggedIn', (username) => {
  console.log(`User ${username} logged in.`);
});

console.log("loading");
setTimeout(()=>{
  emitter.emit('userLoggedIn', 'John Doe');
},1000)
