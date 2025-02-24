const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  app.use(express.static(path.join(__dirname, "/public/JS")));
  app.use(express.static(path.join(__dirname, "/public/CSS")));
  // It gives EJS files direct access to the public folder
  app.set("view engine", "ejs");
});

// we should have a folder named called public in the root directory of the project. This folder will contain all the static files that we want to serve.

app.get("/", (req, res) => {
  res.send("This is home");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;

  const insta_data = require("./data.json");
  const data = insta_data[username];
  console.log(data);
  if (data) {
    res.render("insta_with_data.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

// app.use((req, res) => {
//     res.send("Invalid Route");
//   });
