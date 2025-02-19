require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT =process.env.PORT || 5000;

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/bmi",)