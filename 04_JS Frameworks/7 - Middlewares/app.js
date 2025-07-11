const express = require('express');
const app = express();

// Middleware sends response immediately

// app.use((req,res, next)=> {
//     console.log("Middleware 1 executed");
//     next();
//     // console.log("this is after next in Middleware 1");
//     // return next();
// });

// app.use((req, res, next) => {
//     console.log("Middleware 2 executed");
//     next();
// }); 

app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

app.get("/", (req, res) => {
    res.send("hi i am root");
})

app.get("/random", (req,res) => {
    res.send("Random response");
});
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

