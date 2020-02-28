const mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "!Anthon69",
        database: "ourmealplan"
    })
}

let tabledata = {};

tabledata.all = () => {
    return new Promise((resolve, reject) => {
        connection.query("select * from meal", (err, results) => {
            if (err) {
                return reject(err)
            };
            return resolve(results)
        })
    })
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;