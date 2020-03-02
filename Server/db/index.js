const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "!Anthon69",
        database: "ourmealplan",
        port: '3306'
    });
}

let mealdb = {};

mealdb.all = () => {
    return new Promise((resolve, reject) => {
        connection.query("select * from meal", (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

mealdb.one = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("select * from meal where id = ?", [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

mealdb.update = (id) => {
    return new Promise((resolve,reject) => {
        connection.query("UPDATE meal set DRINK = ??, BREAKFAST = ??, DINNER_1 = ??, DINNER_2 = ?? WHERE ID = ??", [])
    })
}

module.exports = mealdb;

// const mysql = require('mysql');
// var connection;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "!Anthon69",
//         database: "ourmealplan"
//     })
// }

// connection.connect(function(err) {
//     if(err) {
//         console.error("error connecting " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// })

// module.exports = connection;

// let mealinfo = {};

// mealinfo.all = () => {
//     return new Promise((resolve,reject) => {
//         connection.require("select * from meal", (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve(results);
//         })
//     })
// }

// module.exports = mealinfo;

// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;


// let tabledata = {};

// tabledata.all = () => {
//     return new Promise((resolve, reject) => {
//         connection.query("select * from meal", (err, results) => {
//             if (err) {
//                 return reject(err)
//             };
//             return resolve(results)
//         })
//     })
// }
