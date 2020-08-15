var router = require('express').Router()
var MetricSourceController = require ('../controllers/MetricSourceController')

router.get('/', function(req, res) {
  MetricSourceController.list(req, res)
})
module.exports = router