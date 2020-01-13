const os = require("os");

// Get Operative System
console.log(os.platform());

//CPU arquitecture
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
