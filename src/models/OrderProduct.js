class OrderProduct{
    constructor(id, orderId, productId, userId, quantityOrdered){
        
        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
        this.userId = userId;
        this.quantityOrdered = quantityOrdered;
        
    }

}

module.exports = OrderProduct;
