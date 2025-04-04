const express = require("express");
const router = express.Router();

// Mock database or replace with actual database logic
const orders = [
    {
        _id: "1",
        status: "pending",
        date: "2023-10-01",
        products: [
            {
                product: {
                    name: "Product A",
                    attributes: "Color: Red, Size: M",
                    seller: "Seller A",
                    initial_price: 1000,
                    fixed_price: 800,
                    img: "product-a.jpg",
                },
            },
        ],
    },
    {
        _id: "2",
        status: "delivered",
        date: "2023-09-25",
        products: [
            {
                product: {
                    name: "Product B",
                    attributes: "Color: Blue, Size: L",
                    seller: "Seller B",
                    initial_price: 2000,
                    fixed_price: 1500,
                    img: "product-b.jpg",
                },
            },
        ],
    },
];

// Route to fetch orders
router.get("/orders", (req, res) => {
    const user_id = req.query.user_id; // Access user_id from query params
    if (!user_id) {
        return res.status(400).json({ error: "User ID is required" });
    }

    // Filter orders based on user_id (mock logic)
    const userOrders = orders.filter((order) => order.user_id === user_id);

    res.json(userOrders.length ? userOrders : orders); // Return all orders for now
});

module.exports = router;