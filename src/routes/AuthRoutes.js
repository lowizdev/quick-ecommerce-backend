const express = require("express");
const jwt = require('jsonwebtoken');

const db = require('../data/sqlitedb.js');

const User = require('../models/User.js');
const UserService = require('../services/UserService.js');

let authRoutes = express.Router();

authRoutes.post("/", (req, res, next) => {

    const user = new User(1, null, null, null); //TODO: find user in database

    const privateKey = "secret"; //TODO: SUBSTITUTE

    const token = jwt.sign({sub: user.id}, privateKey, {algorithm: 'HS256'});

    console.log(token);
    return res.send(token);

    //return res.status(500).send('Error generating token');

});

module.exports = authRoutes;