const express = require("express")
const Router = express.Router();
const path = require("path");

// const {product_upload} = require("../config/multer")
const {createProduct,getAllProducts} = require("../controllers/product")

const api_uri = process.env.API_URI;

Router.route(api_uri+"/products/read").get(getAllProducts);
// Router.route(api_uri+"/products/create").post(product_upload.single("img"),createProduct)
Router.route(api_uri+"/products/create").post(createProduct);

module.exports = Router 


