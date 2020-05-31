
// set up MySQL connection
var mysql = require("mysql");
let connection;

// If the server contains the JAWSDB_URL variable, it connects to the JawsDB database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "burger_db"
  });
}
connection.connect();
module.exports = connection;