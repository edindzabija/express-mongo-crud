const express = require("express");
const router = express.Router();

const book_controller = require("../controllers/book.controller");

router.post("/create", book_controller.book_create);

module.exports = router;
