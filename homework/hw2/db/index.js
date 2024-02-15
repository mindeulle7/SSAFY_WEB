const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "15.164.100.178",
    user: "ssafy",
    password: "ssafy_1234",
    database: "ssafy",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = { pool };