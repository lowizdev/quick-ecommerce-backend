const uuid = require('uuid');
const db = require('../data/sqlitedb.js');
const OrderProduct = require('../models/OrderProduct.js');

function registerCompleteOrder(user, orderProductRequestBody){

    const insertOrderProductSQL = "INSERT INTO orderproduct (orderId, productId, userId, quantityOrdered) VALUES (@orderId, @productId, @userId, @quantityOrdered);"

    const updateProductSQL = "UPDATE product SET quantity = @quantity WHERE id = @id"

    const selectProductSQL = "SELECT * FROM product WHERE id = @id"

    const currentOrderId = uuid.v4();

    const transactionFunction = (user, orderProductRequestBody) => {
        orderProductRequestBody.forEach(element => {
            
            let product = db.query(selectProductSQL, { id: element.productId })[0];

            console.log(product);
            console.log(element);

            let currentItemRemainingQuantity = product.quantity;

            if(product.quantity >= element.quantity){
                currentItemRemainingQuantity -= element.quantity;
            }else{
                console.log("Unable to insert... treat as error");
                throw new Error('Unable to insert');
            }

            //let currentOrderProduct = new OrderProduct(null, "test uuid", element.productId, 1, element.quantity);

            let resultOrder = db.execute(insertOrderProductSQL, {orderId: currentOrderId.toString(), productId: element.productId, userId: user.id, quantityOrdered: element.quantity});

            console.log(resultOrder);

            let resultProduct = db.execute(updateProductSQL, {quantity: currentItemRemainingQuantity, id: element.productId});

            console.log(resultProduct);
            
        });
    }

    const transactionCallback = db.transaction(transactionFunction);
    let result = transactionCallback(user, orderProductRequestBody);

    console.log(result);
}

module.exports = { registerCompleteOrder };