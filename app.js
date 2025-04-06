const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const multer = require("multer")

dotenv.config({path : path.join(__dirname,"./config","./config.env")})
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



const productRoutes = require("./routes/product")
const userRoutes = require("./routes/user")
const orderRoutes = require("./routes/order")

app.use(productRoutes);
app.use(userRoutes);
app.use(orderRoutes);

module.exports = app;

