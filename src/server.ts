// Imports
import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

// Enviroment variables
dotenv.config();

// Express
const server = express();

// Views and public
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "public")));

// Routes
server.use(mainRoutes);

server.use((req, res) => {
    res.send("Página não encontrada");
});

// Turn on the server
server.listen(process.env.PORT, () => {
    return console.log("Server is running on port 3000");
});
