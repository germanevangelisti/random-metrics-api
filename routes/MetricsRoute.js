var router = require("express").Router();
var MetricsController = require("../controllers/MetricsController");

router.get("/", function (req, res) {
  MetricsController.list(req, res);
});
module.exports = router;
