const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    if (username.length < 4) {
      return res
        .status(400)
        .json({ message: "Username should be more tha 3 characters" });
    }

    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const existingEmail = await User.findOne({ email: email });
    if (existingUsername) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (password.length <= 5) {
      return res
        .status(400)
        .json({ message: "Password should be of atleast 6 characters" });
    }

    const newUser = new User({
      username: username,
      email: email,
      password: password,
      address: address,
    });
    await newUser.save();
    return res.status(200).json({ message: "SignUp successfull" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

module.exports = router;
