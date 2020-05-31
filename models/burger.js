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
        orm.create("burgers", options, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.update("burgers",id , function (res) {
            cb(res);
        });
    }
};

module.exports = burger;