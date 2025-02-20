class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk = function(){
        console.log(`Hi I am ${this.name}`);
    }
}

let p1 = new Person("adam", 23);
let p2 = new Person("eve", 22);

console.dir(p1);