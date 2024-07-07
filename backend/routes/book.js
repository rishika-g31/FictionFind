const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Book = require("../models/books");
const { authenticateToken } = require("./userAuth");

// Add book by admin
router.post("/add-book", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (existingUser.role !== "admin") {
      return res.status(403).json({ message: "You do not have access" });
    }

    const newbook = new Book({
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      language: req.body.language,
    });

    await newbook.save();
    res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/update-book", authenticateToken, async (req, res) => {
  try {
    const { bookid } = req.headers;
    await Book.findByIdAndUpdate(bookid, {
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      language: req.body.language,
    });

    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/delete-book", authenticateToken, async (req, res) => {
  try {
    const { bookid } = req.headers;
    await Book.findByIdAndDelete(bookid);

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get-all-books", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.json({
      status: "Succes",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/get-recent-books", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).limit(4);
    return res.json({
      status: "Succes",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get-book-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({
      status: "Succes",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
