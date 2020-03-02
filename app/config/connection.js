const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "!Anthon69",
        database: "ourmealplan",
        port: 3306
    });
}

connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return
    }
    console.log("connected as id " + connection.threadID);
});

module.exports - connection;