const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    attributes : {
        type : String
    },
    initial_price : {
        type : String
    },
    fixed_price : {
        type : String
    },
    seller : {
        type : String
    },
    ratings : {
        type : String
    },
    img :{
        type : String
    }
})

const PRODUCTS = mongoose.model("PRODUCTS",productSchema);
module.exports = PRODUCTS;