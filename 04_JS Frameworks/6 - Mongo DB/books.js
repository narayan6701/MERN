const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}


const bookSchema = new mongoose.Schema({
     title:{
          type: String,
          required:true,
          maxlength: 20,
     },
     author:{
          type: String,
     },
     price:{
          type: Number,
          min:[1, "price is too low for a book"]
     },
     discount:{
          type: Number,
          default: 0
     },
     category:{
          type: String,
          enum: ["fiction", "non-fiction"]
     },
     genre:{
          type: [String]
     }
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Maths VIII", 
//     author: "Popatlal",
//     price: 10,
//     category : "fiction",
//     genre: ["maths", "science"],
//     discount: 5
// });

// book1.save().then(res => {
//     console.log(res);
// }).catch(err => {
//   console.log(err);
// });

Book.findByIdAndUpdate("68189641466e1a43ea94d647", {price:-100}, {runValidators:true})
.then(res=>{
  console.log(res);
})
.catch(err=>{
  console.log(err.errors.price.message);
  console.log(err.errors.price.properties);
});

