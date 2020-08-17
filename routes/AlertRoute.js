var router = require("express").Router();
var AlertController = require("../controllers/AlertController");

router.get("/search", function (req, res) {
  AlertController.search(req, res);
});
router.get("/", function (req, res) {
  AlertController.list(req, res);
});
router.get("/:id", function (req, res) {
  AlertController.show(req, res);
});
router.post("/", function (req, res) {
  AlertController.create(req, res);
});
router.put("/:id", function (req, res) {
  AlertController.update(req, res);
});
router.delete("/:id", function (req, res) {
  AlertController.remove(req, res);
});

module.exports = router;
