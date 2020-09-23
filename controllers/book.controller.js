const Book = require("../models/book.model");

exports.book_create = (req, res, next) => {
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

exports.all_books = (req, res, next) => {
  Book.find({}, (err, book) => {
    if (err) return next(err);
    res.json(book);
  });
};

exports.book_details = (req, res, next) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) return next(err);
    res.send(book);
  });
};

exports.book_update = (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, book) => {
    if (err) return next(err);
    res.send("Book Udpated.");
  });
};

exports.book_delete = (req, res, next) => {
  Book.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send("Book Deleted");
  });
};
