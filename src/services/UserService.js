const db = require('../data/sqlitedb.js');
const User = require('../models/User.js');

function findUser(id){

    const sql = "SELECT * FROM user WHERE id = @id";

    let userResult = db.query(sql, { id: id })[0];

    let user = new User(userResult.id, userResult.name, userResult.email, userResult.hashedPassword);

    return user;
}

module.exports = {findUser};