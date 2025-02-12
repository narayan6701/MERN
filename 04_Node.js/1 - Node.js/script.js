let n = 5;
for(let i=0; i<n; i++){
    console.log("hello, ",i);
}

console.log("Narayan Bhardwaj");
console.log(process.argv);

// node script.js hello bye


const someValue = require("./math.js");

console.log(someValue);

console.log(someValue.sum(2,2));
console.log(someValue.pi);
console.log(someValue.g);