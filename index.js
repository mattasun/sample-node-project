const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "You are vising root"
  });
});

app.get("/login", (req, res) => {
  res.json({
    message: "You are vising login route"
  });
});

app.get("/signup", (req, res) => {
  res.json({
    message: "You are vising signup route"
  });
});

app.listen(8000, () => {
  console.log("App is running on 8000");
} );
