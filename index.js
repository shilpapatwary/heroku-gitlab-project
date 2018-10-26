const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("Hello, Heroku");
});

app.get("/echo/:name",(req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("app started on", port);
});