var express = require("express");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    // hbs Handlebars Object
    var hbsObject = {
      // res.render("index", {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// Add new burger
router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.name, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let id = req.params.id;
  burger.updateOne( id, function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  }
  );
});
module.exports = router;