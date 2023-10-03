const express = require('express');

const Product = require('../models/Product.js');
const db = require('../data/sqlitedb.js');

const productRoutes = express.Router();

productRoutes.get("/", (req, res, next) => {

    const sql = "SELECT * FROM product";

    let result = db.query(sql,{});

    console.log(result);

    return res.send("Hello from products");
});

productRoutes.post("/", (req, res, next) => {
    
    let product = new Product(null, req.body.name, req.body.quantity, req.body.priceInCents);

    //console.log(user);

    const sql = "INSERT INTO product (name, quantity, priceInCents) VALUES (@name, @quantity, @priceInCents)";

    db.execute(sql, {name: product.name, quantity: product.quantity, priceInCents: product.priceInCents});

    res.status(200).send("Product Inserted"); //TODO: enhance status

});

module.exports = productRoutes;