import express from "express";
import { createGenericRoute } from "./utils/createGenericRoute";

const app = express();

createGenericRoute({
  app,
  path: "/data1",
  tableName: "users",
});

createGenericRoute({
  app,
  path: "/data2",
  tableName: "products",
});

app.get("/amaro", (req, res) => {
  res.json("Hola soy Amaro");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
