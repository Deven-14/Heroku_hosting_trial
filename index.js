const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    //res.send("Hello world");
    res.render("index.ejs");
});

app.listen(process.env.PORT || port, () => {
    console.log(`app listening at ${port}`);
});