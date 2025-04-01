const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '2001',
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

app.listen("8080", ()=>{
    console.log("Server is running on port 8080");
});

app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try{
            connection.query(q, (err, result) => {
                if(err) throw err;
                let count = (result[0]["count(*)"]);
                res.render("home.ejs", {count});
            });
        }
        catch(err){
            console.error("Error: ", err.message);
            res.send("some error in database connection");
        }
});

//Show Route
app.get("/users", (req, res) => {
    let q = "SELECT * FROM user";
    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
        //    console.log(result);
            // res.send(result);
            res.render("users.ejs", {users});
        });
    }
    catch(err){
        console.error("Error: ", err.message);
        res.send("some error in database connection");
    }
});

//Edit Route
app.get("users/:id/edit", (req, res) => {});

