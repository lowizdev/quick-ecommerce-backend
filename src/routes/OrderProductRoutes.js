const express = require('express');

const User = require('../models/User.js');
const {registerCompleteOrder} = require('../services/OrderProductService.js');

const orderProductRoutes = express.Router();

orderProductRoutes.post('/', (req, res, next) => {
    
    let productsOrderedBody = req.body.productsOrdered;
    let user = new User(1, null, null, null);//new User();

    registerCompleteOrder(user, productsOrderedBody);

    return res.send("Order created");

})

module.exports = orderProductRoutes;

