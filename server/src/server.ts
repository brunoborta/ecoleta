import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("Listagem de Usuarios");

  res.json(["Diego", "Cleiton", "Robson", "Bruno"]);
});
app.listen(3333);
