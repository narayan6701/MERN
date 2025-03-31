const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '2001',
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), 
        faker.internet.email(),
        faker.internet.password(),
    ];
};
//inserting new data
let q = "INSERT INTO user(id, username, email, password)VALUES ?";

let data = [];
for(let i=0; i<100; i++){
    data.push((getRandomUser()));
}

try{
    connection.query(q, [data], (err, result) => {
        if(err) throw err;
        console.log(result);
    });
}
catch(err){
    console.error("Error: ", err.message);
}

connection.end();
