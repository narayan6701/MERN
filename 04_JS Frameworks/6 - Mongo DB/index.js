const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  emaill: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
// 	name:"Narayan",
// 	email:"narayan6701@outlook.in",
// 	age:48
// });

// const user2 = new User({
// 	name:"hari",
// 	email:"hari6701@outlook.in",
// 	age:48
// });

// user1.save();

// user2.save()
// .then((res) => {
// 	console.log(res);
// })
// .catch(err=>{
// 	console.log(err)
// });

// User.insertMany([
//   {name:"Tony", emal:"tony@gmail.com", age:50},
//   {name: "Peter", email:"peter@gmail.com", age:30},
//   {name:"Bruce", email:"bruce@gmail.com", age:40}
// ]).then((res) => {
//   console.log(res);
// });

// User.find({age:{$gt:47}}).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

User.updateOne({ name: "Tony" }, { age: 49 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.updateMany({age:{$gt:1}}, {age: 100})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
