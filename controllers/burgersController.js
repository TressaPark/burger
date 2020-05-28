const express = require("express");
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");
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
  let newBurger = `burger_name = "${req.body.name}"`
  burger.insertOne(newBurger, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne("devoured = true ", condition, function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

    // console.log("condition", condition);
    // console.log(req.body.devoured);

    // if (req.body.devoured == 0) {
    //   req.body.devoured = 1;
  }
  );
});

// router.delete("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function (result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;