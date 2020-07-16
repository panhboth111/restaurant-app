const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const foodRouter = require("./routes/food");
const drinkRouter = require("./routes/drink");

const PORT = 3000;
const DB_CONNECTION = "mongodb://localhost:27017/resturaunt";
mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection established"))
  .catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/food", foodRouter);
app.use("/drink", drinkRouter);

app.get("/", (req, res) => {
  return res.json("Welcome to our resturaunt!");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}....`));
