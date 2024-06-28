import express from "express";
import Book from "../models/bookDetails.model.js";

const router = express.Router();

// Landing page
router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Book Details API working" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all books in the database
router.get("/allbooks", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new book
router.post("/addbook", async (req, res) => {
  const { title, author, publicationYear } = req.body;
  const bookAdded = new Book({
    title,
    author,
    publicationYear,
  });

  try {
    const result = await bookAdded.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Book not created" });
  }
});

// Search for specific book
router.get("/search", async (req, res) => {
  try {
    const { title } = req.query;
    const book = await Book.find({ title: new RegExp(title, "i") });
    res.start(200).json(book);
  } catch (error) {
    res.status(404).json({ error: "Book not found" });
  }
});

export default router;
