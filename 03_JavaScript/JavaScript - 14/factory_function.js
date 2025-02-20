function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    speak: function () {
      console.log(`Hello I am ${this.name}`);
    },
  };
  return person;
}

let p1 = personMaker("John", 25);
let p2 = personMaker("Jane", 22);
p1.speak();
p2.speak();
console.log(p1.speak === p2.speak);
