const express = require("express");
const User = require('../models/User.js');
const db = require('../data/sqlitedb.js');

let userRoutes = express.Router();

userRoutes.get("/", (req, res, next) => {

    res.send("Hello World");
});

userRoutes.post("/", (req, res, next) => {
    
    let hashedPassword = req.body.password; //TODO: hash
    let user = new User(null, req.body.name, req.body.email, hashedPassword);

    //console.log(user);

    const sql = "INSERT INTO user (name, email, hashedPassword) VALUES ($name, $email, $hashedPassword)";

    db.execute(sql, {$name: user.name, $email: user.email, $hashedPassword: user.hashedPassword});

    res.status(200).send("User Inserted"); //TODO: enhance status

});


module.exports = userRoutes;