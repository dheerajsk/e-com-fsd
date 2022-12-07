
const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const server = express();
server.listen(4100);

// configure middlewares.
server.use(bodyParser.json());

server.use("/api/products", productRoutes);
server.use("/api/auth", authRoutes);

server.get("/",(req, res)=>{
    res.send("Welcome to E-Com Server");
});

console.log("Server is listening on 4100");