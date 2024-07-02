const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");

router.put("/add-book-to-cart", authenticateToken, async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);

    const isBookAdded = userData.cart.includes(bookid);
    if (isBookAdded) {
      return res.status(200).json({ message: "Book is already in cart" });
    }
    await User.findByIdAndUpdate(id, { $push: { cart: bookid } });
    res.status(200).json({ message: "Book added to cart" });
  } catch (error) {
    console.error("Error adding book to cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put(
  "/remove-book-from-cart/:bookid",
  authenticateToken,
  async (req, res) => {
    try {
      const { bookid } = req.params;
      const { id } = req.headers;
      await User.findByIdAndUpdate(id, { $pull: { cart: bookid } });
      return res.status(200).json({ message: "Book removed from cart" });
    } catch (error) {
      console.error("Error removing book from cart:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

router.get("/get-cart-books", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("cart");
    const addedBooks = userData.cart.reverse();
    return res.json({
      status: "Success",
      data: addedBooks,
    });
  } catch (error) {
    console.error("Error fetching cart books:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
