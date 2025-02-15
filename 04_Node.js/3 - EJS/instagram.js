const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  app.set("view engine", "ejs");
});

app.get("/", (req, res) => {
  res.send("This is home");
});

app.get("/ig/:username", (req, res) => {

    let {username} = req.params;

  const insta_data = require("./data.json");
  const data = insta_data[username];
  console.log(data);
  if(data){
    res.render("insta_with_data.ejs", {data});
  }
  else{
    res.render("error.ejs");
  }
  
  
});





app.use((req, res) => {
    res.send("Invalid Route");
  });
