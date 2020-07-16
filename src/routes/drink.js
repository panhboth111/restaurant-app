const express = require("express");
const router = express.Router();

const drinks = [
  { name: "Coke", price: "1$", id: 0 },
  { name: "Pepsi", price: "1$", id: 1 },
  { name: "Samurai", price: "1$", id: 2 },
];

router.get("/", (req, res) => {
  return res.json(drinks);
});
router.post("/", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const id = drink.length;
  const newDrink = { name, price, id };
  drinks.push(newDrink);
  return res.json(drinks);
});

module.exports = router;
