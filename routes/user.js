const express = require("express");
const Router = express.Router();
const path = require("path");
const { signin, login } = require("../controllers/user");

const api_uri = process.env.API_URI;

Router.post(api_uri+"/login", login);

Router.post(api_uri+"/signin", signin);

module.exports = Router;