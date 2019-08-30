let express = require("express");
let burger = require("../models/burger.js");

let router = express.Router();
    
router.get("/", function(req, res) {
    burger.selectAll(function(results) {
        let hbsObject = {
            burgers: results
        };

        // console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;


