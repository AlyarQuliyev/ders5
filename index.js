const express = require("express");
const { fillFakeData, getAllProducts, getProductById } = require("./db");
const app = express();
const port = 5000;

fillFakeData();

app.get("/products", (req, res) => {
  const { currentPage, perPage } = req.query;
  res.json(getAllProducts(currentPage, perPage));
});

app.get("/products/:id", (req, res) => {
  res.json(getProductById(req.params.id));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});