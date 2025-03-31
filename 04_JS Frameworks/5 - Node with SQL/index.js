const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '2001',
});
//inserting new data
let q = "INSERT INTO user(id, username, email, password)VALUES ?";
let users =  [["13b", "12_newuserb", "ab@gmail.comb", "abcb"], ["13c", "12_newuserc", "ab@gmail.comc", "abcc"]];

try{
    connection.query(q, [users], (err, result) => {
        if(err) throw err;
        console.log(result);
    });
}
catch(err){
    console.error("Error: ", err.message);
}

connection.end();


let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), 
        faker.internet.email(),
        faker.internet.password(),
    ];
};