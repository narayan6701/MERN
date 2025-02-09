// This file is going to act as a server.
const express = require('express');

// "express" is a function that returns an object
// it is a conventional practice to store the object in a variable called app

const app = express();

console.dir(app);

// now we got different methods and properties that we can use on the app object

// app.listen is a method that listens for incoming requests on a specific port

let port = 3000; //8080

// a port is a logical communication endpoint used to exchange information between a web server and a web client. It is a numerical value that identifies a specific process or service on a server. When a server listens on a port, it is waiting for incoming network requests directed to that port.

// Port 3000 is a common port used for development purposes. It is not reserved for any specific service or protocol making it a convenient choice for developers to use without conflicting with other services that might be running on the same server. they can be used to make custom servers.

app.listen(port, () => {
    console.log(`app listening on the port ${port}`);
});

// app.listen is a method that listens for incoming requests on a specific port. It has two parameters, the first one is the port number and the second one is a callback function that will be called when the app starts listening on the given port.