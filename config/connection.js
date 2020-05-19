// set up MySQL connection
var mysql = require("mysql");
var connection;

// If the server contains the JAWSDB_URL variable, it connects to the JawsDB database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root1234",
    database: "burger_db"
  });
}

//if err throw error
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//make connection
module.exports = connection;
