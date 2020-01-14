const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

//Init object
const myEmiter = new MyEmitter();

//Event lstener
myEmiter.on("event", () => console.log("Event Fired!"));

//Init Event
myEmiter.emit("event");
