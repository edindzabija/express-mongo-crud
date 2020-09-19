const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  author: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Book", BookSchema);