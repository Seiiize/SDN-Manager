const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const lowerCaseUsername = username.toLowerCase();
  const lowerCaseEmail = email.toLowerCase();

  const usernameExists = await User.findOne({ username: lowerCaseUsername });
  if (usernameExists) {
    return res.status(400).json("Username is already in use");
  }

  const emailExists = await User.findOne({ email: lowerCaseEmail });
  if (emailExists) {
    return res.status(400).json("Email is already in use");
  }

  const newUser = new User({
    username: lowerCaseUsername,
    email: lowerCaseEmail,
    password: password,
  });

  const savedUser = await newUser.save();
  try {
    res.status(200).json(savedUser);
  } catch {
    res.status(500).json("SERVER ERR");
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const lowerCaseUsername = username.toLowerCase();
  const user = await User.findOne({
    username: lowerCaseUsername,
    password: password,
  });

  if (!user) {
    return res.status(401).json("Invalid credentials");
  }

  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    "key"
  );

  res.status(200).json({ accessToken });
});

router.get("/", async (req, res) => {
  const allUsers = await User.find();
  try {
    res.status(200).json(allUsers);
  } catch {
    res.status(500).json("SERVER ERR");
  }
});

router.put("/log/:id", async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });
  try {
    res.status(200).json(updateUser);
  } catch {
    res.status(401).json("you are not authorized");
  }
});

module.exports = router;
