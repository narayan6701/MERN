// person is our parent class which have some common properties and methods which will be inherited by child classes.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi I am ${this.name}`);
    }
}

class student extends Person{
    constructor(name, age, marks){
        super(name, age);       //parent class constructor is being called.
        this.marks = marks;
    }
   
}

class teacher extends Person{
    constructor(name, age, subject){
        super(name,age); //parent class constructor is being called.
        this.marks = marks;
    }
   
}

let stu1 = new student("narayan", 23, 90);

console.log(stu1.name);
console.log(stu1.age);
console.log(stu1.marks);
stu1.talk();
