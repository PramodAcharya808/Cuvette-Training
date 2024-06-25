import express from "express";

const app = express();
const PORT = 8000;

// Middlewares
const logger = (req, res, next) => {
  console.log(`${req.url} ${req.method}`);
  next();
};

const authentication = (req, res, next) => {
  const { user } = req.query;
  if (user === "admin") {
    next();
  } else {
    res.status(404).send("Forbidden");
  }
};

// Routes
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/account", authentication, (req, res) => {
  res.send("You are authorized");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
