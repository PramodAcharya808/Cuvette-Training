// const { log } = require("console");
// const http = require("http");

// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, world!");
// });

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require("express");

const app = express();

const port = 3000;
app.get("/", (req, res) => {
  res.send("Welcome to Express !");
});

app.get("/me", (req, res) => {
  res.send("Welcome to ME!");
});

app.get("/file", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
