const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    //res.send("Hello world");
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`app listening at ${port}`);
});