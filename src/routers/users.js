const express = require("express");
const router = express.Router();

const { users } = require("../../data.js");
let id = users.length;

router.get("/", (req, res) => {
  res.json({ users });
});

router.get("/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));

  res.json({ user });
});

router.post("/", (req, res) => {
  id++;
  const user = { ...req.body, id: id };
  users.push(user);
  res.json({ user });
});

router.delete("/:id", (req, res) => {
  const idx = users.findIndex((item) => item.id === Number(req.params.id));
  users.splice(idx, 1);
  res.json({ users });
});

router.put("/:id", (req, res) => {
  id++;
  const filmIndex = users.findIndex(
    (item) => item.id === Number(req.params.id)
  );
  users.splice(filmIndex, 1, { ...req.body, id: id });
  res.json({ users });
});

module.exports = router;
