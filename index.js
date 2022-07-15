require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.error(error);
});

database.once("connected", () => {
    console.log("Base de datos conectada.");
});

const app = express();
app.use(cors());
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

const comp = require("./routes/companies");
app.use("/api", comp);
const usr = require("./routes/users");
app.use("/api", usr);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor express ejecuándose en http://${process.env.HOST}:${process.env.PORT}/`);
});