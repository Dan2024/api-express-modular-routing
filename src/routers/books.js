const express = require("express");
const router = express.Router();

const { books } = require("../../data.js");
let id = books.length;

router.get("/", (req, res) => {
  res.json({ books });
});

router.get("/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));

  res.json({ book });
});

router.post("/", (req, res) => {
  id++;
  const book = { ...req.body, id: id };
  books.push(book);
  res.json({ book });
});

router.delete("/:id", (req, res) => {
  const idx = books.findIndex((item) => item.id === Number(req.params.id));
  books.splice(idx, 1);
  res.json({ books });
});

router.put("/:id", (req, res) => {
  id++;
  const filmIndex = books.findIndex(
    (item) => item.id === Number(req.params.id)
  );
  books.splice(filmIndex, 1, { ...req.body, id: id });
  res.json({ books });
});

module.exports = router;
