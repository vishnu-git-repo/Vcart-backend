const mongoose = require("mongoose");
const {Schema} = mongoose;
const USERS = require("./user");
const PRODUCTS = require("./product")

const orderSchema = new mongoose.Schema({
    status: {
        type : String,
        default : "pending" 
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "USERS" // Use the model name as the ref
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "PRODUCTS", // Use the model name as the ref
            },
            product_quantity: {
                type: String,
            }
        }
    ]
});

const ORDERS = mongoose.model("ORDERS", orderSchema);
module.exports = ORDERS;