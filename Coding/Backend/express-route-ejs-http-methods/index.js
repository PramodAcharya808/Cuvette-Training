const express = require("express");

const app = express();

const PORT = 8000;

app.use(express.static("public"));

const newMiddleware = (req, res, next) => {
  console.log("Im a new middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/file", newMiddleware, (req, res) => {
  // console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.get("/user", (req, res) => {
  res.send("User Profiles");
});

app.get("/user/:username", (req, res) => {
  username = req.params.username;
  res.send(`Welcome back ${username}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
