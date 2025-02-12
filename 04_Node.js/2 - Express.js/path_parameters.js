const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/",(req, res) => {
    res.send("hello ! I am the root route");
})


// Path parameters

// Path parameters are used to capture the values in the URL. Here we use colon(:) after the route and then we have a variable name. The value of that variable will be captured from the URL (in the req parameter of the callback function).
app.get("/:username", (req,res) => {
    console.log(req.params);
    console.log(req.params.username);
    res.send(`Hello ${req.params.username}`);
});

app.get("/:username/:age", (req,res) => {
    console.log(req.params);
    console.log(req.params.username);
    console.log(req.params.age);
    res.send(`Hello ${req.params.username}, your age is ${req.params.age}`);
})