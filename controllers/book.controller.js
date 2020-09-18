const Book = require("../models/book.model");

exports.book_create = (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  });

  book.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Book created successfully!");
  });
};

exports.book_details = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) return next(err);
    res.send(book);
  });
};
