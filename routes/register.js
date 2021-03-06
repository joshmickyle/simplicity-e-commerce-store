const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route POST api/users
//@desc Register a user
// @access Public

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 720000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// get all the users
router.get("/", async (req, res) => {
  try {
    const all = await User.find();
    res.json(all);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
