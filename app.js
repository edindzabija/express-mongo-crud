const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const book = require("./routes/book.routes");

const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qvwwc.gcp.mongodb.net/books?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }, () => {
      console.log('MongoDB Connected')
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/books", book);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
