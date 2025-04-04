const express = require("express")
const Router = express.Router()
const {createOrder,getOrders} = require("../controllers/orders")

const api_uri = process.env.API_URI
Router.route(api_uri+"/orders/create").post(createOrder)
Router.route(api_uri+"/orders/").get(getOrders)
module.exports = Router