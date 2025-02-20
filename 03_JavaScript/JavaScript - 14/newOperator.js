function Person(name, age){
    this.name=name;
    this.age=age;
}

let p = new Person("Harry", 24);
let p2 = new Person("Ram", 25);

Person.prototype.talk = function(){
    console.log(`Hello I am ${this.name}`);
}

console.log(p);
console.log(p2);
console.log(p.__proto__);