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

app.use((req, res)=>{
    console.log("we got a request");
    console.log(req);
    console.log("This is a response");
    console.log(res);
    // res.send("This is a response");
    // res.send({
    //     name:"apple",
    //     color:"red"
    // })
    let code = "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Orange</li></ul>"
    res.send(code);
});

// app.use is a method in Express.js used to set up middleware functions. Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. These functions can perform various tasks, such as modifying the request or response objects, ending the request-response cycle, or calling the next middleware function in the stack.

// Whenever we send a request to the server, the http request is text based request, such that servers made using different technologies are able to understand the request. 

// But Express.js converts that text based request into a JavaScript object called req and it also converts the response into a JavaScript object called res. This process is called parsing.

// res.send() is a method in Express.js used to send a response in the JSON format to the client. It can be used to send a string, an object, an array, html code or a buffer as a response. When res.send() is called, Express.js automatically sets the Content-Type header based on the type of the response.

