
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const server = express();
server.listen(4100);

server.use("/api/products", productRoutes);
// server.get("/api/cart", cartRouter);

server.get("/",(req, res)=>{
    res.send("Welcome to E-Com Server");
});

console.log("Server is listening on 4100");