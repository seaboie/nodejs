const logEvents = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

// Initialize Object
const myEmitter = new MyEmitter();

// Add Listener for The log events
myEmitter.on("log", (message) => logEvents(message));

setTimeout(() => {
    myEmitter.emit("log", "🎉 Emit Emit Emit... event")
}, 1500);