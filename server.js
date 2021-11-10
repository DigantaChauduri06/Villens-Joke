const express = require("express");
const knockknock = require("knock-knock-jokes");
const supervillains = require("supervillains");
const app = express();

// Controllers section
const getJokes = (req, res, next) => {
  let joke = knockknock(); // returns a knock knock joke
  joke = joke.replace(/\n/g, " ");
  const jokes = {
    text: joke,
  };
  res.status(200).json({
    status: "success",
    jokes,
  });
  next();
};
const getSupervillens = (req, res, next) => {
  let supervillainsName = supervillains.random();
  const name = {
    villen: supervillainsName,
  };
  res.status(200).json({
    status: "success",
    name,
  });
  next();
};
const great = (req, res, next) => {
  res.status(200).send("Hello USER 😉");
  next()
};

// Routes
app.get("/", great);
app.get("/api/v1/jokes", getJokes);
app.get("/api/v1/supervillens", getSupervillens);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`APP IS RUNNING ON PORT ${PORT}`);
});
