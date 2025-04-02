const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require('uuid');

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "2001",
});

// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// };
// //inserting new data
// let q = "INSERT INTO user(id, username, email, password)VALUES ?";

// let data = [];
// for(let i=0; i<100; i++){
//     data.push((getRandomUser()));
// }

// try{
//     connection.query(q, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// }
// catch(err){
//     console.error("Error: ", err.message);
// }

// connection.end();

app.listen("8080", () => {
  console.log("Server is running on port 8080");
});

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.error("Error: ", err.message);
    res.send("some error in database connection");
  }
});

//Show Route
app.get("/users", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      //    console.log(result);
      // res.send(result);
      res.render("users.ejs", { users });
    });
  } catch (err) {
    console.error("Error: ", err.message);
    res.send("some error in database connection");
  }
});

//Edit Route
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.error("Error: ", err.message);
    res.send("some error in database connection");
  }
});

//UPDATE ROUTE
app.patch("/users/:id", (req, res)=>{
    let { id } = req.params;
    let { password: formPassword, username:newUsername} = req.body;
  let q = `select * from user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPassword != user.password){
        res.send("password is not correct");
      }
      else{
        let q2 = `update user set username='${newUsername}' where id='${id}'`;
        connection.query(q2, (err, result) => {
            if(err) throw err;
            res.redirect("/users");
        })
      }
      res.send(user);
    });
  } catch (err) {
    console.error("Error: ", err.message);
    res.send("some error in database connection");
  }
});

app.get("/users/new", (req, res) => {
    res.render("new.ejs");
  });
  
  app.post("/users/new", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuid(); //Generate Unique ID
    //Query to Insert New User
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        console.log("added new user");
        res.redirect("/users");
      });
    } catch (err) {
      res.send("some error occurred");
    }
  });
  
  app.get("/users/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("delete.ejs", { user });
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });
  
  app.delete("/users/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });
