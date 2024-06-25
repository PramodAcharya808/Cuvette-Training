import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.modlel.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

mongoose
  .connect(
    "mongodb+srv://pramodacharya808:UMtRy2Q8i1ggc5kV@cluster0.pehnb90.mongodb.net/cuvette-backend"
  )
  .then(() => {
    console.log("✅ Connected to Database");
  })
  .catch((err) => {
    console.log("❌ DB Connection failed" + err);
  });
