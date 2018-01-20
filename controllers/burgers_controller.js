//OUTBOUND server.js


// ROUTER
var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burgers.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burObj = {
            burgers: data
        };
        console.log(burObj);
        res.render("index", burObj);
    });
});

router.post("/", function(req,res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name 
    ], function() {
        res.redirect("/");
    });
});


router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log(condition);

  burger.updateOne({
    devoured: true
  }, condition, function(result) {
	res.redirect("/");
    }
  });
});



module.exports = router;