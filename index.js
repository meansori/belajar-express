const express = require("express");
const app = express();
const port = 3000;
const bodyParse = require("body-parser");

app.use(bodyParse.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  console.log(req.query);

  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login berhasil");
});

app.put("/username", (req, res) => {
  console.log(req.body);

  res.send("update berhasil");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
