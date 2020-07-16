const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

router.get("/", async (req, res) => {
  const food = await Food.find();
  return res.json(food);
});
router.get("/:name", async (req, res) => {
  const targetFood = await Food.findOne({ name: req.body.name });
  return res.json(targetFood);
});
router.post("/", async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const newFood = await Food.create({ name, price });
  return res.json(newFood);
});

module.exports = router;
