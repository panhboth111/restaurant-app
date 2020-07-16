const mongooose = require("mongoose");

const FoodSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const FoodModel = mongooose.model("Food", FoodSchema);
module.exports = FoodModel;
