DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    hashedPassword TEXT NOT NULL
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    priceInCents INTEGER NOT NULL
);

DROP TABLE IF EXISTS orderproduct;
CREATE TABLE orderproduct (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    orderId TEXT NOT NULL, -- UUID, GENERATED AT RUNTIME
    productId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    quantityOrdered INTEGER NOT NULL
);