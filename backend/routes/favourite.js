const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");

router.put("/add-book-to-favourite", authenticateToken, async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    const isBookfavourite = userData.favourites.includes(bookid);
    if (isBookfavourite) {
      return res.status(200).json({ message: "Book is already in favourites" });
    }
    await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
    res.status(200).json({ message: "Book added to favourite" });
  } catch (error) {
    console.error("Error adding book to favourites:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put(
  "/remove-book-from-favourite",
  authenticateToken,
  async (req, res) => {
    try {
      const { bookid, id } = req.headers;
      const userData = await User.findById(id);
      const isBookfavourite = userData.favourites.includes(bookid);
      if (isBookfavourite) {
        await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
      }
      return res.status(200).json({ message: "Book removed from favourite" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

router.get("/get-favourite-books", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("favourites");
    const favouriteBooks = userData.favourites;
    return res.json({
      status: "Succes",
      data: favouriteBooks,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
