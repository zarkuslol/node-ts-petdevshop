"use strict";
exports.__esModule = true;
// Imports
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var mustache_express_1 = require("mustache-express");
var path_1 = require("path");
var index_1 = require("./routes/index");
// Enviroment variables
dotenv_1["default"].config();
// Express
var server = (0, express_1["default"])();
// Views and public
server.set("view engine", "mustache");
server.set("views", path_1["default"].join(__dirname, "views"));
server.engine("mustache", (0, mustache_express_1["default"])());
server.use(express_1["default"].static(path_1["default"].join(__dirname, "public")));
// Routes
server.use(index_1["default"]);
server.use(function (req, res) {
    res.send("Página não encontrada");
});
// Turn on the server
server.listen(process.env.PORT, function () {
    return console.log("Server is running on port 3000");
});
