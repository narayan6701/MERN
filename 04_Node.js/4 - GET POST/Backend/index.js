const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
// this is a middleware that will parse the body of the request and make it available in the req.body object.

app.use(express.json());
// this enables the express to understand the json data in the body of the request.

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});

app.get("/register", (req,res) =>{
    let {user, password}=req.query;
    res.send(`Standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let {user, password} = req.body;
    res.send(`Standard POST response Welcome ${user}!`);
    console.log(req.body);
    // here we are trying to get the body of the request, but we need to use a middleware to parse the body as express does not recognizing the data.
})