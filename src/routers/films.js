const express = require("express");
const router = express.Router();

const { films } = require("../../data.js");
let id = films.length;

router.get("/", (req, res) => {
  res.json({ films });
});

router.get("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));

  res.json({ film });
});

router.post("/", (req, res) => {
  id++;
  const film = { ...req.body, id: id };
  films.push(film);
  res.json({ film });
});

router.delete("/:id", (req, res) => {
  const idx = films.findIndex((item) => item.id === Number(req.params.id));
  films.splice(idx, 1);
  res.json({ films });
});

router.put("/:id", (req, res) => {
  id++;
  const filmIndex = films.findIndex(
    (item) => item.id === Number(req.params.id)
  );
  films.splice(filmIndex, 1, { ...req.body, id: id });
  res.json({ films });
});

module.exports = router;
