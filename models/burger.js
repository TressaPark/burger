//import orm.js file
var orm = require('../config/orm.js');

var burger = {
    all: function(fromORMtoRoutes){
        orm.all('burgers', function(response){
            fromORMtoRoutes(response);
        })
    },
    update: function(id, fromORMtoRoutes){
        // console.log(id, fromORMtoRoutes);
        orm.update('burgers', id, fromORMtoRoutes);
    },
    create: function(name, fromORMtoRoutes){
        orm.create('burgers', name, fromORMtoRoutes)
    },
    delete: function(){
        orm.delete('burgers', name, fromORMtoRoutes)
    }
}
module.exports = burger;

// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   all: function (cb) {
//     orm.all("burgers", function (res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays. cb = callback
//   create: function (cols, vals, cb) {
//     orm.create("burgers", cols, vals, function (res) {
//       cb(res);
//     });
//   },
//   update: function (objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function (res) {
//       cb(res);
//     });
//   },
//   delete: function (condition, cb) {
//     orm.delete("burgers", condition, function (res) {
//       cb(res);
//     });
//   }
// };
// // Export the database functions for the controller (burgersController.js).
// module.exports = burger;