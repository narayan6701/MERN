var figlet = require("figlet");

figlet("Shri Ram", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

var giveMeAJoke = require('give-me-a-joke');

giveMeAJoke.getRandomDadJoke (function(joke) {
  console.log(joke);
});