const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
require("dotenv").config();

//Schema options
mongoose.set("strictQuery", false); //Para que no de error al hacer una query con un campo que no existe en el schema
mongoose.set("runValidators", true); //Para que al hacer un update, se validen los campos


//Levantar el servidor
const PORT = 8000;
const app = express();

app.use(express.json());
// app.use(cors());

const URL = process.env.DATABASE_URL;

mongoose.connect(URL, { useNewUrlParser: true }); //Conectar a la base de datos

const db = mongoose.connection;

db.once("Connected", () => {
  console.log("Database connected");
});

db.on("Disconected", () => {
  console.log("Database disconected");
});

db.on("Error", (error) => {
  console.log("Database error", error);
});

// const list = require("./Controller/listController");
// app.use("/", list);
// const user = require("./Controller/userController");
// app.use("/", user);
// const sales = require("./Controller/salesController");
// app.use("/", sales);
// const product = require("./Controller/productController");
// app.use("/", product);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});