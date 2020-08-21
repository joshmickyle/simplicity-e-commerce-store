const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
    // unique: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
