//import orm.js file
// cb = call back
const orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    insertOne: function (options, cb) {
        // console.log(id, fromORMtoRoutes);
        orm.insertOne("burgers", options, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;

//     create: function(name, fromORMtoRoutes){
//         orm.create('burgers', name, fromORMtoRoutes)
//     },
//     delete: function(){
//         orm.delete('burgers', name, fromORMtoRoutes)
//     }
// }

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