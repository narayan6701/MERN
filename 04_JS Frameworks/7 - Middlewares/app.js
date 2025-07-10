const express = require('express');
const app = express();

// Middleware sends response immediately

app.use((req,res)=> {
    let {query} = req.query;
    console.log("Query parameter:", query);
    console.log("Middleware executed");
    res.send("Response from middleware");
});


app.get("/", (req, res) => {
    res.send("hi i am root");
})

app.get("/random", (req,res) => {
    res.send("Random response");
});
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});