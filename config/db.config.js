const mysql = require('mysql');

const dbConn = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;