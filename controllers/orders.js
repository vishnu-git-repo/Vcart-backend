const mongoose = require("mongoose"); // Import mongoose for ObjectId conversion
const ORDERS = require("../models/order");
const PRODUCTS = require("../models/product");
const USERS = require("../models/user")
const createOrder = async (req, res) => {
    try {
        const Orders = new ORDERS({
            status: "pending",
            date: new Date(), // Store as a Date object in UTC
            user_id: req.body.user_id,
            products: req.body.products,
        });
        await Orders.save();
        console.log("Product Saved");
        res.status(201).json({ message: "Order created successfully" });
    } catch (e) {
        console.error("Product not saved:\n" + e);
        res.status(500).json({ error: "Failed to create order" });
    }
};
const getOrders = async (req, res) => {
    try {
        // Debugging: Log the entire req.query object
        console.log("Request query:", req.query.user_id);
        const userId = req.query.user_id;

        // Validate if userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: "Invalid user ID format" });
        }

        // Convert userId to ObjectId for querying
        const orders = await ORDERS.find({ user_id: new mongoose.Types.ObjectId(userId) })
            .populate({
                path: "products.product"
            });

        // Debugging: Log the retrieved orders
        console.log("Retrieved orders:", orders);

        res.status(200).send(orders);
    } catch (e) {
        console.error("Error in getOrders:", e);
        res.status(500).send(e);
    }
};

module.exports = { createOrder,getOrders };