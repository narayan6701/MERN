// OOPs in JavaScript

const stu1 = {
    name: 'Narayan',
    age: 23,
    marks: 0,
    getMarks: ()=>{
        return this.marks;
    }
};

const stu2 = {
    name: 'Nishant',
    age: 23,
    marks: 100,
    getMarks: ()=>{
        return this.marks;
    }
};

const stu3 = {
    name: 'Payal',
    age: 23,
    marks: 100,
    getMarks: ()=>{
        return this.marks;
    }
};

const stu4 = {
    name: 'Siddharth',
    age: 23,
    marks: 100,
    getMarks: ()=>{
        return this.marks;
    }
};

// Here we made many objects with some properties and methods. But the problem is that we have to write the same method for each object. So, we can use the concept of prototype to solve this problem.

let arr = [1,2,3];
arr.sayHello = () => {
    console.log("Hello, I am arr");
}

//That's a neat way to add a method to an array object in JavaScript! You've essentially added a new property, sayHello, to your array arr. When you call arr.sayHello(), it will execute the function and log the message to the console.

console.log(arr._proto_);

//arr.__proto__ is used to return the prototype of the object. In this case, it returns the prototype of the array object.

arr.__proto__.push = (n) => { console.log(`Pushing number ${n}`); };
console.log(Array.prototype);
console.log(String.prototype);
