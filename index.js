const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("Hello, Heroku try1");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("app started on", port);
});