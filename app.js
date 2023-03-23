require('dotenv').config()
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const ans = req.body.PINName;

  if(ans === process.env.ANSWER)
  res.redirect(process.env.STEP12)
    else 
    {
        res.write(
            `<h1 style="text-align: center; font-family: cursive;">Your answer is Wrong! Please try something else.</h1>`
          );
        res.write(`<h2 style="text-align: center; font-family: cursive;">Click <a href="https://tamodipdas.ml/decisiaStep11/">here</a> to go back<h3>`
          )
        res.send();
    }

});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running on port 3000");
});