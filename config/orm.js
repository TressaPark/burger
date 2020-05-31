const connection = require("./connection.js")

//create an object that encompasses all the three methods below:
let orm= {
    // create method to select all - selectAll()
    selectAll: function(tableName, toModels){
        //mysql query to get the whole table burger_db.burgers;
        connection.query('SELECT * FROM ' + tableName + ';' , function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    },
    //update the boolean value of devoured column
    update: function(tableName, condition, toModels){
        console.log(tableName, condition, toModels)
        connection.query('UPDATE ' + tableName + ' SET devoured=true WHERE id='+ condition+ ';' , function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    },
    create: function(tableName, val, toModels) {
        console.log(tableName, val, toModels)
        connection.query('INSERT INTO ' + tableName + " (name) VALUES ('"+ val +"');", function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    }
};
module.exports = orm;