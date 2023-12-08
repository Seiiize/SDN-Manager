const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  console.log(req.body);
  const savedUser = await newUser.save();
  try {
    res.status(200).json(savedUser);
  } catch {
    res.status(500).json("SERVER ERR");
  }
});
//Login
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
    password: req.body.password,
  });

  if (!user) {
    return res.status(401).json("Invalid credentials");
  }

  const { password, ...others } = user._doc;
  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    "key"
  );

  res.status(200).json({ ...others, accessToken });
});

// get all users
router.get("/", async (req, res) => {
  const allUsers = await User.find();
  try {
    res.status(200).json(allUsers);
  } catch {
    res.status(500).json("SERVER ERR");
  }
});
//update User
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
