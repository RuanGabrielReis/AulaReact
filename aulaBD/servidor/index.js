const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const app = express();
const PORT = 3301;

app.use(cors());
app.use(express.json());
const banco = mysql2.createConnection({
    host : "localhost",
    port : 3308,
    user : "root",
    passowrd : "mysqlfatec",
    database : "aulabd"
});