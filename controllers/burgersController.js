var express = require("express");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", {
    // var hbsObject = {
      burgers: data
    });
    // console.log(hbsObject);
    // res.render("index", hbsObject);
  });
});

// Add new burger
router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.json({ id: result.insertId })
  //   "name", "devoured"
  // ], [
  //   req.body.name, req.body.devoured
  // ], function(result) {
  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  let val = "devoured = " + req.body.devoured;
  burger.update(val, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();

  console.log("condition", condition);
  console.log(req.body.eaten);

  if(req.body.eaten==0){
    req.body.eaten =1;
  }
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
