
// set up MySQL connection
const mysql = require("mysql");
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

//if err throw error
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

//make connection
connection.connect();
module.exports = connection;