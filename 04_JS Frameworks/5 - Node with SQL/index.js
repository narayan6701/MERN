const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '2001',
});

let q = "SHOW TABLES"

try{
    connection.query(q, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    });
}
catch(err){
    console.error("Error: ", err.message);
}

connection.end();


let createRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), 
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
};