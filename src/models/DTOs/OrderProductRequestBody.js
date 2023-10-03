class OrderProductRequestBody{
    constructor(productsOrdered){
        this.productsOrdered = productsOrdered; //LIST
    }
}

class ItemSummary{
    constructor(productId, quantity){
        this.productId = productId;
        this.quantity = quantity;
    }
}