var express = require("express");
var router = express.Router();
const shapes = require("../shapes");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(shapes);
});

module.exports = router;
