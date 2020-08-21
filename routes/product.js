const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

//importing the Sche, whatever
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    imageURL: req.body.imageURL,
    price: req.body.price,
  });
  try {
    const item = await product.save();
    res.json(Product);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const all = await Product.find();
    res.json(all);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
