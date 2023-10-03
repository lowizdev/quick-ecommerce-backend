//const sqlite = require('sqlite3').verbose();
const path = require('path');
let dbPath = path.resolve('./src/database.sqlite');
//const db = new sqlite.Database(dbPath, { fileMustExist: true });
//const dbForTransaction = new sqlite.Database(dbPath, { fileMustExist: true });

const bettersqlite = require('better-sqlite3');
const db = bettersqlite(dbPath);

let isTransactionOpen = false;

function query(sql, params){
    return db.prepare(sql).all(params);
}

function execute(sql, params){
    return db.prepare(sql).run(params);
}

function transaction(callback){
    return db.transaction(callback);
}

/*
function query(sql, params){
    let result = null;
    
    db.prepare(sql).all(params, (err, rows) => {
        result = rows
    });

    return result;
}

function executeTransactional(callback){
    isTransactionOpen = true;
    dbForTransaction.exec("BEGIN");
    return dbForTransaction.serialize(callback);
}

function commit(){
    isTransactionOpen = false;
    return dbForTransaction.exec("COMMIT");
}

function rollback(){
    isTransactionOpen = false;
    return dbForTransaction.exec("ROLLBACK");
}
*/

module.exports = {
    execute,
    query,
    transaction,
    /*executeTransactional,
    commit,
    rollback*/

}