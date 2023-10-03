const express = require("express");
const { passport } = require("./utils/configureJwtStrategy.js");//require("passport");

//require('./utils/configureJwtStrategy.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoutes = require("./routes/UserRoutes.js");
const productRoutes = require("./routes/ProductRoutes.js");
const orderProductRoutes = require("./routes/OrderProductRoutes.js");
const authRoutes = require("./routes/AuthRoutes.js");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders/products", orderProductRoutes);
app.use("/auth", authRoutes);

app.post("/test-auth", passport.authenticate('jwt', { session: false }), function(req, res, next) {
    return res.send("Authenticated");
});

app.listen(port);