// index.js

const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  res.json({ status: "OK" });
});

app.get("/hello", async (req, res) => {
  res.json({ message: "world again" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
