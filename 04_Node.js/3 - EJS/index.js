const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.set("views", path.join(__dirname, "views"));

// path.join is used to join the current directory with the views folder. This is done to make sure that the views folder is accessible from any directory.

// view engine is used to set the template engine that we are using. In this case, we are using ejs as the template engine.
app.set("view engine", "ejs");
// app.get("/", (req, res) =>{
//     res.send("this is home");
// });

// we don't send response using ejs, but we render the responses in the form of ejs files. EJS files are templates that we can use to render the responses.

// All these templates must be created inside a folder called views. This is a default folder that express looks for when we are using ejs files.

// we have not mentioned the absolute path of home.ejs here because express automatically looks for the views folder and then looks for the file inside it. res.send is used to render the ejs file.

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hello", (req, res) => {
  res.send("this is help page");
});

// Passing data to the EJS file.
// we can pass data to the ejs file by passing an object as the second argument to the render function.
//now we can directly use the key name in the ejs file to access the value of the key.

app.get("/rolldice", (req, res) => {
  let dataVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs",{dice:dataVal}); 
  // res.render("rolldice.ejs", { dataVal });
});

app.get("/ig/:username", (req,res)=>{
    const followers = ["john", "doe", "jane", "abc"];
    let {username} = req.params;
    console.log(username);
    res.render("instagram.ejs", {username, followers});
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});
